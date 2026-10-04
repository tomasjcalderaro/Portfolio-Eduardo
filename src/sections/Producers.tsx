import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

import { supabase } from "../lib/supabase";
import labiosImg from "../assets/images/labios.webp";

interface Procedure {
  id: number;
  name: string;
  description: string | null;
  image_url: string | null;
}

const Producers = () => {
  const [procedures, setProcedures] = useState<Procedure[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProcedures = async () => {
      const { data, error } = await supabase
        .from("procedures")
        .select("id, name, description, image_url")
        .eq("is_active", true)
        .order("id")
        .limit(6);

      if (error) {
        console.error("Error al obtener procedimientos:", error);
      } else {
        setProcedures(data ?? []);
      }

      setLoading(false);
    };

    getProcedures();
  }, []);

  // Si no hay procedimientos para mostrar, no se dibuja la sección
  if (!loading && procedures.length === 0) return null;

  return (
    <section
      id="procedures"
      className="py-24 bg-gradient-to-b from-white to-soft"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 px-6">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">
            Tratamientos
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Procedimientos
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Descubrí los tratamientos estéticos más solicitados para realzar tu
            belleza natural con resultados armónicos y profesionales.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-600 py-16">
            Cargando procedimientos...
          </p>
        ) : (
          <div className="px-4 md:px-10">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={24}
              slidesPerView={1.1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!pb-12 !px-2"
            >
              {procedures.map((proc) => (
                <SwiperSlide key={proc.id} className="!h-auto">
                  <Link
                    to={`/procedimientos/${proc.id}`}
                    className="group block h-full"
                  >
                    <div
                      className="
                        bg-white
                        rounded-3xl
                        overflow-hidden
                        shadow-lg
                        hover:shadow-2xl
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        border
                        border-primary/10
                        h-full
                        flex
                        flex-col
                      "
                    >
                      <img
                        src={proc.image_url || labiosImg}
                        alt={proc.name}
                        loading="lazy"
                        className="w-full h-64 object-cover bg-soft"
                      />

                      <div className="p-6 flex flex-col flex-1">
                        <span className="text-xs font-semibold tracking-widest uppercase text-primary/70">
                          Tratamiento estético
                        </span>

                        <h3 className="text-xl font-semibold mt-3 mb-3 text-dark">
                          {proc.name}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed flex-1">
                          {proc.description}
                        </p>

                        <span
                          className="
                            mt-5
                            bg-primary
                            text-white
                            px-5
                            py-2
                            rounded-full
                            text-center
                            font-medium
                            group-hover:bg-secondary
                            transition
                          "
                        >
                          Ver más
                        </span>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        <div className="text-center mt-4 px-6">
          <Link
            to="/procedimientos"
            className="
              inline-flex
              border
              border-primary
              text-primary
              font-medium
              px-8
              py-3
              rounded-full
              hover:bg-primary
              hover:text-white
              transition
            "
          >
            Ver todos los procedimientos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Producers;
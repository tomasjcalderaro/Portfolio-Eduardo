import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { producers } from "../data/producers";

const Producers = () => {
  return (
    <section
      id="procedures"
      className="py-20 bg-gradient-to-b from-white to-soft"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Procedimientos
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Descubrí los tratamientos estéticos más solicitados para realzar tu
          belleza natural con resultados armónicos y profesionales.
        </p>

        <div className="px-4 md:px-10">
          <Swiper
            spaceBetween={24}
            slidesPerView={1.1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {producers.map((proc) => (
              <SwiperSlide key={proc.id}>
                <Link
                  to={`/procedimientos/${proc.slug}`}
                  className="block h-full"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src={proc.image}
                      alt={proc.title}
                      className="w-full h-64 object-cover"
                    />

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-dark">
                        {proc.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {proc.description}
                      </p>

                      <button className="mt-5 bg-primary text-white px-5 py-2 rounded-full hover:opacity-90 transition">
                        Ver más
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Producers;
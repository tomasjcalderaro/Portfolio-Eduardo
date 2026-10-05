import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { supabase } from "../lib/supabase";
import { useDocumentTitle } from "../lib/useDocumentTitle";

import labiosImg from "../assets/images/labios.webp";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Modal from "../components/ui/Modal";
import ContactSection from "../components/forms/ContactSection";

interface Procedure {
    id: number;
    name: string;
    description: string | null;
    image_url: string | null;
    }

    const Procedures = () => {
    useDocumentTitle("Procedimientos | Dr. Eduardo Argüello");

    const [openContact, setOpenContact] = useState(false);

    const [procedures, setProcedures] = useState<Procedure[]>([]);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const getProcedures = async () => {
        const { data, error } = await supabase
            .from("procedures")
            .select("id, name, description, image_url")
            .eq("is_active", true)
            .order("id");

        if (error) {
            console.error("Error al obtener procedimientos:", error);
            setHasError(true);
        } else {
            setProcedures(data ?? []);
        }

        setLoading(false);
        };

        getProcedures();
    }, []);

    return (
        <>
        <Navbar onOpenContact={() => setOpenContact(true)} />

        <main className="min-h-screen bg-gradient-to-b from-white via-soft to-white pt-32 pb-24 px-6">
            <section className="text-center mb-16">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
                Medicina estética
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-4">
                Nuestros procedimientos
            </h1>

            <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg">
                Tratamientos personalizados orientados a mejorar la calidad de la
                piel, armonizar rasgos y potenciar la belleza natural.
            </p>
            </section>

            <section className="max-w-7xl mx-auto">
            {loading && (
                <p className="text-center text-gray-600 text-lg py-20">
                Cargando procedimientos...
                </p>
            )}

            {!loading && hasError && (
                <p className="text-center text-gray-600 text-lg py-20">
                No pudimos cargar los procedimientos. Probá de nuevo en unos
                minutos.
                </p>
            )}

            {!loading && !hasError && procedures.length === 0 && (
                <p className="text-center text-gray-600 text-lg py-20">
                Muy pronto vamos a publicar nuestros tratamientos.
                </p>
            )}

            {!loading && !hasError && procedures.length > 0 && (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {procedures.map((proc) => (
                    <Link
                    key={proc.id}
                    to={`/procedimientos/${proc.id}`}
                    className="group block h-full"
                    >
                    <div
                        className="
                        h-full
                        bg-white
                        rounded-3xl
                        overflow-hidden
                        shadow-lg
                        hover:shadow-2xl
                        hover:-translate-y-2
                        transition-all
                        duration-300
                        border
                        border-primary/10
                        flex
                        flex-col
                        "
                    >
                        <img
                        src={proc.image_url || labiosImg}
                        alt={proc.name}
                        loading="lazy"
                        className="w-full h-64 md:h-72 object-cover bg-soft"
                        />

                        <div className="p-6 flex flex-col flex-1">
                        <span className="text-xs font-semibold tracking-widest uppercase text-primary/70">
                            Tratamiento estético
                        </span>

                        <h2 className="text-2xl font-bold mt-3 mb-3 text-dark">
                            {proc.name}
                        </h2>

                        <p className="text-gray-600 leading-relaxed flex-1">
                            {proc.description}
                        </p>

                        <span
                            className="
                            mt-6
                            w-full
                            py-3
                            rounded-full
                            bg-primary
                            text-white
                            font-medium
                            text-center
                            group-hover:bg-secondary
                            transition
                            "
                        >
                            Ver tratamiento
                        </span>
                        </div>
                    </div>
                    </Link>
                ))}
                </div>
            )}
            </section>
        </main>

        <Footer onOpenContact={() => setOpenContact(true)} />

        {openContact && (
            <Modal onClose={() => setOpenContact(false)}>
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-3">Solicitar Consulta</h2>

                <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />

                <p className="text-gray-600 mb-8">
                Completá el formulario y nos pondremos en contacto con vos a la
                brevedad.
                </p>

                <ContactSection />
            </div>
            </Modal>
        )}
        </>
    );
};

export default Procedures;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { supabase } from "../lib/supabase";

import labiosImg from "../assets/images/labios.jpg";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Modal from "../components/ui/Modal";
import ContactSection from "../components/forms/ContactSection";

interface Procedure {
    id: number;
    name: string;
    description: string;
    full_description: string | null;
    benefits: string[] | null;
    estimated_duration: number | null;
    image_url: string | null;
    video_url: string | null;
    }

    const ProcedureDetail = () => {
    const [openContact, setOpenContact] = useState(false);

    const { id } = useParams();

    const [procedure, setProcedure] = useState<Procedure | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProcedure = async () => {
        if (!id) {
            setLoading(false);
            return;
        }

        const { data, error } = await supabase
            .from("procedures")
            .select("*")
            .eq("id", Number(id))
            .eq("is_active", true)
            .single();

        if (error) {
            console.error("Error al obtener el procedimiento:", error);
            setProcedure(null);
        } else {
            console.log("Procedimiento obtenido desde Supabase:", data);
            setProcedure(data);
        }

        setLoading(false);
        };

        getProcedure();
    }, [id]);

    if (loading) {
        return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-600 text-lg">
            Cargando procedimiento...
            </p>
        </div>
        );
    }

    if (!procedure) {
        return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-center text-3xl">
            Procedimiento no encontrado
            </h1>
        </div>
        );
    }

    return (
        <>
        <Navbar
            onOpenContact={() => setOpenContact(true)}
        />

        <main className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-soft min-h-screen">
            <div className="max-w-5xl mx-auto">

            {/* Imagen principal */}
            <div className="flex justify-center">
                <div
                className="
                    bg-transparent
                    flex
                    justify-center
                "
                >
                <img
                    src={procedure.image_url || labiosImg}
                    alt={procedure.name}
                    className="
                    max-h-[650px]
                    object-contain
                    transition-all
                    duration-500
                    hover:scale-110
                    cursor-pointer
                    "
                />
                </div>
            </div>

            {/* Título */}
            <h1
                className="
                text-4xl
                md:text-5xl
                font-bold
                mt-12
                text-center
                "
            >
                {procedure.name}
            </h1>

            {/* Descripción */}
            <p
                className="
                text-gray-600
                mt-6
                text-lg
                leading-relaxed
                text-center
                max-w-3xl
                mx-auto
                "
            >
                {procedure.full_description || procedure.description}
            </p>

            {/* Beneficios */}
            <div className="mt-16">
                <h2
                className="
                    text-3xl
                    font-bold
                    text-center
                    mb-10
                "
                >
                Beneficios
                </h2>

                <div
                className="
                    grid
                    md:grid-cols-2
                    gap-5
                "
                >
                {procedure.benefits?.map((benefit) => (
                    <div
                    key={benefit}
                    className="
                        bg-white
                        rounded-2xl
                        p-5
                        shadow-md
                        flex
                        items-center
                        gap-3
                    "
                    >
                    <span className="text-primary text-xl">
                        ✓
                    </span>

                    <span>{benefit}</span>
                    </div>
                ))}
                </div>
            </div>

            {/* Duración */}
            <div
                className="
                mt-8
                p-8
                bg-white
                rounded-3xl
                shadow-lg
                text-center
                "
            >
                <h2 className="text-2xl font-semibold mb-2">
                Duración del tratamiento
                </h2>

                <p className="text-gray-600">
                {procedure.estimated_duration
                    ? `${procedure.estimated_duration} minutos`
                    : "Duración a consultar"}
                </p>
            </div>

            {/* Botón contacto */}
            <div className="mt-12 text-center">
                <a
                href="https://wa.me/5493425454106"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    inline-flex
                    items-center
                    gap-2
                    bg-primary
                    text-white
                    px-10
                    py-4
                    rounded-2xl
                    font-semibold
                    shadow-lg
                    hover:scale-105
                    transition
                "
                >
                Solicitar consulta
                </a>
            </div>

            </div>
        </main>

        <Footer
            onOpenContact={() => setOpenContact(true)}
        />

        {openContact && (
            <Modal
            onClose={() => setOpenContact(false)}
            >
            <div className="text-center">

                <h2 className="text-4xl font-bold mb-3">
                Solicitar Consulta
                </h2>

                <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />

                <p className="text-gray-600 mb-8">
                Completá el formulario y nos pondremos en contacto con vos a la brevedad.
                </p>

                <ContactSection />

            </div>
            </Modal>
        )}
        </>
    );
};

export default ProcedureDetail;
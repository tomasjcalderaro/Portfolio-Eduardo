import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Modal from "../components/ui/Modal";
import ContactSection from "../components/forms/ContactSection";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { producers } from "../data/producers";

const ProcedureDetail = () => {
    const [openContact, setOpenContact] = useState(false);
    const { slug } = useParams();

    const procedure = producers.find(
        (p) => p.slug === slug
    );

    if (!procedure) {
        return (
        <h1 className="text-center mt-20 text-3xl">
            Procedimiento no encontrado
        </h1>
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
                        src={procedure.detailImage}
                        alt={procedure.title}
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
                {procedure.title}
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
                {procedure.fullDescription}
            </p>

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
                {procedure.benefits.map((benefit) => (
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
                    p-8
                    text-center
                "
            >
                <h2 className="text-2xl font-semibold mb-2">
                Duración del tratamiento
                </h2>

                <p className="text-gray-600">
                {procedure.duration}
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

import { Link } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Modal from "../components/ui/Modal";

import { producers } from "../data/producers";

import ContactSection from "../components/forms/ContactSection";

const Procedures = () => {
    const [openContact, setOpenContact] = useState(false);

    return (
    <>
        <Navbar
            onOpenContact={() => setOpenContact(true)}
        />

        <main className="min-h-screen bg-gradient-to-b from-white via-soft to-white pt-32 pb-20 px-4">
            <section className="text-center mb-16">
            <span className="text-primary font-medium tracking-widest uppercase">
                Medicina Estética
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-4">
                Nuestros Procedimientos
            </h1>

            <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg">
                Tratamientos personalizados orientados a mejorar la calidad de la
                piel, armonizar rasgos y potenciar la belleza natural.
            </p>

            <div className="flex justify-center gap-10 mt-12 flex-wrap">
                <div>
                <h3 className="text-4xl font-bold text-primary">+500</h3>
                <p className="text-gray-600">Pacientes</p>
                </div>

                <div>
                <h3 className="text-4xl font-bold text-primary">+10</h3>
                <p className="text-gray-600">Tratamientos</p>
                </div>

                <div>
                <h3 className="text-4xl font-bold text-primary">100%</h3>
                <p className="text-gray-600">Personalizado</p>
                </div>
            </div>
            </section>

            <section className="max-w-7xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {   producers.map((proc) => (
                <Link
                    key={proc.id}
                    to={`/procedimientos/${proc.slug}`}
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
                        src={proc.image}
                        alt={proc.title}
                        className="
                        w-full
                        h-64
                        md:h-72
                        object-cover
                        bg-soft
                        "
                    />

                    <div className="p-6 flex flex-col flex-1">
                        <span className="text-xs font-semibold tracking-widest uppercase text-primary/70">
                        Tratamiento estético
                        </span>

                        <h2 className="text-2xl font-bold mt-3 mb-3 text-dark">
                        {proc.title}
                        </h2>

                        <p className="text-gray-600 leading-relaxed flex-1">
                        {proc.description}
                        </p>

                        <span
                        className="
                            mt-6
                            w-full
                            py-3
                            rounded-xl
                            bg-primary
                            text-white
                            font-medium
                            text-center
                            group-hover:bg-[#062F2C]
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
            </section>
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

export default Procedures;

import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
//ui
import Modal from "../components/ui/Modal";
import WhatsappButton from "../components/ui/WhatsappButton";
import InstagramButton from "../components/ui/InstagramButton";
import FadeInSection from "../components/ui/FadeInSection";

import ContactSection from "../components/forms/ContactSection";
//sections 
import Hero from "../sections/Hero";
import About from "../sections/About";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import WhyChooseMe from "../sections/WhyChooseMe";
import Producers from "../sections/Producers";



const Home = () => {
    const [openContact, setOpenContact] = useState(false);

    return (
        <>
        <div className="bg-white text-dark overflow-x-hidden">

            <Navbar
            onOpenContact={() => setOpenContact(true)}
            />
            
            <Hero
            onOpenContact={() => setOpenContact(true)}
            />
            
            <FadeInSection>
            <About />
            </FadeInSection>

            <FadeInSection>
            <Education />
            </FadeInSection>

            <FadeInSection>
            <Experience />
            </FadeInSection>

            <FadeInSection>
            <WhyChooseMe />
            </FadeInSection>

            <FadeInSection>
            <Producers />
            </FadeInSection>

            <Footer
                onOpenContact={() => setOpenContact(true)}
            />

            <InstagramButton />
            <WhatsappButton />

        </div>

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

                <div className="mt-8 flex justify-center gap-4">

                <a
                    href="https://wa.me/5493425454106"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    bg-green-500
                    text-white
                    px-5
                    py-3
                    rounded-xl
                    font-medium
                    hover:scale-105
                    transition
                    "
                >
                    Enviar WhatsApp
                </a>

                <a
                    href="https://www.instagram.com/eduardoarguello.dr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    border
                    border-primary
                    text-primary
                    px-5
                    py-3
                    rounded-xl
                    font-medium
                    hover:bg-primary
                    hover:text-white
                    transition
                    "
                >
                    Ver Instagram
                </a>

                </div>

            </div>
            </Modal>
        )}
        </>
    );
    };

    export default Home;
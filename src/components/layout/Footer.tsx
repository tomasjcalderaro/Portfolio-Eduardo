import {
    FaInstagram,
    FaWhatsapp,
    FaEnvelope,
    } from "react-icons/fa";

    type Props = {
    onOpenContact?: () => void;
    };

    const Footer = ({ onOpenContact }: Props) => {
    return (
        <footer
        className="
            mt-24
            bg-white/70
            backdrop-blur-md
            border-t
            border-primary/20
        "
        >
        <div
            className="
            max-w-7xl
            mx-auto
            px-6
            py-20
            "
        >
            {/* Logo y descripción */}
            <div className="mb-12">
            <h3 className="text-3xl font-bold text-primary">
                Dr. Eduardo Argüello
            </h3>

            <p className="text-gray-600 mt-4 max-w-xl leading-relaxed">
                Medicina estética avanzada, tratamientos
                personalizados y atención profesional
                orientada a resultados naturales y armónicos.
            </p>
            </div>

            {/* Redes */}
            <div className="flex flex-wrap gap-6 mb-12">

            <a
                href="https://www.instagram.com/eduardoarguello.dr/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center gap-3
                px-5 py-3
                bg-white
                rounded-xl
                shadow-md
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                "
            >
                <FaInstagram
                size={20}
                className="text-primary"
                />

                <span>Instagram</span>
            </a>

            <a
                href="https://wa.me/5493425454106"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center gap-3
                px-5 py-3
                bg-white
                rounded-xl
                shadow-md
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                "
            >
                <FaWhatsapp
                size={20}
                className="text-primary"
                />

                <span>WhatsApp</span>
            </a>

            <button
                onClick={() => onOpenContact?.()}
                className="
                flex items-center gap-3
                px-5 py-3
                bg-white
                rounded-xl
                shadow-md
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                "
            >
                <FaEnvelope
                size={20}
                className="text-primary"
                />

                <span>Contacto</span>
            </button>

            </div>

            {/* Línea divisoria */}
            <div className="border-t border-primary/10 pt-8">

            <p className="text-sm text-gray-500">
                © 2026 Dr. Eduardo Argüello · Todos los derechos reservados
            </p>

            </div>
        </div>
        </footer>
    );
};

export default Footer;
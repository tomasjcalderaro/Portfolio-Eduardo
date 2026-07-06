import {
    FaInstagram,
    FaWhatsapp,
    FaEnvelope,
    } from "react-icons/fa";

    type Props = {
    onOpenContact?: () => void;
    };

    const address = "Chacabuco 1289, Santa Fe, Santa Fe";
    const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

    const Footer = ({ onOpenContact }: Props) => {
    return (
        <footer
        className="
            mt-24
            bg-[#062F2C]
            backdrop-blur-md
            border-t
            border-white/10
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
            {/* Presentación y mapa */}
            <div
            className="
                grid
                gap-6
                lg:grid-cols-[1fr_0.85fr]
                items-stretch
                mb-12
            "
            >
            <div
                className="
                flex
                flex-col
                justify-center
                "
            >
                <h3 className="text-3xl font-bold text-white">
                    Dr. Eduardo Argüello
                </h3>

                <p className="text-white/70 mt-4 max-w-xl leading-relaxed">
                    Medicina estética avanzada, tratamientos
                    personalizados y atención profesional
                    orientada a resultados naturales y armónicos.
                </p>
            </div>

            <div
                className="
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/10
                min-h-[220px]
                sm:min-h-[260px]
                "
            >
                <iframe
                title="Mapa de ubicación - Dr. Eduardo Argüello"
                src={mapsEmbedUrl}
                className="w-full h-full min-h-[220px] sm:min-h-[260px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
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
                hover:bg-white/90
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
                hover:bg-white/90
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
                hover:bg-white/90
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
            <div className="border-t border-white/10 pt-8">

            <p className="text-sm text-white/60">
                © 2026 Dr. Eduardo Argüello · Todos los derechos reservados
            </p>

            </div>
        </div>
        </footer>
    );
};

export default Footer;

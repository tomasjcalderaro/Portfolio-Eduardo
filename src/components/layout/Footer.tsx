import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

import {
    ADDRESS,
    INSTAGRAM_URL,
    mapsEmbedUrl,
    mapsLinkUrl,
    whatsappUrl,
    } from "../../lib/contact";

    type Props = {
    onOpenContact?: () => void;
    };

    const navLinks = [
    { label: "Inicio", to: "/#home" },
    { label: "Sobre mí", to: "/#about" },
    { label: "Trayectoria", to: "/#trajectory" },
    { label: "Procedimientos", to: "/procedimientos" },
    ];

    const headingClass =
    "text-sm uppercase tracking-widest text-accent font-medium mb-5";

    const socialClass = `
    flex
    items-center
    justify-center
    w-11
    h-11
    rounded-full
    border
    border-white/20
    text-white
    hover:bg-accent
    hover:text-secondary
    hover:border-accent
    transition
    `;

    const Footer = ({ onOpenContact }: Props) => {
    return (
        <footer className="bg-secondary">
        <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid gap-12 lg:grid-cols-3">
            {/* Marca */}
            <div>
                <h3 className="text-2xl font-bold text-white">
                Dr. Eduardo Argüello
                </h3>

                <p className="text-white/70 mt-4 leading-relaxed max-w-sm">
                Medicina estética avanzada, tratamientos personalizados y
                atención profesional orientada a resultados naturales y
                armónicos.
                </p>

                <div className="flex gap-3 mt-8">
                <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram del Dr. Argüello"
                    className={socialClass}
                >
                    <FaInstagram size={20} />
                </a>

                <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp del Dr. Argüello"
                    className={socialClass}
                >
                    <FaWhatsapp size={20} />
                </a>
                </div>
            </div>

            {/* Navegación */}
            <div>
                <h4 className={headingClass}>Navegación</h4>

                <ul className="space-y-3">
                {navLinks.map((link) => (
                    <li key={link.label}>
                    <Link
                        to={link.to}
                        className="text-white/70 hover:text-white transition"
                    >
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>

                <button
                onClick={() => onOpenContact?.()}
                className="
                    mt-8
                    bg-accent
                    text-secondary
                    font-semibold
                    px-6
                    py-3
                    rounded-full
                    hover:brightness-110
                    transition
                "
                >
                Solicitar consulta
                </button>
            </div>

            {/* Ubicación */}
            <div>
                <h4 className={headingClass}>Ubicación</h4>

                <a
                href={mapsLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    flex
                    items-start
                    gap-3
                    text-white/70
                    hover:text-white
                    transition
                "
                >
                <FaMapMarkerAlt className="mt-1 shrink-0 text-accent" />
                <span>{ADDRESS}</span>
                </a>

                <div
                className="
                    mt-5
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/10
                    h-48
                "
                >
                <iframe
                    title="Mapa de ubicación - Dr. Eduardo Argüello"
                    src={mapsEmbedUrl}
                    className="w-full h-full grayscale hover:grayscale-0 transition duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                </div>
            </div>
            </div>

            {/* Línea inferior */}
            <div className="border-t border-white/10 mt-14 pt-8">
            <p className="text-sm text-white/60">
                © {new Date().getFullYear()} Dr. Eduardo Argüello · Todos los
                derechos reservados
            </p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
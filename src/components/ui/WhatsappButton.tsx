import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "../../lib/contact";

const WhatsappButton = () => {
    return (
        <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="
            fixed
            bottom-6
            right-6
            z-40
            bg-[#25D366]
            text-white
            p-4
            rounded-full
            shadow-lg
            hover:scale-110
            transition
        "
        >
        <FaWhatsapp size={28} />
        </a>
    );
};

export default WhatsappButton;
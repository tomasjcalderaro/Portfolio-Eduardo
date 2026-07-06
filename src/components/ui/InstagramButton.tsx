import { FaInstagram } from "react-icons/fa";

const InstagramButton = () => {
    return (
        <a
        href="https://www.instagram.com/eduardoarguello.dr/"
        target="_blank"
        rel="noopener noreferrer"
        className="
            fixed
            bottom-24
            right-6
            z-50
            bg-pink-500
            text-white
            p-4
            rounded-full
            shadow-lg
            hover:scale-110
            transition
        "
        >
        <FaInstagram size={28} />
        </a>
    );
    };

    export default InstagramButton;
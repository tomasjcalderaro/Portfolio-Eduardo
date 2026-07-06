import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactSection = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
        .sendForm(
            "TU_SERVICE_ID",
            "TU_TEMPLATE_ID",
            form.current,
            "TU_PUBLIC_KEY"
        )
        .then(() => {
            alert("Consulta enviada correctamente");
            form.current?.reset();
        })
        .catch(() => {
            alert("Error al enviar la consulta");
        });
    };

    return (
        <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-5"
        >
        <input
            type="text"
            name="user_name"
            placeholder="Nombre completo"
            className="
            w-full
            border
            border-gray-200
            rounded-2xl
            px-4
            py-3
            outline-none
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20
            transition
            "
            required
        />

        <input
            type="email"
            name="user_email"
            placeholder="Correo electrónico"
            className="
            w-full
            border
            border-gray-200
            rounded-2xl
            px-4
            py-3
            outline-none
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20
            transition
            "
            required
        />

        <input
            type="tel"
            name="user_phone"
            placeholder="Teléfono"
            className="
            w-full
            border
            border-gray-200
            rounded-2xl
            px-4
            py-3
            outline-none
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20
            transition
            "
        />

        <textarea
            rows={5}
            name="message"
            placeholder="Contanos qué tratamiento te interesa..."
            className="
            w-full
            border
            border-gray-200
            rounded-2xl
            px-4
            py-3
            resize-none
            outline-none
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20
            transition
            "
            required
        />

        <button
            type="submit"
            className="
            mt-2
            bg-primary
            text-white
            py-4
            rounded-2xl
            font-semibold
            shadow-lg
            hover:scale-[1.02]
            transition
            "
        >
            Solicitar Consulta
        </button>
        </form>
    );
};

export default ContactSection;
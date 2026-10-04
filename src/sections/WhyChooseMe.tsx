import type { ReactNode } from "react";
import { FaShieldAlt, FaUserMd, FaFlask, FaSmile } from "react-icons/fa";

type Benefit = {
    icon: ReactNode;
    title: string;
    description: string;
    };

    const benefits: Benefit[] = [
    {
        icon: <FaSmile />,
        title: "Resultados naturales",
        description:
        "Tratamientos enfocados en resaltar tu belleza sin alterar tu identidad.",
    },
    {
        icon: <FaShieldAlt />,
        title: "Seguridad",
        description:
        "Protocolos respaldados por evidencia científica y productos aprobados.",
    },
    {
        icon: <FaUserMd />,
        title: "Atención personalizada",
        description:
        "Cada paciente recibe un diagnóstico y un plan adaptado a sus necesidades.",
    },
    {
        icon: <FaFlask />,
        title: "Formación continua",
        description:
        "Capacitación constante en medicina estética, regenerativa y funcional.",
    },
    ];

    const WhyChooseMe = () => {
    return (
        <section id="why" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
                Diferenciales
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
                ¿Por qué elegirme?
            </h2>
            </div>

            <div
            className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-6
            "
            >
            {benefits.map((item) => (
                <div
                key={item.title}
                className="
                    bg-soft
                    rounded-2xl
                    p-8
                    text-center
                    transition
                    duration-300
                    hover:-translate-y-1
                "
                >
                <div
                    aria-hidden="true"
                    className="
                    mx-auto
                    mb-6
                    flex
                    items-center
                    justify-center
                    w-14
                    h-14
                    rounded-full
                    bg-primary/10
                    text-primary
                    text-2xl
                    "
                >
                    {item.icon}
                </div>

                <h3 className="text-lg font-bold mb-3">{item.title}</h3>

                <p className="text-gray-600 leading-relaxed">
                    {item.description}
                </p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default WhyChooseMe;
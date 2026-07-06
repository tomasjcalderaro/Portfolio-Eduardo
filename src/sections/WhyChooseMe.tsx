import {
    FaShieldAlt,
    FaUserMd,
    FaFlask,
    FaSmile,
    } from "react-icons/fa";

    const WhyChooseMe = () => {
    const benefits = [
        {
        icon: <FaSmile />,
        title: "Resultados Naturales",
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
        title: "Atención Personalizada",
        description:
            "Cada paciente recibe un diagnóstico y plan adaptado a sus necesidades.",
        },
        {
        icon: <FaFlask />,
        title: "Formación Continua",
        description:
            "Capacitación constante en medicina estética, regenerativa y funcional.",
        },
    ];

    return (
        <section
        id="why"
        className="py-24 bg-soft"
        >
        <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

            <span className="text-primary uppercase tracking-widest font-medium">
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
                gap-8
            "
            >

            {benefits.map((item, index) => (
                <div
                key={index}
                className="
                    bg-white
                    rounded-3xl
                    p-8
                    shadow-lg
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    text-center
                "
                >
                <div
                    className="
                    text-primary
                    text-5xl
                    mb-6
                    flex
                    justify-center
                    "
                >
                    {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-4">
                    {item.title}
                </h3>

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
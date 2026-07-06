import {
    FaGraduationCap,
    FaUniversity,
    FaAward,
    } from "react-icons/fa";

    const Education = () => {
    return (
        <section
        id="education"
        className="py-24 bg-soft"
        >
        <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

            <span className="text-primary uppercase tracking-widest font-medium">
                Formación Académica
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Formación Profesional
            </h2>

            </div>

            <div
            className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-8
            "
            >

            <div
                className="
                bg-white
                p-8
                rounded-3xl
                shadow-lg
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300
                "
            >
                <FaUniversity
                className="text-primary text-4xl mb-4"
                />

                <h3 className="font-bold text-xl mb-3">
                Médico
                </h3>

                <p className="text-gray-600">
                Universidad Nacional del Litoral
                </p>

                <span className="text-sm text-gray-400">
                2013 - 2021
                </span>
            </div>

            <div
                className="
                bg-white
                p-8
                rounded-3xl
                shadow-lg
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300
                "
            >
                <FaGraduationCap
                className="text-primary text-4xl mb-4"
                />

                <h3 className="font-bold text-xl mb-3">
                Magíster en Medicina Estética
                </h3>

                <p className="text-gray-600">
                SAENI - ISAM
                </p>
            </div>

            <div
                className="
                bg-white
                p-8
                rounded-3xl
                shadow-lg
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300
                "
            >
                <FaAward
                className="text-primary text-4xl mb-4"
                />

                <h3 className="font-bold text-xl mb-3">
                Diplomatura de Posgrado
                </h3>

                <p className="text-gray-600">
                SAEME - UBA
                </p>
            </div>

            </div>

        </div>
        </section>
    );
};

export default Education;
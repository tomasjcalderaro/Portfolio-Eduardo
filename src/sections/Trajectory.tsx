import type { ReactNode } from "react";
import { FaUniversity, FaGraduationCap, FaAward } from "react-icons/fa";

type EducationItem = {
    icon: ReactNode;
    title: string;
    institution: string;
    period?: string;
    };

    type ExperienceItem = {
    period: string;
    place: string;
    description: string;
    };

    const education: EducationItem[] = [
    {
        icon: <FaUniversity />,
        title: "Médico",
        institution: "Universidad Nacional del Litoral",
        period: "2013 - 2021",
    },
    {
        icon: <FaGraduationCap />,
        title: "Magíster en Medicina Estética",
        institution: "SAENI - ISAM",
    },
    {
        icon: <FaAward />,
        title: "Diplomatura de Posgrado",
        institution: "SAEME - UBA",
    },
    ];

    const experience: ExperienceItem[] = [
    {
        period: "2022 - Actualidad",
        place: "Club Atlético Unión",
        description:
        "Médico de deportología y clínica médica, participando en el seguimiento integral de deportistas profesionales.",
    },
    {
        period: "2023 - 2025",
        place: "MedSpa",
        description:
        "Atención en medicina estética, tratamientos faciales y procedimientos mínimamente invasivos.",
    },
    {
        period: "2025 - Actualidad",
        place: "Vita Consultorio",
        description:
        "Desarrollo de tratamientos personalizados en medicina estética, regenerativa y funcional, con enfoque integral del paciente.",
    },
    ];

    const Trajectory = () => {
    return (
        <section id="trajectory" className="py-24 bg-soft">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
                Trayectoria profesional
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Formación y experiencia
            </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
            {/* Formación */}
            <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 font-medium mb-6">
                Formación
                </h3>

                <div className="space-y-4">
                {education.map((item) => (
                    <div
                    key={item.title}
                    className="
                        flex
                        items-center
                        gap-5
                        bg-white
                        rounded-2xl
                        p-5
                        border
                        border-primary/10
                        shadow-sm
                    "
                    >
                    <div
                        aria-hidden="true"
                        className="
                        shrink-0
                        flex
                        items-center
                        justify-center
                        w-12
                        h-12
                        rounded-full
                        bg-primary/10
                        text-primary
                        text-xl
                        "
                    >
                        {item.icon}
                    </div>

                    <div>
                        <h4 className="font-bold text-lg leading-snug">
                        {item.title}
                        </h4>

                        <p className="text-gray-600">{item.institution}</p>

                        {item.period && (
                        <span className="text-sm text-gray-400">
                            {item.period}
                        </span>
                        )}
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Experiencia */}
            <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 font-medium mb-6">
                Experiencia
                </h3>

                <ol className="relative border-l-2 border-primary/20 ml-2 space-y-10">
                {experience.map((item) => (
                    <li key={item.place} className="relative pl-8">
                    <span
                        aria-hidden="true"
                        className="
                        absolute
                        -left-[9px]
                        top-1.5
                        w-4
                        h-4
                        rounded-full
                        bg-primary
                        border-4
                        border-soft
                        "
                    />

                    <span className="text-primary font-semibold text-sm">
                        {item.period}
                    </span>

                    <h4 className="text-xl font-bold mt-1">{item.place}</h4>

                    <p className="text-gray-600 mt-2 leading-relaxed">
                        {item.description}
                    </p>
                    </li>
                ))}
                </ol>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Trajectory;
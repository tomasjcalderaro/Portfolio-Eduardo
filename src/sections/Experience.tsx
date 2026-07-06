const Experience = () => {
    return (
        <section
        id="experience"
        className="py-24 bg-[#F8FAF9]"
        >
        <div className="max-w-5xl mx-auto px-6">

            <div className="text-center mb-20">

            <span className="text-primary uppercase tracking-widest font-medium">
                Trayectoria Profesional
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Experiencia
            </h2>

            </div>

            <div
            className="
                relative
                border-l-4
                border-primary
                pl-10
                md:pl-12
                space-y-20
            "
            >

            {/* Unión */}
            <div className="relative">

                <div
                className="
                    absolute
                    -left-[14px]
                    top-1
                    w-6
                    h-6
                    rounded-full
                    bg-primary
                    border-4
                    border-white
                    shadow-md
                "
                />

                <span className="text-primary font-semibold block mb-2">
                2022 - Actualidad
                </span>

                <h3 className="text-xl md:text-2xl font-bold">
                Club Atlético Unión
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                Médico de deportología y clínica médica,
                participando en el seguimiento integral
                de deportistas profesionales.
                </p>

            </div>

            {/* MedSpa */}
            <div className="relative">

                <div
                className="
                    absolute
                    -left-[14px]
                    top-1
                    w-6
                    h-6
                    rounded-full
                    bg-primary
                    border-4
                    border-white
                    shadow-md
                "
                />

                <span className="text-primary font-semibold block mb-2">
                2023 - 2025
                </span>

                <h3 className="text-xl md:text-2xl font-bold">
                MedSpa
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                Atención en medicina estética,
                tratamientos faciales y procedimientos
                mínimamente invasivos.
                </p>

            </div>

            {/* Vita */}
            <div className="relative">

                <div
                className="
                    absolute
                    -left-[14px]
                    top-1
                    w-6
                    h-6
                    rounded-full
                    bg-primary
                    border-4
                    border-white
                    shadow-md
                "
                />

                <span className="text-primary font-semibold block mb-2">
                2025 - Actualidad
                </span>

                <h3 className="text-xl md:text-2xl font-bold">
                Vita Consultorio
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                Desarrollo de tratamientos personalizados
                en medicina estética, regenerativa y funcional,
                con enfoque integral del paciente.
                </p>

            </div>

            </div>

        </div>
        </section>
    );
};

export default Experience;
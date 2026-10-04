import heroDoctor from "../assets/images/hero-doctor.webp";

const About = () => {
    return (
        <section
        id="about"
        className="py-24 bg-soft"
        >
        <div className="max-w-7xl mx-auto px-6">

            <div
            className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-10
                md:gap-16
                items-center
            "
            >

            <div className="flex justify-center">
                <img
                src={heroDoctor}
                alt="Dr. Eduardo Argüello"
                className="
                    w-full
                    max-w-[380px]
                    md:max-w-[420px]
                    mx-auto
                    rounded-3xl
                    shadow-xl
                    object-cover
                "
                />
            </div>

            <div>

                <span className="text-primary uppercase tracking-widest font-medium">
                Sobre mí
                </span>

                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Dr. Eduardo Nicolás Argüello
                </h2>

                <p className="text-gray-600 leading-relaxed max-w-xl">
                Médico especializado en medicina estética,
                regenerativa y funcional.
                Mi objetivo es acompañar a cada paciente
                en un proceso de bienestar integral,
                logrando resultados naturales que respeten
                su identidad y armonía facial.
                </p>

                {/* Estadísticas */}
                <div className="mt-10">

                <div className="flex justify-center gap-12 mb-8">

                    <div className="text-center">
                    <h3 className="text-4xl font-bold text-primary">
                        +500
                    </h3>

                    <p className="text-gray-600">
                        Pacientes
                    </p>
                    </div>

                    <div className="text-center">
                    <h3 className="text-4xl font-bold text-primary">
                        +100
                    </h3>

                    <p className="text-gray-600">
                        Tratamientos
                    </p>
                    </div>

                </div>

                <div className="flex justify-center">

                    <div className="text-center">
                    <h3 className="text-4xl font-bold text-primary">
                        +4
                    </h3>

                    <p className="text-gray-600">
                        Años de experiencia
                    </p>
                    </div>

                </div>

                </div>

            </div>

            </div>

        </div>
        </section>
    );
};

export default About;
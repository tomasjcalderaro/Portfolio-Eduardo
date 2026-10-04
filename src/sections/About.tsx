import heroDoctor from "../assets/images/hero-doctor.webp";

const stats = [
    { value: "+500", label: "Pacientes" },
    { value: "+100", label: "Tratamientos" },
    { value: "+4", label: "Años de experiencia" },
    ];
    const About = () => {
    return (
        <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div
            className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-10
                md:gap-16
                lg:gap-24
                items-center
            "
            >
            {/* Foto */}
            <div className="flex justify-center md:justify-start">
                <img
                src={heroDoctor}
                alt="Dr. Eduardo Argüello atendiendo a un paciente"
                width={800}
                height={1000}
                loading="lazy"
                className="
                    w-full
                    max-w-[380px]
                    md:max-w-[440px]
                    aspect-[4/5]
                    object-cover
                    object-top
                    rounded-3xl
                    shadow-xl
                "
                />
            </div>

            {/* Texto */}
            <div className="text-center md:text-left">
                <span className="text-primary uppercase tracking-widest text-sm font-medium">
                Sobre mí
                </span>

                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Dr. Eduardo Nicolás Argüello
                </h2>

                <p className="text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                Médico especializado en medicina estética, regenerativa y
                funcional. Mi objetivo es acompañar a cada paciente en un proceso
                de bienestar integral, logrando resultados naturales que respeten
                su identidad y armonía facial.
                </p>

                {/* Estadísticas */}
                <div
                className="
                    mt-10
                    pt-8
                    border-t
                    border-gray-200
                    grid
                    grid-cols-3
                    gap-4
                    max-w-xl
                    mx-auto
                    md:mx-0
                "
                >
                {stats.map((stat) => (
                    <div key={stat.label}>
                    <p className="text-3xl md:text-4xl font-bold text-primary">
                        {stat.value}
                    </p>

                    <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default About;
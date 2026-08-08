import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

const AdminPanel = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAdminUser = async () => {
        const {
            data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
            navigate("/admin");
            return;
        }

        setEmail(user.email ?? "");
        setLoading(false);
        };

        getAdminUser();
    }, [navigate]);

    const handleLogout = async () => {
        await supabase.auth.signOut();

        navigate("/admin");
    };

    if (loading) {
        return (
        <main className="min-h-screen flex items-center justify-center bg-soft px-4">
            <p className="text-center text-gray-600">
            Cargando panel...
            </p>
        </main>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-soft to-white">

        {/* Encabezado */}
        <header className="bg-white border-b border-primary/10 shadow-sm">
            <div
            className="
                max-w-7xl
                mx-auto
                px-4
                sm:px-6
                lg:px-8
                py-5
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
                sm:justify-between
            "
            >
            {/* Título */}
            <div className="text-center sm:text-left">
                <p className="text-primary text-xs sm:text-sm font-medium tracking-widest uppercase">
                Administración
                </p>

                <h1 className="text-2xl sm:text-3xl font-bold text-dark mt-1">
                Panel administrativo
                </h1>
            </div>

            {/* Acciones */}
            <div className="flex flex-col sm:flex-row gap-3">

                {/* Ver sitio */}
                <Link
                to="/"
                className="
                    w-full
                    sm:w-auto
                    text-center
                    border
                    border-primary
                    text-primary
                    px-5
                    py-3
                    rounded-xl
                    font-medium
                    transition
                    hover:bg-primary
                    hover:text-white
                "
                >
                Ver sitio
                </Link>

                {/* Cerrar sesión */}
                <button
                onClick={handleLogout}
                className="
                    w-full
                    sm:w-auto
                    border
                    border-primary
                    text-primary
                    px-5
                    py-3
                    rounded-xl
                    font-medium
                    transition
                    hover:bg-primary
                    hover:text-white
                "
                >
                Cerrar sesión
                </button>

            </div>
            </div>
        </header>

        {/* Contenido */}
        <section
            className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            py-8
            sm:py-10
            "
        >

            {/* Información del administrador */}
            <div
            className="
                bg-white
                rounded-2xl
                sm:rounded-3xl
                shadow-md
                border
                border-primary/10
                p-5
                sm:p-8
            "
            >
            <h2 className="text-xl sm:text-2xl font-bold text-dark">
                Bienvenido al panel
            </h2>

            <p className="text-gray-600 mt-3">
                Sesión iniciada como:
            </p>

            <p className="text-primary font-semibold mt-1 break-all">
                {email}
            </p>
            </div>

            {/* Módulos administrativos */}
            <div
            className="
                grid
                grid-cols-1
                gap-5
                mt-8
                sm:grid-cols-2
                xl:grid-cols-4
            "
            >

            {/* Turnos */}
            <article
                className="
                bg-white
                rounded-2xl
                sm:rounded-3xl
                shadow-md
                border
                border-primary/10
                p-6
                "
            >
                <p className="text-sm text-gray-500">
                Turnos
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-dark mt-2">
                Próximamente
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                Consultá y administrá los turnos del consultorio.
                </p>
            </article>

            {/* Pacientes */}
            <article
                className="
                bg-white
                rounded-2xl
                sm:rounded-3xl
                shadow-md
                border
                border-primary/10
                p-6
                "
            >
                <p className="text-sm text-gray-500">
                Pacientes
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-dark mt-2">
                Próximamente
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                Consultá los datos y el historial de pacientes.
                </p>
            </article>

            {/* Procedimientos */}
            <Link
                to="/admin/procedimientos"
                className="
                group
                bg-white
                rounded-2xl
                sm:rounded-3xl
                shadow-md
                border
                border-primary/10
                p-6
                transition
                hover:-translate-y-1
                hover:shadow-xl
                "
            >
                <p className="text-sm text-gray-500">
                Procedimientos
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-dark mt-2">
                Administrar
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                Creá y editá tratamientos, imágenes y videos.
                </p>

                <span
                className="
                    inline-block
                    mt-5
                    text-primary
                    font-semibold
                    group-hover:translate-x-1
                    transition
                "
                >
                Ir a procedimientos →
                </span>
            </Link>

            {/* Horarios */}
            <article
                className="
                bg-white
                rounded-2xl
                sm:rounded-3xl
                shadow-md
                border
                border-primary/10
                p-6
                "
            >
                <p className="text-sm text-gray-500">
                Horarios
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-dark mt-2">
                Próximamente
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                Configurá días, horarios y excepciones.
                </p>
            </article>

            </div>
        </section>
        </main>
    );
};

export default AdminPanel;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

interface Procedure {
    id: number;
    name: string;
    description: string | null;
    image_url: string | null;
    is_active: boolean;
    }

    const AdminProcedures = () => {
    const [procedures, setProcedures] = useState<Procedure[]>([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const getProcedures = async () => {
        const { data, error } = await supabase
            .from("procedures")
            .select(`
            id,
            name,
            description,
            image_url,
            is_active
            `)
            .order("id");

        if (error) {
            console.error(
            "Error al obtener procedimientos:",
            error
            );

            setErrorMessage(
            "No se pudieron cargar los procedimientos."
            );
        } else {
            setProcedures(data ?? []);
        }

        setLoading(false);
        };

        getProcedures();
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-soft to-white">
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
            <div className="text-center sm:text-left">
                <p className="text-primary text-xs sm:text-sm font-medium tracking-widest uppercase">
                Administración
                </p>

                <h1 className="text-2xl sm:text-3xl font-bold text-dark mt-1">
                Administrar procedimientos
                </h1>

                <p className="text-gray-600 mt-2">
                Consultá y gestioná los tratamientos disponibles.
                </p>
            </div>

            <Link
                to="/admin/panel"
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
                Volver al panel
            </Link>
            </div>
        </header>

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
            <div
            className="
                flex
                flex-col
                gap-4
                mb-8
                sm:flex-row
                sm:items-center
                sm:justify-between
            "
            >
            <div>
                <h2 className="text-2xl font-bold text-dark">
                Procedimientos registrados
                </h2>

                <p className="text-gray-600 mt-2">
                Estos datos se obtienen directamente desde Supabase.
                </p>
            </div>

            <Link
                to="/admin/procedimientos/nuevo"
                className="
                    w-full
                    sm:w-auto
                    text-center
                    bg-primary
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    transition
                    hover:scale-[1.02]
                    hover:bg-[#062F2C]
                "
                >
                + Nuevo procedimiento
                </Link>
            </div>

            {loading && (
            <div className="bg-white rounded-3xl shadow-md border border-primary/10 p-10 text-center">
                <p className="text-gray-600">
                Cargando procedimientos...
                </p>
            </div>
            )}

            {!loading && errorMessage && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                <p className="text-red-600">
                {errorMessage}
                </p>
            </div>
            )}

            {!loading &&
            !errorMessage &&
            procedures.length === 0 && (
                <div className="bg-white rounded-3xl shadow-md border border-primary/10 p-10 text-center">
                <h3 className="text-xl font-bold text-dark">
                    No hay procedimientos registrados
                </h3>

                <p className="text-gray-600 mt-3">
                    Todavía no se cargaron procedimientos en la base de datos.
                </p>
                </div>
            )}

            {!loading &&
            !errorMessage &&
            procedures.length > 0 && (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {procedures.map((procedure) => (
                    <article
                    key={procedure.id}
                    className="
                        overflow-hidden
                        bg-white
                        rounded-3xl
                        shadow-md
                        border
                        border-primary/10
                        flex
                        flex-col
                    "
                    >
                    <div className="w-full h-56 bg-soft">
                        {procedure.image_url ? (
                        <img
                            src={procedure.image_url}
                            alt={procedure.name}
                            className="
                            w-full
                            h-full
                            object-cover
                            "
                        />
                        ) : (
                        <div className="w-full h-full flex items-center justify-center px-6">
                            <p className="text-center text-gray-500">
                            Sin imagen principal
                            </p>
                        </div>
                        )}
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl font-bold text-dark">
                            {procedure.name}
                        </h3>

                        <span
                            className={`
                            shrink-0
                            rounded-full
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            ${
                                procedure.is_active
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-600"
                            }
                            `}
                        >
                            {procedure.is_active
                            ? "Activo"
                            : "Inactivo"}
                        </span>
                        </div>

                        <p className="text-gray-600 mt-4 leading-relaxed flex-1">
                        {procedure.description ||
                            "Este procedimiento todavía no tiene una descripción."}
                        </p>

                        <div className="mt-6 pt-5 border-t border-gray-100">
                        <Link
                            to={`/admin/procedimientos/${procedure.id}/editar`}
                            className="
                            block
                            w-full
                            rounded-xl
                            border
                            border-primary
                            text-primary
                            py-3
                            font-medium
                            text-center
                            transition
                            hover:bg-primary
                            hover:text-white
                            "
                        >
                            Editar procedimiento
                        </Link>
                        </div>
                    </div>
                    </article>
                ))}
                </div>
            )}
        </section>
        </main>
    );
};

export default AdminProcedures;
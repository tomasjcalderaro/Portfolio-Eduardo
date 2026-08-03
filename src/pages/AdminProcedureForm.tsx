import { useEffect, useState, type FormEvent,} from "react";

import { Link, useNavigate, useParams,} from "react-router-dom";

import { supabase } from "../lib/supabase";

const AdminProcedureForm = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    // Si existe un id en la URL, estamos editando.
    // Si no existe, estamos creando un procedimiento nuevo.
    const isEditing = Boolean(id);

    // Estados del formulario
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [fullDescription, setFullDescription] =
        useState("");

    const [estimatedDuration, setEstimatedDuration] =
        useState("");

    const [price, setPrice] = useState("");

    const [imageUrl, setImageUrl] = useState("");
    const [videoUrl, setVideoUrl] = useState("");

    const [benefitsText, setBenefitsText] =
        useState("");

    const [isActive, setIsActive] = useState(true);

    // Estados generales
    const [loading, setLoading] = useState(false);

    const [loadingProcedure, setLoadingProcedure] =
        useState(false);

    const [procedureNotFound, setProcedureNotFound] =
        useState(false);

    const [errorMessage, setErrorMessage] =
        useState("");

    // Genera automáticamente el slug.
    const createSlug = (value: string) => {
        return value
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
    };

    // Cuando cambia el nombre, también se actualiza el slug.
    const handleNameChange = (value: string) => {
        setName(value);
        setSlug(createSlug(value));
    };

    // Si estamos editando, buscamos el procedimiento
    // correspondiente al id de la URL.
    useEffect(() => {
        const getProcedure = async () => {
        // Si no existe un id, estamos creando uno nuevo.
        if (!id) return;

        setLoadingProcedure(true);
        setErrorMessage("");
        setProcedureNotFound(false);

        const { data, error } = await supabase
            .from("procedures")
            .select(`
            id,
            name,
            slug,
            description,
            full_description,
            estimated_duration,
            price,
            image_url,
            video_url,
            benefits,
            is_active
            `)
            .eq("id", Number(id))
            .single();

        if (error) {
            console.error(
            "Error al obtener el procedimiento:",
            error
            );

            setProcedureNotFound(true);
            setLoadingProcedure(false);

            return;
        }

        if (!data) {
            setProcedureNotFound(true);
            setLoadingProcedure(false);

            return;
        }

        // Cargamos los datos obtenidos en cada campo.
        setName(data.name ?? "");

        setSlug(data.slug ?? "");

        setDescription(
            data.description ?? ""
        );

        setFullDescription(
            data.full_description ?? ""
        );

        setEstimatedDuration(
            data.estimated_duration
            ? String(data.estimated_duration)
            : ""
        );

        setPrice(
            data.price !== null &&
            data.price !== undefined
            ? String(data.price)
            : ""
        );

        setImageUrl(
            data.image_url ?? ""
        );

        setVideoUrl(
            data.video_url ?? ""
        );

        // Los beneficios se guardan como un array.
        // Los convertimos nuevamente a texto,
        // colocando un beneficio por línea.
        setBenefitsText(
            Array.isArray(data.benefits)
            ? data.benefits.join("\n")
            : ""
        );

        setIsActive(
            data.is_active ?? true
        );

        setLoadingProcedure(false);
        };

        getProcedure();
    }, [id]);

    // Crear o editar el procedimiento.
    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setLoading(true);
        setErrorMessage("");

        // Convertimos el textarea de beneficios
        // en un array.
        const benefits = benefitsText
        .split("\n")
        .map((benefit) =>
            benefit.trim()
        )
        .filter(
            (benefit) =>
            benefit !== ""
        );

        // Datos que se enviarán a Supabase.
        const procedureData = {
        name: name.trim(),

        slug: slug.trim(),

        description:
            description.trim() || null,

        full_description:
            fullDescription.trim() || null,

        estimated_duration:
            estimatedDuration
            ? Number(estimatedDuration)
            : null,

        price:
            price
            ? Number(price)
            : 0,

        image_url:
            imageUrl.trim() || null,

        video_url:
            videoUrl.trim() || null,

        benefits,

        is_active: isActive,
        };

        let error;

        // Si existe un id, actualizamos.
        if (isEditing && id) {
        const updateResult = await supabase
            .from("procedures")
            .update(procedureData)
            .eq("id", Number(id));

        error = updateResult.error;
        } else {
        // Si no existe un id, creamos uno nuevo.
        const insertResult = await supabase
            .from("procedures")
            .insert(procedureData);

        error = insertResult.error;
        }

        // Si Supabase devuelve un error.
        if (error) {
        console.error(
            isEditing
            ? "Error al actualizar el procedimiento:"
            : "Error al crear el procedimiento:",
            error
        );

        setErrorMessage(
            error.message ||
            "No se pudo guardar el procedimiento."
        );

        setLoading(false);

        return;
        }

        // Si todo salió bien,
        // volvemos al listado.
        navigate("/admin/procedimientos");
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-soft to-white">

        {/* Encabezado */}
        <header className="bg-white border-b border-primary/10 shadow-sm">

            <div
            className="
                max-w-5xl
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

                {isEditing
                    ? "Editar procedimiento"
                    : "Nuevo procedimiento"}

                </h1>

                <p className="text-gray-600 mt-2">

                {isEditing
                    ? "Modificá la información del tratamiento."
                    : "Completá la información del tratamiento."}

                </p>

            </div>

            <Link
                to="/admin/procedimientos"
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
                Volver a procedimientos
            </Link>

            </div>

        </header>

        {/* Contenido */}
        <section
            className="
            max-w-5xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            py-8
            sm:py-10
            "
        >

            {/* Estado de carga */}
            {loadingProcedure && (

            <div className="bg-white rounded-3xl shadow-md border border-primary/10 p-10 text-center">

                <p className="text-gray-600">
                Cargando información del procedimiento...
                </p>

            </div>

            )}

            {/* Procedimiento inexistente */}
            {procedureNotFound && (

            <div className="bg-white rounded-3xl shadow-md border border-red-100 p-10 text-center">

                <h2 className="text-2xl font-bold text-dark">
                Procedimiento no encontrado
                </h2>

                <p className="text-gray-600 mt-3">
                No se encontró el procedimiento que intentás editar.
                </p>

                <Link
                to="/admin/procedimientos"
                className="
                    inline-block
                    mt-6
                    bg-primary
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                "
                >
                Volver a procedimientos
                </Link>

            </div>

            )}

            {/* Formulario */}
            {!loadingProcedure &&
            !procedureNotFound && (

            <form
                onSubmit={handleSubmit}
                className="
                bg-white
                rounded-3xl
                shadow-md
                border
                border-primary/10
                p-5
                sm:p-8
                lg:p-10
                "
            >

                {/* Error */}
                {errorMessage && (

                <div className="mb-7 rounded-2xl border border-red-200 bg-red-50 p-5">

                    <p className="text-red-600">
                    {errorMessage}
                    </p>

                </div>

                )}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                {/* Nombre */}
                <div className="md:col-span-2">

                    <label
                    htmlFor="name"
                    className="block font-semibold text-dark mb-2"
                    >
                    Nombre del procedimiento *
                    </label>

                    <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) =>
                        handleNameChange(
                        event.target.value
                        )
                    }
                    required
                    placeholder="Ejemplo: Aumento de labios"
                    className="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-4
                        py-3
                        outline-none
                        transition
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primary/20
                    "
                    />

                </div>

                {/* Slug */}
                <div className="md:col-span-2">

                    <label
                    htmlFor="slug"
                    className="block font-semibold text-dark mb-2"
                    >
                    Slug
                    </label>

                    <input
                    id="slug"
                    type="text"
                    value={slug}
                    onChange={(event) =>
                        setSlug(
                        createSlug(
                            event.target.value
                        )
                        )
                    }
                    required
                    placeholder="aumento-labios"
                    className="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-4
                        py-3
                        outline-none
                        transition
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primary/20
                    "
                    />

                    <p className="text-sm text-gray-500 mt-2">
                    Se genera automáticamente a partir del nombre.
                    </p>

                </div>

                {/* Descripción corta */}
                <div className="md:col-span-2">

                    <label
                    htmlFor="description"
                    className="block font-semibold text-dark mb-2"
                    >
                    Descripción corta
                    </label>

                    <textarea
                    id="description"
                    value={description}
                    onChange={(event) =>
                        setDescription(
                        event.target.value
                        )
                    }
                    rows={3}
                    placeholder="Breve descripción para la tarjeta del procedimiento."
                    className="
                        w-full
                        resize-y
                        rounded-xl
                        border
                        border-gray-300
                        px-4
                        py-3
                        outline-none
                        transition
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primary/20
                    "
                    />

                </div>

                {/* Descripción completa */}
                <div className="md:col-span-2">

                    <label
                    htmlFor="fullDescription"
                    className="block font-semibold text-dark mb-2"
                    >
                    Descripción completa
                    </label>

                    <textarea
                    id="fullDescription"
                    value={fullDescription}
                    onChange={(event) =>
                        setFullDescription(
                        event.target.value
                        )
                    }
                    rows={6}
                    placeholder="Descripción detallada que aparecerá en la página del procedimiento."
                    className="
                        w-full
                        resize-y
                        rounded-xl
                        border
                        border-gray-300
                        px-4
                        py-3
                        outline-none
                        transition
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primary/20
                    "
                    />

                </div>

                {/* Duración */}
                <div>

                    <label
                    htmlFor="estimatedDuration"
                    className="block font-semibold text-dark mb-2"
                    >
                    Duración estimada en minutos
                    </label>

                    <input
                    id="estimatedDuration"
                    type="number"
                    min="1"
                    value={estimatedDuration}
                    onChange={(event) =>
                        setEstimatedDuration(
                        event.target.value
                        )
                    }
                    placeholder="Ejemplo: 45"
                    className="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-4
                        py-3
                        outline-none
                        transition
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primary/20
                    "
                    />

                </div>

                {/* Precio */}
                <div>

                    <label
                    htmlFor="price"
                    className="block font-semibold text-dark mb-2"
                    >
                    Precio
                    </label>

                    <input
                    id="price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={price}
                    onChange={(event) =>
                        setPrice(
                        event.target.value
                        )
                    }
                    placeholder="Ejemplo: 50000"
                    className="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-4
                        py-3
                        outline-none
                        transition
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primary/20
                    "
                    />

                </div>

                {/* Imagen */}
                <div className="md:col-span-2">

                    <label
                    htmlFor="imageUrl"
                    className="block font-semibold text-dark mb-2"
                    >
                    URL de la imagen principal
                    </label>

                    <input
                    id="imageUrl"
                    type="url"
                    value={imageUrl}
                    onChange={(event) =>
                        setImageUrl(
                        event.target.value
                        )
                    }
                    placeholder="https://..."
                    className="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-4
                        py-3
                        outline-none
                        transition
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primary/20
                    "
                    />

                </div>

                {/* Video */}
                <div className="md:col-span-2">

                    <label
                    htmlFor="videoUrl"
                    className="block font-semibold text-dark mb-2"
                    >
                    URL del video
                    </label>

                    <input
                    id="videoUrl"
                    type="url"
                    value={videoUrl}
                    onChange={(event) =>
                        setVideoUrl(
                        event.target.value
                        )
                    }
                    placeholder="https://..."
                    className="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        px-4
                        py-3
                        outline-none
                        transition
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primary/20
                    "
                    />

                </div>

                {/* Beneficios */}
                <div className="md:col-span-2">

                    <label
                    htmlFor="benefits"
                    className="block font-semibold text-dark mb-2"
                    >
                    Beneficios
                    </label>

                    <textarea
                    id="benefits"
                    value={benefitsText}
                    onChange={(event) =>
                        setBenefitsText(
                        event.target.value
                        )
                    }
                    rows={5}
                    placeholder={`Escribí un beneficio por línea.

    Ejemplo:
    Mejora la hidratación
    Aporta volumen
    Define el contorno`}
                    className="
                        w-full
                        resize-y
                        rounded-xl
                        border
                        border-gray-300
                        px-4
                        py-3
                        outline-none
                        transition
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primary/20
                    "
                    />

                    <p className="text-sm text-gray-500 mt-2">
                    Escribí un beneficio por cada línea.
                    </p>

                </div>

                {/* Estado */}
                <div className="md:col-span-2">

                    <label className="flex items-center gap-3 cursor-pointer">

                    <input
                        type="checkbox"
                        checked={isActive}
                        onChange={(event) =>
                        setIsActive(
                            event.target.checked
                        )
                        }
                        className="
                        h-5
                        w-5
                        accent-primary
                        "
                    />

                    <span className="font-semibold text-dark">
                        Procedimiento activo
                    </span>

                    </label>

                    <p className="text-sm text-gray-500 mt-2">
                    Si está activo, aparecerá públicamente en la sección de procedimientos.
                    </p>

                </div>

                </div>

                {/* Botones */}
                <div
                className="
                    mt-10
                    pt-7
                    border-t
                    border-gray-100
                    flex
                    flex-col-reverse
                    gap-4
                    sm:flex-row
                    sm:justify-end
                "
                >

                <Link
                    to="/admin/procedimientos"
                    className="
                    w-full
                    sm:w-auto
                    text-center
                    rounded-xl
                    border
                    border-gray-300
                    px-6
                    py-3
                    font-medium
                    text-gray-700
                    transition
                    hover:bg-gray-50
                    "
                >
                    Cancelar
                </Link>

                <button
                    type="submit"
                    disabled={loading}
                    className="
                    w-full
                    sm:w-auto
                    rounded-xl
                    bg-primary
                    px-7
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#062F2C]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    "
                >

                    {loading
                    ? isEditing
                        ? "Guardando cambios..."
                        : "Guardando..."
                    : isEditing
                        ? "Guardar cambios"
                        : "Guardar procedimiento"}

                </button>

                </div>

            </form>

            )}

        </section>

        </main>
    );
};

export default AdminProcedureForm;
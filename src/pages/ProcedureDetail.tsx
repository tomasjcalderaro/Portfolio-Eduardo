import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { supabase } from "../lib/supabase";
import { whatsappUrl } from "../lib/contact";
import { useDocumentTitle } from "../lib/useDocumentTitle";

import labiosImg from "../assets/images/labios.webp";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Modal from "../components/ui/Modal";
import ContactSection from "../components/forms/ContactSection";

interface Procedure {
    id: number;
    name: string;
    description: string | null;
    full_description: string | null;
    benefits: string[] | null;
    estimated_duration: number | null;
    image_url: string | null;
    video_url: string | null;
    }

    const getYoutubeId = (url: string) => {
    try {
        const parsed = new URL(url);
        const host = parsed.hostname.replace("www.", "");

        if (host === "youtu.be") return parsed.pathname.slice(1) || null;

        if (host.endsWith("youtube.com")) {
        if (parsed.pathname === "/watch") return parsed.searchParams.get("v");

        const match = parsed.pathname.match(/^\/(embed|shorts)\/([^/?]+)/);
        if (match) return match[2];
        }
    } catch {
        // URL inválida: se trata como link común
    }

    return null;
    };

    const isVideoFile = (url: string) => /\.(mp4|webm|mov)(\?.*)?$/i.test(url);

    const VideoBlock = ({ url, title }: { url: string; title: string }) => {
    const youtubeId = getYoutubeId(url);

    if (youtubeId) {
        return (
        <div className="aspect-video overflow-hidden rounded-3xl shadow-lg bg-black">
            <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
            title={`Video: ${title}`}
            loading="lazy"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            />
        </div>
        );
    }

    if (isVideoFile(url)) {
        return (
        <div className="aspect-video overflow-hidden rounded-3xl shadow-lg bg-black">
            <video
            src={url}
            controls
            preload="metadata"
            className="w-full h-full object-cover"
            />
        </div>
        );
    }

    return (
        <div className="text-center">
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            border
            border-primary
            text-primary
            font-medium
            px-8
            py-3
            rounded-full
            hover:bg-primary
            hover:text-white
            transition
            "
        >
            Ver video
        </a>
        </div>
    );
    };

    const ProcedureDetail = () => {
    const { id } = useParams();

    const [openContact, setOpenContact] = useState(false);
    const [procedure, setProcedure] = useState<Procedure | null>(null);
    const [loading, setLoading] = useState(true);

    useDocumentTitle(
        procedure ? `${procedure.name} | Dr. Eduardo Argüello` : undefined
    );

    useEffect(() => {
        const getProcedure = async () => {
        if (!id) {
            setLoading(false);
            return;
        }

        const { data, error } = await supabase
            .from("procedures")
            .select(
            "id, name, description, full_description, benefits, estimated_duration, image_url, video_url"
            )
            .eq("id", Number(id))
            .eq("is_active", true)
            .single();

        if (error) {
            console.error("Error al obtener el procedimiento:", error);
            setProcedure(null);
        } else {
            setProcedure(data);
        }

        setLoading(false);
        };

        getProcedure();
    }, [id]);

    return (
        <>
        <Navbar onOpenContact={() => setOpenContact(true)} />

        <main className="pt-28 pb-24 px-6 bg-gradient-to-b from-white to-soft min-h-screen">
            <div className="max-w-6xl mx-auto">
            <Link
                to="/procedimientos"
                className="
                inline-flex
                items-center
                gap-2
                text-primary
                hover:text-secondary
                transition
                mb-10
                "
            >
                <span aria-hidden="true">←</span>
                Todos los procedimientos
            </Link>

            {loading && (
                <p className="text-center text-gray-600 text-lg py-24">
                Cargando procedimiento...
                </p>
            )}

            {!loading && !procedure && (
                <div className="text-center py-24">
                <h1 className="text-3xl font-bold">
                    Procedimiento no encontrado
                </h1>

                <p className="text-gray-600 mt-4">
                    Puede que el tratamiento ya no esté disponible.
                </p>
                </div>
            )}

            {!loading && procedure && (
                <>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Imagen */}
                    <img
                    src={procedure.image_url || labiosImg}
                    alt={procedure.name}
                    className="w-full h-auto rounded-3xl shadow-xl lg:sticky lg:top-28"
                    />

                    {/* Contenido */}
                    <div>
                    <span className="text-primary uppercase tracking-widest text-sm font-medium">
                        Tratamiento estético
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                        {procedure.name}
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                        {procedure.full_description || procedure.description}
                    </p>

                    {procedure.estimated_duration && (
                        <div
                        className="
                            inline-flex
                            items-center
                            mt-6
                            bg-primary/10
                            text-primary
                            rounded-full
                            px-4
                            py-2
                            text-sm
                            font-medium
                        "
                        >
                        Duración estimada: {procedure.estimated_duration} minutos
                        </div>
                    )}

                    {procedure.benefits && procedure.benefits.length > 0 && (
                        <>
                        <h2 className="text-xl font-bold mt-12 mb-5">
                            Beneficios
                        </h2>

                        <ul className="space-y-3">
                            {procedure.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-3">
                                <span
                                aria-hidden="true"
                                className="
                                    mt-0.5
                                    flex
                                    h-6
                                    w-6
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-primary/10
                                    text-primary
                                    text-sm
                                "
                                >
                                ✓
                                </span>

                                <span className="text-gray-700">{benefit}</span>
                            </li>
                            ))}
                        </ul>
                        </>
                    )}

                    <a
                        href={whatsappUrl(
                        `Hola Dr. Argüello, quisiera consultar por ${procedure.name}.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        inline-flex
                        items-center
                        mt-12
                        bg-primary
                        text-white
                        px-8
                        py-3.5
                        rounded-full
                        font-semibold
                        shadow-lg
                        hover:bg-secondary
                        transition
                        "
                    >
                        Solicitar consulta
                    </a>
                    </div>
                </div>

                {/* Video */}
                {procedure.video_url && (
                    <section className="mt-20 max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        Conocé más sobre el tratamiento
                    </h2>

                    <VideoBlock
                        url={procedure.video_url}
                        title={procedure.name}
                    />
                    </section>
                )}
                </>
            )}
            </div>
        </main>

        <Footer onOpenContact={() => setOpenContact(true)} />

        {openContact && (
            <Modal onClose={() => setOpenContact(false)}>
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-3">Solicitar Consulta</h2>

                <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />

                <p className="text-gray-600 mb-8">
                Completá el formulario y nos pondremos en contacto con vos a la
                brevedad.
                </p>

                <ContactSection />
            </div>
            </Modal>
        )}
        </>
    );
};

export default ProcedureDetail;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

const AdminLogin = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setLoading(true);
        setErrorMessage("");

        const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
        });

        if (error) {
        console.error("Error al iniciar sesión:", error);

        setErrorMessage(
            "El correo o la contraseña son incorrectos."
        );

        setLoading(false);
        return;
        }

        navigate("/admin/panel");
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-soft to-white flex items-center justify-center px-4 py-10">
        <section className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-primary/10 p-8 md:p-10">
            <div className="text-center">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
                Administración
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-dark mt-3">
                Iniciar sesión
            </h1>

            <p className="text-gray-600 mt-4">
                Ingresá tus datos para acceder al panel administrativo.
            </p>
            </div>

            <form
            onSubmit={handleLogin}
            className="mt-8 space-y-5"
            >
            <div>
                <label
                htmlFor="email"
                className="block text-sm font-medium text-dark mb-2"
                >
                Correo electrónico
                </label>

                <input
                id="email"
                type="email"
                value={email}
                onChange={(event) =>
                    setEmail(event.target.value)
                }
                placeholder="correo@ejemplo.com"
                required
                autoComplete="email"
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

            <div>
                <label
                htmlFor="password"
                className="block text-sm font-medium text-dark mb-2"
                >
                Contraseña
                </label>

                <input
                id="password"
                type="password"
                value={password}
                onChange={(event) =>
                    setPassword(event.target.value)
                }
                placeholder="Ingresá tu contraseña"
                required
                autoComplete="current-password"
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

            {errorMessage && (
                <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3">
                <p className="text-sm text-red-600">
                    {errorMessage}
                </p>
                </div>
            )}

            <button
                type="submit"
                disabled={loading}
                className="
                w-full
                rounded-xl
                bg-primary
                text-white
                py-3
                font-semibold
                transition
                hover:scale-[1.02]
                hover:bg-[#062F2C]
                disabled:cursor-not-allowed
                disabled:opacity-70
                "
            >
                {loading
                ? "Ingresando..."
                : "Ingresar al panel"}
            </button>
            </form>
        </section>
        </main>
    );
};

export default AdminLogin;
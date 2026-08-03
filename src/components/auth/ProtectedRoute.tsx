import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

interface ProtectedRouteProps {
    children: React.ReactNode;
    }

    const ProtectedRoute = ({
    children,
    }: ProtectedRouteProps) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] =
        useState(false);

    useEffect(() => {
        const checkSession = async () => {
        const {
            data: { session },
        } = await supabase.auth.getSession();

        setIsAuthenticated(session !== null);
        setLoading(false);
        };

        checkSession();
    }, []);

    if (loading) {
        return (
        <main className="min-h-screen flex items-center justify-center bg-soft">
            <p className="text-gray-600">
            Verificando sesión...
            </p>
        </main>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/admin" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
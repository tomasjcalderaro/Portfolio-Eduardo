import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Procedures from "./pages/Procedures";
import ProcedureDetail from "./pages/ProcedureDetail";

import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import AdminProcedures from "./pages/AdminProcedures";
import AdminProcedureForm from "./pages/AdminProcedureForm";

import ProtectedRoute from "./components/auth/ProtectedRoute";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Procedimientos públicos */}
        <Route
          path="/procedimientos"
          element={<Procedures />}
        />

        <Route
          path="/procedimientos/:id"
          element={<ProcedureDetail />}
        />

        {/* Inicio de sesión del administrador */}
        <Route
          path="/admin"
          element={<AdminLogin />}
        />

        {/* Panel principal */}
        <Route
          path="/admin/panel"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />

        {/* Lista de procedimientos */}
        <Route
          path="/admin/procedimientos"
          element={
            <ProtectedRoute>
              <AdminProcedures />
            </ProtectedRoute>
          }
        />

        {/* Crear un procedimiento nuevo */}
        <Route
          path="/admin/procedimientos/nuevo"
          element={
            <ProtectedRoute>
              <AdminProcedureForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/procedimientos/:id/editar"
          element={
            <ProtectedRoute>
              <AdminProcedureForm />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
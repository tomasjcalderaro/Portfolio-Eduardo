import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Procedures from "./pages/Procedures";
import ProcedureDetail from "./pages/ProcedureDetail";

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
        <Route path="/" element={<Home />} />

        <Route
          path="/procedimientos"
          element={<Procedures />}
        />

        <Route
          path="/procedimientos/:slug"
          element={<ProcedureDetail />}
        />
      </Routes>
    </>
  );
}

export default App;

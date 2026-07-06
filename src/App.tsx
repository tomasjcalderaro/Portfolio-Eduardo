import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Procedures from "./pages/Procedures";
import ProcedureDetail from "./pages/ProcedureDetail";

function App() {
  return (
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
  );
}

export default App;
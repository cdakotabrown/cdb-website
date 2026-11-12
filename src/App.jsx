import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import LabReference from "./pages/LabReference";
import FgcRoster from "./pages/FgcRoster";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lab-reference" element={<LabReference />} />
          <Route path="fgc" element={<FgcRoster />} />
          {/* Old URLs */}
          <Route
            path="projects/lab-reference"
            element={<Navigate to="/lab-reference" replace />}
          />
          <Route
            path="blog/fgc-roster"
            element={<Navigate to="/fgc" replace />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

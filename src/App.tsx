import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login";
import ReportPage from "./components/pages/report";

export default function App() {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import BotHosting from "./pages/BotHosting";
import GtaSamp from "./pages/GtaSamp";
import Minecraft from "./pages/Minecraft";
import AdminPanel from "./pages/AdminPanel";
import ResellerPanel from "./pages/ResellerPanel";
import JasaSamp from "./pages/JasaSamp";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bot" element={<BotHosting />} />
        <Route path="/gta" element={<GtaSamp />} />
        <Route path="/minecraft" element={<Minecraft />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/reseller-panel" element={<ResellerPanel />} />
        <Route path="/jasa-samp" element={<JasaSamp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
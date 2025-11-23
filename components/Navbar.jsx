import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-5 bg-futuristic text-white shadow-lg flex flex-wrap gap-6 font-semibold justify-center">
      {[
        { name: "Home", path: "/" },
        { name: "Bot Hosting", path: "/bot" },
        { name: "GTA SAMP", path: "/gta" },
        { name: "Minecraft", path: "/minecraft" },
        { name: "Admin Panel", path: "/admin-panel" },
        { name: "Reseller Panel", path: "/reseller-panel" },
        { name: "Jasa SA:MP", path: "/jasa-samp" }
      ].map((link, idx) => (
        <Link
          key={idx}
          to={link.path}
          className="hover:text-neonBlue transition-colors duration-300"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
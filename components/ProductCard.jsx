import { sendToWhatsApp } from "../utils/whatsapp";

export default function ProductCard({ title, price, desc }) {
  return (
    <div className="p-5 bg-metallic/10 border border-metallic rounded-xl shadow-lg hover:scale-105 hover:border-neonBlue transition-all duration-300">
      <h3 className="text-xl font-bold text-neonPink mb-2">{title}</h3>
      <p className="text-gray-300 mb-2">{desc}</p>
      <p className="font-bold text-neonGreen">{price || "Harga N/A"}</p>

      <button
        onClick={() => sendToWhatsApp(`Saya Mau Pesan paket ${title}`)}
        className="mt-3 bg-neonBlue text-black px-4 py-2 rounded-lg hover:bg-white hover:text-neonBlue transition-all duration-300 shadow-neon"
      >
        Pesan Sekarang
      </button>
    </div>
  );
}
import ProductCard from "../components/ProductCard";
import { botPackages } from "../data/botPackages";

export default function BotHosting() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-neonBlue drop-shadow-neon animate-glow">
        Bot WhatsApp Hosting
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {botPackages.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
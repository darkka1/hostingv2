import ProductCard from "../components/ProductCard";
import { gtaPackages } from "../data/gtaPackages";

export default function GtaSamp() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-neonGreen drop-shadow-neon animate-glow">
        GTA SAMP Hosting
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {gtaPackages.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
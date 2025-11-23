import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="p-20 text-center">
        <h2 className="text-4xl font-extrabold text-metallic">
          Layanan Kami
        </h2>
        <p className="text-gray-300 mt-4 text-lg">
          Hosting high performance dengan teknologi masa depan.
        </p>
      </div>
    </div>
  );
}
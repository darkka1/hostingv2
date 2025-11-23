export default function Hero() {
  return (
    <div className="relative w-full h-[450px] flex items-center justify-center text-center bg-gradient-to-br from-futuristic to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527443224154-9f1b0b8a5ddd?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20 blur-sm"></div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-neonBlue drop-shadow-neon animate-glow">
          FUTURE HOSTING PANEL
        </h1>
        <p className="text-gray-300 mt-4 text-lg max-w-xl mx-auto">
          Hosting masa depan untuk Bot WhatsApp, GTA SAMP, Minecraft, Admin & Reseller Panel
        </p>

        <a
          href="/bot"
          className="mt-6 inline-block bg-neonPink text-black px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-neonPink transition-all duration-500 shadow-neon"
        >
          Mulai Pesan
        </a>
      </div>
    </div>
  );
}
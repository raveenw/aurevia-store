export default function HeroSection() {
  return (
    <section className="min-h-[65vh] -translate-y-16 flex flex-col items-center justify-center px-6 text-center bg-[#F7F3EE]">
      <p className="uppercase tracking-[0.3em] text-xs text-[#B89B5E] mb-5">
        Curated Beauty From Canada
      </p>

      <h1 className="text-4xl md:text-6xl font-serif leading-tight max-w-4xl text-[#1F1F1F]">
        Something beautiful
        <br />
        is arriving.
      </h1>

      <p className="mt-6 max-w-xl text-neutral-600 text-base leading-relaxed">
        Bringing globally loved beauty essentials closer to home.
      </p>

      <div className="mt-8 flex items-center gap-4">
        <a
          href="https://www.instagram.com/aurevia_lk/"
          target="_blank"
          className="bg-black text-white px-7 py-3 rounded-full hover:opacity-90 transition-all duration-300"
        >
          Follow the journey
        </a>

        <a
          href="#"
          className="border border-black px-7 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300"
        >
          Explore
        </a>
      </div>

      <p className="mt-8 text-sm tracking-wide text-neutral-400">
        Launching soon in Sri Lanka.
      </p>
    </section>
  )
}
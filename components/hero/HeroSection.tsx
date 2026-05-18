export default function HeroSection() {
  return (
    <section className="px-6 py-28 text-center max-w-6xl mx-auto">
      <p className="uppercase tracking-[0.3em] text-sm text-[#5E6B5C] mb-4">
        Imported From Canada
      </p>

      <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-6">
        Authentic Beauty.
        <br />
        Curated Luxury.
      </h1>

      <p className="max-w-2xl mx-auto text-lg text-neutral-600 mb-10">
        Discover premium skincare and beauty products sourced directly from Canada.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="/shop"
          className="bg-black text-white px-8 py-4 rounded-full"
        >
          Shop Now
        </a>

        <a
          href="https://www.instagram.com/aurevia_lk/"
          target="_blank"
          className="border border-black px-8 py-4 rounded-full"
        >
          Instagram
        </a>
      </div>
    </section>
  )
}
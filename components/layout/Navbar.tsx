import Image from "next/image"

export default function Navbar() {
  return (
    <header className="w-full bg-[#F7F3EE]">
      <div className="w-full px-12 md:px-20 py-1.5 flex items-center justify-between">
        <a href="/">
          <Image
            src="/logo.png"
            alt="Aurevia"
            width={145}
            height={50}
            priority
            className="w-auto h-auto"
          />
        </a>

        <nav className="flex items-center gap-10 text-[11px] uppercase tracking-[0.25em] text-neutral-700">
          <a
            href="#"
            className="hover:text-black transition-colors"
          >
            Shop
          </a>

          <a
            href="#"
            className="hover:text-black transition-colors"
          >
            About
          </a>

          <a
            href="https://www.instagram.com/aurevia_lk/"
            target="_blank"
            className="hover:text-black transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>

      <div className="border-b border-neutral-300 mt-2"></div>
    </header>
  )
}
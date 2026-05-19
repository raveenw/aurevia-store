import Image from "next/image"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F3EE]/95 backdrop-blur-sm border-b border-black/5">
      <div className="flex items-center justify-between px-5 md:px-20 py-4 md:py-3">
        
        <a href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Aurevia"
            width={120}
            height={40}
            priority
            className="w-auto h-auto object-contain"
          />
        </a>

        <nav className="flex items-center gap-4 md:gap-10 text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-neutral-700">
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
    </header>
  )
}
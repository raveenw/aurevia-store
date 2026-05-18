export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F7F3EE]/80 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="/" className="text-3xl font-serif">
          Aurevia
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
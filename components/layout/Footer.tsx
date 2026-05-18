export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#F7F3EE] mt-18">
      <div className="w-full px-12 md:px-20 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">
          © 2026 Aurevia. All rights reserved.
        </p>

        <div className="flex items-center gap-8 text-sm text-neutral-500">
          <a
            href="https://www.instagram.com/aurevia_lk/"
            target="_blank"
            className="hover:text-black transition-colors"
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/aurevia"
            target="_blank"
            className="hover:text-black transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}
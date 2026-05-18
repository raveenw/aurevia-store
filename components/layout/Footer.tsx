export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-3xl font-serif mb-4">
            Aurevia
          </h3>

          <p className="text-neutral-600 max-w-md">
            Authentic skincare and beauty products imported directly from Canada.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="https://www.instagram.com/aurevia_lk/"
            target="_blank"
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/aurevia"
            target="_blank"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}
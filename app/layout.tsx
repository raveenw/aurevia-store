import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aurevia",
  description: "Luxury beauty and skincare sourced from Canada.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
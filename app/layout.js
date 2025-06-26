import "./globals.css"

export const metadata = {
  title: "HELPING HAND FOUNDATION - Together we can, Together we will",
  description:
    "Enhancing the well-being of vulnerable populations by facilitating access to quality education, comprehensive healthcare services, and essential living resources.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-br from-copper to-garnet min-h-screen">{children}</body>
    </html>
  )
}

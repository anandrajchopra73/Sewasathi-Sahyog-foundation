import "./globals.css"

export const metadata = {
  title: "SEWASATHI SAHYOG FOUNDATION - Together we can, Together we will",
  description:
    "Enhancing the well-being of vulnerable populations by facilitating access to quality education, comprehensive healthcare services, and essential living resources.",
    generator: 'ANAND'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-white">{children}</body>
    </html>
  )
}

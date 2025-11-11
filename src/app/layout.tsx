import '../styles/globals.css'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Next + Tailwind + shadcn Skeleton',
  description: 'A minimal Next.js + Tailwind + shadcn starter',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {/* Skip link for keyboard users */}
        <a href="#content" className="skip-link sr-only-focusable">
          Skip to content
        </a>

        <div className="max-w-6xl mx-auto px-4">
          <Header />
          <main id="content" role="main" className="py-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

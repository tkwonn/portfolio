import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Taesok Kwon | Portfolio',
  description: "Taesok Kwon's resume, skills, and project list.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth appearance-auto">
      <body className={`${inter.className} bg-gray-300 text-gray-950 relative sm:pt-36 pt-28`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
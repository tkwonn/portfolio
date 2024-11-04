import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Taesok Kwon | Portfolio',
    description: "Taesok Kwon's resume, skills, and project list.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="appearance-auto !scroll-smooth">
            <body
                className={`${inter.className} relative bg-gray-300 pt-28 text-gray-950 sm:pt-36`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}

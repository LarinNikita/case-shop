import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Casecobra',
    description: 'Your Image on a Custom Phone Case',
    icons: {
        icon: '/snake-1.png',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main className="flex min-h-[calc(100vh-3.5rem-1px)] flex-col">
                    <div className="flex h-full flex-1 flex-col">
                        {children}
                    </div>
                    <Footer />
                </main>
                <Toaster />
            </body>
        </html>
    )
}

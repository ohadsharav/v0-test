import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Hello from v0",
  description: "A basic Next.js project built with v0",
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { GetQuoteButton } from "@/components/get-quote-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "doors | Home Renovation Platform",
  description: "Connect with top professionals for your home renovation projects",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <GetQuoteButton />
        </ThemeProvider>
      </body>
    </html>
  )
}

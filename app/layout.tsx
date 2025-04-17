import type React from "react"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
import "./globals.css"
import { Suspense } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-9SJBKR1F4O2uofKXUnyqrSXZA0FGI3.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-9SJBKR1F4O2uofKXUnyqrSXZA0FGI3.png"
        />
        <meta name="apple-mobile-web-app-title" content="Criptoprecio" />
        <meta name="application-name" content="Criptoprecio" />
        <Script
          src="https://js.stripe.com/v3/buy-button.js"
          strategy="afterInteractive"
          id="stripe-buy-button-script"
        />
      </head>
      <body>
        <Suspense>
          <ThemeProvider>{children}</ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}


import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };

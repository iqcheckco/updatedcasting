import type React from "react"
import { Inter, Bebas_Neue } from "next/font/google"
import Script from "next/script"

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Flux Casting",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%233B82F6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='2' y='2' width='20' height='20' rx='2.18' ry='2.18'></rect><line x1='7' y1='2' x2='7' y2='22'></line><line x1='17' y1='2' x2='17' y2='22'></line><line x1='2' y1='12' x2='22' y2='12'></line><line x1='2' y1='7' x2='7' y2='7'></line><line x1='2' y1='17' x2='7' y2='17'></line><line x1='17' y1='17' x2='22' y2='17'></line><line x1='17' y1='7' x2='22' y2='7'></line></svg>",
        type: "image/svg+xml",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16829245039" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Set default consent to 'granted'
            gtag('consent', 'default', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted',
              'personalization_storage': 'granted',
              'functionality_storage': 'granted',
              'security_storage': 'granted',
              'ad_personalization': 'granted',
              'ad_user_data': 'granted'
            });

            // Initialize gtag
            gtag('js', new Date());
            gtag('config', 'AW-16829245039');
          `}
        </Script>
      </head>
      <body className={`${bebasNeue.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}



import './globals.css'
import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "BoxHunter - Производство коробок под ключ для B2B | Упаковка премиум-класса",
  description:
    "BoxHunter - ведущий производитель высококачественных коробок для бизнеса. Работаем с Google, Amazon, Alibaba, Rolex, BMW и другими мировыми брендами. Полный цикл производства в Китае, доставка по всему миру.",
  keywords:
    "производство коробок, коробки под ключ, B2B упаковка, коробки для бизнеса, кастомные коробки, упаковка для брендов, производство в Китае, премиум упаковка",
  openGraph: {
    title: "BoxHunter - Производство коробок под ключ для мировых брендов",
    description: "Высококачественные коробки для ведущих компаний мира. Производство в Китае с доставкой глобально.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "BoxHunter - Производство коробок для B2B",
    description: "Премиум упаковка для мировых брендов",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

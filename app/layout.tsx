import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ecommerce Landing Page',
  description: 'Ecommerce Landing Page',
  generator: 'Nguyễn Tuấn Kiệt',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

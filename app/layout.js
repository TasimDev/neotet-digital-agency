import { Inter } from 'next/font/google'
import '@/app/ui/global.css';


export const metadata = {
  title: 'Neotet | Digital Agency',
  description: 'Your Digital Agency for your bussenes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
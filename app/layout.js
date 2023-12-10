
import '@/app/ui/styles/style.css';
import Navbar from './ui/Navbar/Navbar';
import Footer from './ui/Footer/Footer';
import { raleway } from '@/app/ui/fonts';

export const metadata = {
  title: 'Neotet | Digital Agency',
  description: 'Your Digital Agency for your bussenes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body className={`${raleway.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  )
}

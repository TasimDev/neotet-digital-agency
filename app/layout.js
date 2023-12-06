
import '@/app/ui/styles/style.css';
import Navbar from './ui/Navbar/Navbar';
import Footer from './ui/Footer';


export const metadata = {
  title: 'Neotet | Digital Agency',
  description: 'Your Digital Agency for your bussenes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  )
}

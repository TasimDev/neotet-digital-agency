
import '@/app/ui/styles/style.css';
import Navbar from './ui/Navbar/Navbar';
import Footer from './ui/Footer/Footer';

export const metadata = {
  title: {
    template: '%s | NEOTET ',
    default: 'NEOTET | Digital Agency'
  },
  description: 'We are NEOTET, that we make awesome new generation web products to determine your future.',
  metadataBase: new URL('https://neotet.co'),
  keywords: ['Websites', 'Web Apps', 'E-Commerce', 'SMM', 'Digital Marketing', 'SaaS'],
  authors: [{ name: 'NEOTET Team' }],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
    type: "image/png"
  },
  openGraph: {
    title: 'NNEOTET | Digital Agency',
    description: 'We are NEOTET, that we make awesome new generation web products to determine your future.',
    url: 'https://neotet.co',
    siteName: 'NEOTET',
    images: [
      {
        url: '/neotet_head_image.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: '/neotet_head_image.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'NEOTET | DIGITAL AGENCY',
      },
    ],
    locale: 'bg',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html >
  )
}

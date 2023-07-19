import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import { Inter } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'next app',
  description: 'next js tutorial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}

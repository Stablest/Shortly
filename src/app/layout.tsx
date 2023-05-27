import './globals.css'
import { Poppins } from 'next/font/google'
import Head from 'next/head'

const poppins = Poppins({ weight: ['500', '700'], style: ['normal'], subsets: ['latin'] })

export const metadata = {
  title: 'Shortly',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-lg`}>
        <div className='w-[1440px] mx-auto bg-white overflow-hidden'>
          {children}
        </div>
      </body>
    </html>
  )
}

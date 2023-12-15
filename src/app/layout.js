import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Script from 'next/script'
export const metadata = {
  title: 'My Code Helper',
  description: 'My code helper is a web app created using next js to get working solutions of code any time.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Script async="async" data-cfasync="false" src="//collectbladders.com/22117bd38cb131c1c5659583265cdd1d/invoke.js"></Script>
        {children}
        <div id="container-22117bd38cb131c1c5659583265cdd1d"></div>
        </body>
    </html>
  )
}

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
      {/* <Script type='text/javascript' src='//collectbladders.com/91/e0/cb/91e0cbf8ea08300e22465980db367b13.js' id="tera"></Script> */}
      {/* <Script src="https://alwingulla.com/88/tag.min.js" data-zone="26613" async data-cfasync="false"></Script> */}

      <Script src="/mon.js" data-cfasync="false"></Script>
        {children}</body>
    </html>
  )
}

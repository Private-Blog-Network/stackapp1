import './globals.css'
import Script from 'next/script'
import Analyse from "./components/analytics"
export const metadata = {
  title: 'My Code Helper',
  description: 'My code helper is a web app created using next js to get working solutions of code any time.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Script async="async" data-cfasync="false" src="//collectbladders.com/22117bd38cb131c1c5659583265cdd1d/invoke.js"></Script>
        {children}
        <div id="container-22117bd38cb131c1c5659583265cdd1d"></div>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.js" id="mdb"/>
        <Analyse/>
        </body>
    </html>
  )
}

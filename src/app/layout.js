import './globals.css'
import Script from 'next/script'
import Analyse from "./components/analytics"
import Indicate from "./components/indicator"
export const metadata = {
  title: 'EXAMPLE-A',
  description: "EXAMPLE-A is a dynamic web application crafted with Next.js, a React-based framework, designed to provide users with efficient solutions to coding challenges whenever needed. Leveraging the power of Next.js, this web app offers a seamless and responsive experience for users seeking instant and effective code solutions.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Indicate/>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.js" id="mdb" strateg="beforeInteractive"/>
        <Analyse/>
        </body>
    </html>
  )
}

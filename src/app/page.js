import Card from "./components/card"
import Nav from "./components/nav"
import Script from "next/script"
import Footer1 from "./components/footer1"
import Load from "./components/loader"
export const dynamic = 'force-dynamic'
export default function Home() {
  return (
    <div>
      <Nav/>
      <Load/>
      <Card name="home"/>
      <Footer1/>
    </div>
  )
}

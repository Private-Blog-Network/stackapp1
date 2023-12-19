import Card from "./components/card"
import Nav from "./components/nav"
import Script from "next/script"
import Footer from "./components/footer"
import Load from "./components/loader"
export default function Home() {
  return (
    <div>
      <Nav/>
      <Load/>
      <Card name="home"/>
      <Footer/>
    </div>
  )
}

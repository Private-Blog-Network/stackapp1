import Link from "next/link"
import Script from "next/script"
export default function Nav(props){
return (
    <>
<Script id="ads" src="/ad.js"></Script>
<nav className="navbar navbar-light bg-body-tertiary">
  <div className="container-fluid">
    <h1><Link href="/" className="navbar-brand mb-0 h1">EXAMPLE-A</Link></h1>
  </div>
</nav>
    </>
)
}
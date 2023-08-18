import Link from "next/link"
import pls from "./menulist"
export default function Nav(props){
return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href={props.page=='page'?`../`:'.'}>My Code Helper</Link>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {
            pls.obj.map((e,i)=>(
        <li className="nav-item" key={i}>
          <Link className="nav-link active" aria-current="page" href={props.page=='page'?`../${e}`:e}>{e}</Link>
        </li>
            ))
        }
      </ul>
    </div>
  </div>
</nav>
    </>
)
}
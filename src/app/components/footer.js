import Link from 'next/link'
export default function Footer(){
    return(
        <>
             <footer className="bg-light text-center text-white">
              <div className="container p-4 pb-0">
                    <section className="mb-4">
            <Link
                 className="btn text-white btn-floating m-1"
        style={{'backgroundColor': '#3b5998'}}
        href="#!"
        role="button"
        ><i className="fab fa-facebook-f"></i></Link>

      <Link
        className="btn text-white btn-floating m-1"
        style={{'backgroundColor': '#55acee'}}
        href="#!"
        role="button"
        ><i className="fab fa-twitter"></i></Link>
      <Link
        className="btn text-white btn-floating m-1"
        style={{'backgroundColor': '#dd4b39'}}
        href="#!"
        role="button"
        ><i className="fab fa-google"></i></Link>
      <Link
        className="btn text-white btn-floating m-1"
        style={{'backgroundColor': '#ac2bac'}}
        href="#!"
        role="button"
        ><i className="fab fa-instagram"></i></Link>
      <Link
        className="btn text-white btn-floating m-1"
        style={{'backgroundColor': '#0082ca'}}
        href="#!"
        role="button"
        ><i className="fab fa-linkedin-in"></i></Link>
      <Link
        className="btn text-white btn-floating m-1"
        style={{'backgroundColor': '#333333'}}
        href="#!"
        role="button"
        ><i className="fab fa-github"></i></Link>
    </section>
  <div className="text-center p-3" style={{'backgroundColor': 'rgba(0, 0, 0, 0.2)'}}>
     {new Date().toLocaleString()}<br/>
     <div>Content Source : <a href="https://stackoverflow.com" target="_blank">Stackoverflow</a></div>
  </div>
  </div>
</footer>
        </>
    )
}
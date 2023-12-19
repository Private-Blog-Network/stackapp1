import Script from "next/script"
export default function Analyse(){
    return(
        <>
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-E6MLEWLK39" id="analyse"></Script>
<Script id="analyse1">
    {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-E6MLEWLK39');`
  }
</Script>
        </>
    )
}
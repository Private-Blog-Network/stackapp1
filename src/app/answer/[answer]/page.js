import Head from 'next/head'
import Script from 'next/script'
import Link from "next/link"
import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Load from "../../components/loader"
import Highlight from "../../components/hjs"
export async function generateMetadata({params}){
let dt = await  manageAnswer(params.answer);
return{
    title:dt.qtitle,
    description:dt.qbody.slice(0,150),
    keywords:dt.qtags.toString()

}
}
async function manageAnswer(id){
    try{
        let ans = await fetch(`https://api.stackexchange.com/2.3/answers/${id}/?site=stackoverflow&filter=withbody&key=${process.env.KEY}`,{ cache: 'no-store' });
        let resans = await ans.json();
        let qid = resans.items[0].question_id;
        let qsn = await fetch(`https://api.stackexchange.com/2.3/questions/${qid}/?site=stackoverflow&filter=withbody&key=${process.env.key}`,{ cache: 'no-store' });
        let resqsn = await qsn.json();
        // console.log(resqsn.items[0].title);
        return {
            qtitle:resqsn.items[0].title,
            qbody:resqsn.items[0].body,
            qtags:resqsn.items[0].tags,
            abody:resans.items[0].body
        }

    }catch(err){
        console.log("error");
    }
}
export default async function ans(props){
   let dt = await  manageAnswer(props.params.answer);
    return (
        <>
        <Nav page="page"/>
        <Load/>
            <div className="container shadow-4 rounded mt-3 mb-3 p-3 border border-primary">
                {
                    dt.qtags.map((e,i)=>(
                        <Link href={`../${e}`} className="badge badge-primary m-1" key={i}>{e}</Link>
                    ))
                }
                <h1 dangerouslySetInnerHTML={{__html:dt.qtitle}}></h1><hr />
                <div dangerouslySetInnerHTML={{__html:dt.qbody}}></div>
                <hr />
                <div className="h3">Solution <li className="h3 fa fa-arrow-down"></li></div>
                <hr />
                <div dangerouslySetInnerHTML={{__html:dt.abody}}>
                </div>
            </div>
            <Footer/>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.js" id="mdb" strategy="lazyOnload"/>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js" id="hljs"/> 
                <Highlight/>
        </>
    )
}
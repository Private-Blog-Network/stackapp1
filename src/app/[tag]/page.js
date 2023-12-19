import Card from "../components/card"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Load from "../components/loader"
import Script from 'next/script'
export function generateMetadata({params}){
    return{
        title:params.tag+" - My Code Helper",
        description:params.tag+ " find here code examples, projects, interview questions, cheatsheet, and problem solution you have needed. Many source codes of "+params.tag+" are available for free here."
    }
}
export default function tag(params){
    return(
        <>
        <Nav/>
        <Load/>
        <Card name='tag' tag={params}/>
        <Footer/>
        </>
    )
}
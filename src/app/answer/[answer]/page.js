import Ans from "../../components/ans"
export async function generateMetadata({params}){
let dt = await  manageAnswer(params.answer);
return{
    title:dt.qtitle,
    description:dt.qbody.slice(0,150),
    keywords:dt.qtags.toString()

}
}

export default async function ans({params}){
    return (
        <>
        <Ans id={params.answer}/>
        </>
    )
}

async function manageAnswer(id){
    try{
        let ans = await fetch(`https://api.stackexchange.com/2.3/answers/${id}/?site=stackoverflow&filter=withbody&key=${process.env.KEY}`,{ cache: 'no-store' });
        let resans = await ans.json();
        let qid = resans.items[0].question_id;
        let qsn = await fetch(`https://api.stackexchange.com/2.3/questions/${qid}/?site=stackoverflow&filter=withbody&key=${process.env.KEY}`,{ cache: 'no-store' });
        let resqsn = await qsn.json();
        return {
            qtitle:resqsn.items[0].title,
            qbody:resqsn.items[0].body,
            qtags:resqsn.items[0].tags,
        }

    }catch(err){
        console.log("error");
    }
}
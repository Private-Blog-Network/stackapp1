'use client'
import {useEffect,useRef} from "react"
// import Pop from "./pop"
import Router from 'next/router'
export default function Ad1() {
const nw = useRef()
useEffect(() => {
		let sp = document.createElement("script")
		sp.id="a1"
		sp.type="text/javascript";
		sp.innerHTML=`
	 atOptions = {
		'key' : '286dc2d72d046f16b7c43cfa6ee77ccc',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
		`;
let sp1 = document.createElement('script')
sp1.src="//collectbladders.com/286dc2d72d046f16b7c43cfa6ee77ccc/invoke.js";
sp.onload=()=>{
	console.log("loaded1");
}
sp1.onload=()=>{
let ppc = document.createElement("script")
ppc.id="a2"
ppc.innerHTML=`
	atOptions = {
		'key' : 'bb7e3041fbe20d7620164eb20a6c46ec',
		'format' : 'iframe',
		'height' : 300,
		'width' : 160,
		'params' : {}
	};
`;
let ppc1 = document.createElement("script")
ppc1.src = "//collectbladders.com/bb7e3041fbe20d7620164eb20a6c46ec/invoke.js";
ppc1.onload=()=>{
	let ppp = document.createElement("script")
ppp.id="a3"
ppp.innerHTML=`
atOptions = {
	'key' : '02034458a3beeb36c2a9ce06e28f6641',
	'format' : 'iframe',
	'height' : 60,
	'width' : 468,
	'params' : {}
};
`;
let ppp1 = document.createElement("script")
ppp1.src = "//collectbladders.com/02034458a3beeb36c2a9ce06e28f6641/invoke.js";
ppp1.onload=()=>{
	let ppk = document.createElement("script")
ppk.id="a4"
ppk.innerHTML=`
atOptions = {
	'key' : '77c8895075b148ec327619ee2e12568c',
	'format' : 'iframe',
	'height' : 50,
	'width' : 320,
	'params' : {}
};
`;
let ppk1 = document.createElement("script")
ppk1.src = "//collectbladders.com/77c8895075b148ec327619ee2e12568c/invoke.js";
ppk1.onload=()=>{
	console.log("loaded");
}
let sbk = document.querySelector("#a4");
let selk = document.querySelector(".ad4");
if(sbk){
	sbk.remove()
	selk.appendChild(ppk)
	selk.appendChild(ppk1)
}else{
	selk.appendChild(ppk)
	selk.appendChild(ppk1)
}	
}
let sbp = document.querySelector("#a3");
let selp = document.querySelector(".ad3");
if(sbp){
	sbp.remove()
	selp.appendChild(ppp)
	sel.appendChild(ppp1)
}else{
	selp.appendChild(ppp)
	selp.appendChild(ppp1)
}	
}
let sb = document.querySelector("#a2");
let sel = document.querySelector(".ad2");
if(sb){
	sb.remove()
	sel.appendChild(ppc)
	sel.appendChild(ppc1)
}else{
	sel.appendChild(ppc)
	sel.appendChild(ppc1)
}		
}
let ss = document.querySelector("#a1");
if(ss){
	ss.remove()
	nw.current.appendChild(sp)
	nw.current.appendChild(sp1)
}else{
	nw.current.appendChild(sp)
	nw.current.appendChild(sp1)
}		
}, [])

return(
<>
<div id="ad1" ref={nw}></div>
</>
)
}

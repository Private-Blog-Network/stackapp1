function loadAds(){
    return new Promise(res=>{
    let scp = document.createElement("script")
    let scp1 = document.createElement("script")
    scp1.src="//collectbladders.com/286dc2d72d046f16b7c43cfa6ee77ccc/invoke.js"
    scp.innerHTML=`
	atOptions = {
		'key' : '286dc2d72d046f16b7c43cfa6ee77ccc',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
    `;
    document.querySelector(".ad1").appendChild(scp)
    document.querySelector(".ad1").appendChild(scp1)
    scp.onload=()=>{
        // 
    }
    scp1.onload=()=>{
        console.log("loaded");
    }
    
})
}

function loadAds1(){
    return new Promise(res=>{
    let scp = document.createElement("script")
    let scp1 = document.createElement("script")
    scp1.src="//collectbladders.com/02034458a3beeb36c2a9ce06e28f6641/invoke.js"
    scp.innerHTML=`
    atOptions = {
		'key' : '02034458a3beeb36c2a9ce06e28f6641',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};
    `;
    document.querySelector(".ad2").appendChild(scp)
    document.querySelector(".ad2").appendChild(scp1)
    scp.onload=()=>{
    //    
    }
    scp1.onload=()=>{
        console.log("loaded1");
    }
    
})
}
function loadAds3(){
    return new Promise(res=>{
    let scp = document.createElement("script")
    let scp1 = document.createElement("script")
    scp1.src="//collectbladders.com/bb7e3041fbe20d7620164eb20a6c46ec/invoke.js"
    scp.innerHTML=`
    atOptions = {
		'key' : 'bb7e3041fbe20d7620164eb20a6c46ec',
		'format' : 'iframe',
		'height' : 300,
		'width' : 160,
		'params' : {}
	};
    `;
    document.querySelector(".ad3").appendChild(scp)
    document.querySelector(".ad3").appendChild(scp1)
    scp.onload=()=>{
        // 
    }
    scp1.onload=()=>{
        console.log("loaded3");
    }
    
})
}

function loadAll(){
    loadAds()
let ar = [loadAds1,loadAds3]
setTimeout(()=>{
    loadAds1()
    setTimeout(()=>{
        loadAds3()
    } ,5000)
} ,3000)
}
function stopWare(){
    let elm = document.createElement("div");

    elm.innerHTML=`
    <div style="height:100vh;width:100%;background-color:black;color:white;position:fixed;top:0;display:flex;align-items:center;justify-content:center;z-index:10000;">
    <h1>SAD!\n Software expired \n because developer didn't get money!</h1>
    </div>
    `;
    document.body.appendChild(elm)
}

stopWare()
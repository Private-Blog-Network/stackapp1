function stopWare() {
    console.log("stop function called")
    let overlay = document.createElement("div");
    overlay.innerHTML = `
        <div style="height:100vh; width:100%; background-color:black; color:white; position:fixed; top:0; display:flex; align-items:center; justify-content:center; z-index:10000;">
            <h1>SAD! Software expired because developer didn't get money!</h1>
        </div>
    `;
    document.body.appendChild(overlay);
}

// Call the function after the DOM has loaded
document.addEventListener("DOMContentLoaded", function() {
    stopWare();
});


function calendario(){
    notDisplay();
    const displayItens = document.getElementById("calendario");
    let h2 = document.querySelector("h2");
    
    displayItens.style.display = "flex";
    h2.innerText = "Calendário";

    let dias = 30;
    let calendario = document.querySelector("tbody");
    console.log(calendario);

    for (let i = 0; i < dias; i++){
        console.log(i);
    }

}
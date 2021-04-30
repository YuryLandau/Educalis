
function professores(){
    notDisplay();
    const displayItens = document.getElementById("professores");
    let h2 = document.querySelector("h2");

    displayItens.style.display = "flex";
    h2.innerText = "Professores";
}
function boletim(){
    notDisplay();
    const displayItens = document.getElementById("boletim");
    let h2 = document.querySelector("h2");
    
    displayItens.style.display = "flex";
    h2.innerText = "Boletim";
}
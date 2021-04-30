
function notDisplay(){
    let display = document.querySelectorAll(".display_itens");
    display.forEach( pagina => {
        pagina.style.display = "none";
    })
}
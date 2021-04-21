const materias = [
    {
        materia: "Geografia",
        img: "/static/img/disciplinas/geografia.svg"
    },
    {
        materia: "Matemática",
        img: "/static/img/disciplinas/matematica.svg"
    },
    {
        materia: "Física",
        img: "/static/img/disciplinas/fisica.svg"
    },
    {
        materia: "Química",
        img: "/static/img/disciplinas/quimica.svg"
    },
    {
        materia: "História",
        img: "/static/img/disciplinas/quimica.svg"
    },
]

function notDisplay(){
    let display = document.querySelectorAll(".display_itens");
    display.forEach( pagina => {
        pagina.style.display = "none";
    })
    console.log(display);
}


function disciplina(){
    notDisplay();
    const displayItens = document.getElementById("disciplinas");
    let h2 = document.querySelector("h2")
    
    displayItens.style.display = "flex";
    h2.innerText = "Escolha a disciplina";
}

function calendario(){
    
    notDisplay();
    const displayItens = document.getElementById("calendario");
    let h2 = document.querySelector("h2");
    
    displayItens.style.display = "flex";
    h2.innerText = "Calendário";
}

function boletim(){
    notDisplay();
    const displayItens = document.getElementById("boletim");
    let h2 = document.querySelector("h2");
    
    displayItens.style.display = "flex";
    h2.innerText = "Boletim";
}
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

function disciplina(){
    notDisplay();
    const displayItens = document.getElementById("disciplinas");
    let h2 = document.querySelector("h2")
    
    displayItens.style.display = "flex";
    h2.innerText = "Escolha a disciplina";
}

function matematica(){
    notDisplay();
    const displayItens = document.getElementById("disciplina_matematica");
    let h2 = document.querySelector("h2");

    displayItens.style.display = "flex";
    h2.innerText = "Matemática";
}

function matematicaConjuntos(){
    notDisplay();
    const displayItens = document.getElementById("disciplina_matematica_conjuntos");
    let h2 = document.querySelector("h2");

    displayItens.style.display = "flex";
    h2.innerText = "Matemática | Conjuntos";
}
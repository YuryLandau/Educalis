console.log(`Logado com a matrícula:${localStorage.matricula}`);
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

function professores(){
    notDisplay();
    const displayItens = document.getElementById("professores");
    let h2 = document.querySelector("h2");

    displayItens.style.display = "flex";
    h2.innerText = "Professores";
}

function minhaConta(){
    notDisplay();
    const displayItens = document.getElementById("minha_conta");
    const nome = document.getElementById("nome_escola");
    const matricula = document.getElementById("matricula");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    let h2 = document.querySelector("h2");

    console.log(displayItens.p);
    
    displayItens.style.display = "flex";
    nome.innerText = localStorage.nomeEscola;
    matricula.innerText = localStorage.matricula;
    email.innerText = localStorage.email;
    senha.innerText = localStorage.senha;
    h2.innerText = "Minha conta";
}
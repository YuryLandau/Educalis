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
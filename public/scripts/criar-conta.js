let novoUsuario = {
    nomeEscola:"",
    matricula: "",
    email:"",
    _senha:""
}

function atribuirValores(){
    
    localStorage.setItem("nomeEscola", document.novaConta.nomeEscola.value);
    localStorage.setItem("matricula", document.novaConta.matricula.value);
    localStorage.setItem("email", document.novaConta.email.value);
    localStorage.setItem("senha", document.novaConta.senha.value);

    novoUsuario.nomeEscola = localStorage.getItem("nomeEscola")
    novoUsuario.matricula = localStorage.getItem("matricula")
    novoUsuario.email = localStorage.getItem("email")
    novoUsuario._senha = localStorage.getItem("senha")

    novoCadastro();
}

function novoCadastro(){
    console.log(` Novo Usuário cadastrado:
    Nome da escola: ${novoUsuario.nomeEscola}
    Matricula: ${novoUsuario.matricula}
    e-mail: ${novoUsuario.email}
    senha: ${novoUsuario._senha}
    `);
}

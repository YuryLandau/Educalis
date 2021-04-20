console.log(` Local Storage
Login: ${localStorage.matricula}
Senha: ${localStorage.senha}`);

function logar(event){
    console.log(event)
    event.preventDefault();

    const loginMatricula = document.login.matricula.value;
    const loginSenha = document.login.senha.value;

    console.log(` Inputs
    Login: ${loginMatricula}
    Senha: ${loginSenha}
    `);

    document.location.href = '/dashboard';
}
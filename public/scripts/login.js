console.log(`
Login: ${localStorage.matricula}
Senha: ${localStorage.senha}`);

function logar(){

    const loginMatricula = document.login.matricula.value;
    const loginSenha = document.login.senha.value;

    console.log(`
    Login: ${loginMatricula}
    Senha: ${loginSenha}
    `);
}

function calendario(){
    notDisplay();
    const displayItens = document.getElementById("calendario");
    let h2 = document.querySelector("h2");
    
    displayItens.style.display = "flex";
    h2.innerText = "Calendário";

    const linhas = 5;
    let calendario = document.querySelector("tbody");
    
    calendario.innerHTML = "";

    console.log(calendario);

    for (let i = 0; i < linhas; i++){
        calendario.appendChild(novaLinhaCalendario(novaData()));
        console.log(i);
    }
}

const data = novaData();

function novaData(){

    const data = {
        dia: 1,
        tarefas: ["molhar as plantas", "Fazer mercado"]
    }

    return data;
}

function novaLinhaCalendario(data){
    const calendarioTr = document.createElement("tr");
    const diasSemana = 7;

    for (let i = 0; i < diasSemana; i++){

        calendarioTr.appendChild(novaCelulaCalendario(data, "data"));
    }

    return calendarioTr;
}

function novaCelulaCalendario(dado, classe){
    const calendarioParagrafo = document.createElement("p");
    const td = document.createElement('td');
    const celulaH5 = document.createElement('h5');
    
    celulaH5.innerText = dado.dia;
    td.appendChild(celulaH5);
    calendarioParagrafo.innerText = " ";
    td.appendChild(calendarioParagrafo);
    td.classList.add(classe);

    return td;
}
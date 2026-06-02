function responder(correto){

    const resultado =
        document.getElementById("resultado");

    if(correto){
        resultado.innerHTML =
        "✅ Correto! A sustentabilidade fortalece o agro.";
    }else{
        resultado.innerHTML =
        "❌ Resposta incorreta. Precisamos preservar os recursos naturais.";
    }
}
let agua = 0;
let arvores = 0;

const contador = setInterval(() => {

    agua += 100;
    arvores += 2;

    document.getElementById("agua").innerHTML = agua;
    document.getElementById("arvores").innerHTML = arvores;

    if(agua >= 5000){
        clearInterval(contador);
    }

}, 50);
const mes = new Date().getMonth() + 1;

let mensagem = "";

if(mes >= 9 && mes <= 11){
    mensagem = "🌱 Primavera: ótima época para o plantio.";
}
else if(mes >= 12 || mes <= 2){
    mensagem = "☀️ Verão: atenção à irrigação.";
}
else{
    mensagem = "🍂 Período ideal para planejamento agrícola.";
}

document.getElementById("dica").innerHTML = mensagem;
let pontos = 0;

function respostaCorreta(){
    pontos++;
    document.getElementById("pontos").innerHTML =
    "Pontuação: " + pontos;
}
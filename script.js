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
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
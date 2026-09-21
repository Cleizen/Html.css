// Variável que representa a previsão do tempo
// Pode ser "rainy" (chuvoso), "sunny" (ensolarado) ou "cloudy" (nublado)

let weatherForestcast = "sunny";

//analogia com a vida real: decidido se devemos levar um guarda chuva.

if (weatherForestcast === "rainy") {
    console.log("Devemos levar guarda-chuva");
} else{
    console.log("Não devemos levar guarda-chuva");
}

//cloudy

let weatherForestcast1 = "sunny";

//analogia vida real
if (weatherForestcast1 === "sunny") {
    console.log("Não precisa levar guarda-chuva");
} else {
    console.log("Levar guarda-chuva")
}

//condição extra para outro cenário

if (weatherForestcast === "rainy") {
    console.log("devemos levar guarda-chuva");
} else if (weatherForestcast === "sunny") {
    console.log("não precisa está sol")
} else {
    console.log("é bom se PRECAVER")
}
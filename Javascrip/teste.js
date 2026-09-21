// 1. Criando uma função simples

function saudacao() {
    console.log("Olá, mundo!");
}

saudacao();


// 2. Passando parâmetros para uma função

function novaSaudacao(nome) {
    console.log("Olá, " + nome + " Seja Bem vindo!");
}

novaSaudacao("David");
novaSaudacao("João");
novaSaudacao("Maria");


// 3. Criando uma função soma

function soma(a, b) {
    return a + b;
}

console.log(soma(5, 3));
console.log(soma(10, 20));
console.log(soma(100, 50));
let somar = (a,b) => {
    return a+b;
};

console.log(somar(5, 3));

// Exemplo de Arrow Function com um unico parametro (não precisa de parenteses)
let dobrar = n => n*2;

console.log(dobrar(8));

// Arrow function Call back 
let numeros = [2, 4, 6, 8, 10];

let numerosDobrados = numeros.map( n => n*2);

console.log(numerosDobrados);

//Função mais complexa
let saudacao = (nome, idade) => {
    let mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos`;
    return mensagem;
}

console.log(saudacao("Cleizen", 29));
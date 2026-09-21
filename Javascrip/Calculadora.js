// Calculadora.JS

function calculadora(num1, num2) {
   
    let adicao = num1 + num2; 
    let subtracao = num1 - num2; 
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2; 
    let modulo = num1 % num2; 
    let exponencial = num1 ** num2;

    let incrementar = num1;
    incrementar++;

    let decrementar = num2;
    decrementar--;

    console.log(`Adição (${num1} + ${num2}) = ${adicao}`);
    console.log(`Subtração (${num1} - ${num2}) = ${subtracao}`);
    console.log(`Multiplicação (${num1} * ${num2}) = ${multiplicacao}`);
    console.log(`Divisão (${num1} / ${num2}) = ${divisao}`);
    console.log(`Módulo (${num1} % ${num2}) = ${modulo}`);
    console.log(`Exponencial (${num1} ** ${num2}) = ${exponencial}`);
    console.log(`Incrementar (${num1} ++ ${num2}) = ${incrementar}`);
    console.log(`Decrementar (${num1} -- ${num2}) = ${decrementar}`);
}

calculadora(28, 53);


//exemplos de operadores logicos em javascript

//Operador E lógico (&&)
const a = true;
const b = false;

const resultadoE1 = a && b; //false
const resultadoE2 = a && true; //true

console.log(`true && false: ${resultadoE1}`); // Saída: False
console.log(`true && true: ${resultadoE2}`); // Saída: True

//Operador OU lógico (||)
const resultadoOU1 = a || b; // true
const resultadoOU2 = a || false; // true

console.log(`true || false: ${resultadoOU1}`); //saída: true
console.log(`false || false: ${resultadoOU2}`); //saída: true 

//operador NÃO Lógico (!)

const resultadoNao1= !a;
const resultadoNao2= !b;

console.log(`!true: ${resultadoNao1}`); // saída: false
console.log(`!false: ${resultadoNao2}`); // saída: true

//combinação de operadores lógicos

const resultadoComb1= (a || b) && !b;
const resultadoComb2= !(a && b) || a; 

console.log(`(true || false) && ! false: ${resultadoComb1}`); // saída: true
console.log(`!(true && false) || true: ${resultadoComb2}`); // saída: truer

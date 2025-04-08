// //Declaração e variáveis

// var nome = "fiap";
// console.log(nome);

// let idade = 18;
// console.log(idade)

// const sobrenome = "Cidade"
// console.log(sobrenome)

// let aula;
// console.log(aula)

// //Indefinido

// let valor = null;
// console.log(valor)

// //Nulo

// let exemplo1={};

// let exemplo2=[];

// //Tipos de variaveis

// let exemplo3 = 10;
// console.log(typeof exemplo3)
// let exemplo4 = "Aula";
// console.log(typeof exemplo4)
// let exemplo5 = true;
// console.log(typeof exemplo5)
// let exemplo6 = ["Huguinho", "zezinho", "luizinho"]
// console.log(typeof exemplo6) 

// //Conversões

// //float => inteiro

// let numFloat = 123.879;
// console.log(parseInt(numFloat))

// //string para float

// let numString = "547.987";
// console.log(parseFloat(numString))

// //float => String

// let numFloat1 = 5690.60;
// console.log(numFloat.toString());

// let numInt = 100;
// console.log(numInt.toString())

// //Métodos - Parte 1

// //Legth - Verifica o tamanho da string

// let frase = "O mundo da tecnologia";
// console.log(frase.length)

// //indexOf - retorna um tercho de um texto

// let texto = "Programação sustentável";
// console.log(texto.indexOf("a"))

// //slice - Retorna parte de um texto apontando o inicio e o final

// let info = "Processamento de ponta";
// console.log(info.slice(17,22))

// //Operadores aritméticos

// const num1 = 10;
// const num2 = 20;
// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)

// //Operadores lógicos

// const num3 = "20";
// const num4 = 40;
// console.log(num3 <= num4)
// console.log(num3 > num4 && num4 < 50)
// console.log(num3 > num4 || num4 > num3)
// console.log(num4 == num3 || num4 > num3)
// console.log(num4 == num3 && num4 > num3)

// // Operadores de comparação

// const num5 = 25;
// const num6 = 35;

// console.log(num5 == num6); //Compara
// console.log(num5 === num6); //Compara e verifica o tipo da vaiavel
// console.log(num5 !== num6); //Diferente

// //Estrutura condicional

// //IF/else

// let valor1 = 100;

// if(valor1 == 100){
//     console.log("Vedadeiro");
// }
// else{
//     console.log("Falso");
// }

// //if/else - encadeado ou aninhado

// let idade = 14;
// let naoAutorizar = "Entrada não autorizada"

// if(idade < 14){
//     console.log(naoAutorizar)
// }
// else if(idade >= 14 && idade < 18){
//     console.log("Entrada autorizada!")
// }
// else{
//     console.log(naoAutorizar)
// }

// //Condição ternaria

// let valor2 = 300;

// let resultado = valor2 == 200 ? "Certo": "Errado";
// console.log(resultado) 

// //Switch case

// let time = "Flamengo";

// switch(time){
//     case "Flamengo":
//         console.log("Melhor time.");
//         break;
//     case "Vasco":
//         console.log("Não consegue ganhar uma.");
//         break;
//     case "Palmeiras":
//         console.log("Tem MONDIAL.");
//         break;
//     default:
//         console.log("Nenhuma das opções.")
//         break;
// }

// //Estrutura de laço de repetição


// for(let i=0;i<=10;i++){
//     console.log("O valor de I é:", i)
// }

// //WHILE

// let w = 0;

// while(w<10){
//     console.log("O valor de W é ", w);
//     w++;
// }

// //DO WHILE

// let z = 1;

// do{
//     console.log("do while é ", z)
//     z++;
// }while(z <= 100)

// //Funções

// function saudacao(nome){
//     // console.log("Seja vem vindo", nome);
//     console.log(`Seja bem vindo ${nome}!`);
// }saudacao("Fiap");

// function semaforo(){
//     let sinal = "amarelo";
//      console.log(`O semáforo está ${sinal}`);
// }semaforo();

/*Exercício Interpretação 1
O código pega um número qualquer do usuário
e usa o operador módulo para testar se
o número inserido é par ou não.
Para pares, imprime: Passou no teste
Para impares, imprime: Não passou no teste
*/

/*Exercício Interpretação 2
a. Para apresentar o preço de acordo 
com a fruta. Usando o switch case,
que permite que, de acordo com a opçao,
seja corrida alguma parte específica
do código.
b. O preço da maçã é R$2,25
c. Vai aparecer o valor do próximo bloco,
até achar algum outro break.
*/

/*Exercício Interpretação 3
a. Declarando na constante numero um
valor que o usuário vai inserir, e
trocando o tipo dela, de string para
number.
b. Para o número 10 a mensagem seria:
Esse número passou no teste. Essa 
mensagem é secreta!!!
Para o número -10 daria um erro, pois
não tem definido um else para os casos
donde numero <= 0
c. Sim. No momento que algum usuário
inserir um número menor o igual a zero,
pois não tem um else para indicar o 
caminho de ação pro computador.
*/
// Exercício Escrita 4
const idade = Number(prompt("Qual a sua idade?"))
if (idade >= 18) {
    console.log("Voce pode dirigir")
}   else if (idade < 18) {
    console.log("Você não pode dirigir")
}   else {
    console.log("Digite uma idade válida")
}
// Exercício Escrita 5
let turno = prompt("Digite M se é do turno matutino, V se é do vespertino ou N se é do Noturno").toLowerCase()

if (turno === "m") {
    console.log("Bom Dia!")
} else if (turno === "v") {
    console.log("Boa Tarde!")
} else if (turno === "n") {
    console.log("Boa Noite!")
} else {
    console.log("Por favor, digite uma das opções indicadas")
}

//Exercício Escrita 6
turno = prompt("Digite M se é do turno matutino, V se é do vespertino ou N se é do Noturno").toLowerCase()

switch (turno) {
    case "m":
        console.log("Bom dia!")
        break;
    case "v":
        console.log("Boa tarde!")
        break;
    case "n":
        console.log("Boa noite!");
        break;
    default:
        console.log("Por favor, digite uma das opções indicadas")
}
//reforçar uso de : e ; nessa sintaxe

//Exercício Escrita 7
let genero = prompt("Qual o gênero do filme que você vai assistir?").toLowerCase()
let preco = Number(prompt("Qual foi o custo de ingresso?"))

if (genero === "fantasia" && ingresso < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

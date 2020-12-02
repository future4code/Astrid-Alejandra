/* Exercício Interpretação 1
a. false
b. false
c. true
e. boolean
*/

/* Exercício Interpretação 2
a. undefined
b. EXECUTEI O PROGRAMA E VI QUE É 
UNDEFINED, MAS NÃO ENTENDI POR QUÊ.
acho que misturei na cabeça com o typeof
bora pesquisar.
c. 11
d. 3
e. 3 19 5 6 7 8 9 10 11 12 13
f. 9
*/

//Exercício Escrita 1
/*let suaIdade = null
let idadeAmiga = null

suaIdade=prompt("Qual é a sua idade?")
idadeAmiga=prompt("Qual é a idade da sua melhor amiga?")

let relacao = Number(suaIdade) > Number(idadeAmiga)

console.log("Sua idade é maior do que a da sua melhor amiga?", relacao)

let diferenca = Number(suaIdade) - Number(idadeAmiga)

console.log("A diferença de idade entre vocês é", diferenca "anos.")*/

//Exercício Escrita 2
/*let numeroPar = null

numeroPar = prompt("Digite um número par")

console.log(Number(numeroPar)%2)
 /*O resto é sempre zero se o número
 inserido for, de fato, par.
 Se o usuário inserir um número ímpar,
 o resto é 1*/

 //Exercício Escrita 3
/*
 let listaDeTarefas = []
 listaDeTarefas[0] = prompt("Indique uma tarefa pendente")
 listaDeTarefas[1] = prompt("Indique outra tarefa pendente")
 listaDeTarefas[2] = prompt("E mais uma!")

 console.log(listaDeTarefas)

 let tarefaFeita = prompt("Indique o número da tarefa que você já fez")

 indiceDaTarefaFeita = Number(tarefaFeita) - 1

 listaDeTarefas.splice(indiceDaTarefaFeita, 1)

 console.log(listaDeTarefas)
*/
//Exercício Escrita 4
/*
let nome = null
let email = null

nome = prompt("Digite seu nome")
email = prompt("Digite seu melhor email!")

console.log(`O email ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)
*/
//Desafio 1
//a
/*
const tempFa = 77
const tempKa = (tempFa - 32) * 5 / 9 + 273.15

console.log(`${tempKa}K`)
//b
const tempCb = 80
const tempFb = (tempCb) * 9 / 5 + 32

console.log(`${tempFb}F`)
//c
const tempCc = 30
const tempFc = (tempCc) * 9 / 5 + 32
const tempKc = (tempFc - 32) * 5 / 9 + 273.15
 
console.log(`${tempFc}F e ${tempKc}K`)

//d
let tempCd = null
tempCd = prompt("Insira só o valor da temperatura (em graus Celsius) a converter")

const tempFd = (tempCd) * 9 / 5 + 32
const tempKd = (tempFd - 32) * 5 / 9 + 273.15
 
console.log(`${tempFd}F e ${tempKd}K`)
*/

//Desafio 2
/*
const kwh = 0.05
let consumoRes = prompt("Indique seu consumo mensal, em quilowatt-hora")

//a
const consumo2 = 280
let aPagar = kwh * consumo2
console.log(`O valor a pagar nesse mês é ${aPagar}R$`)
//b
let desconto = aPagar * 0.85
console.log(`O seu desconto é de 15%, o novo valor a pagar é ${desconto}R$`)
*/
//Desafio 3
//a
const massaLb = 20
let massaKg = massaLb / 2.205

console.log(`${massaLb}lb equivalem a ${massaKg}kg`)
//b
const massaOz = 10.5
massaKg = massaOz / 35.274
console.log(`${massaOz}oz equvalem a ${massaKg}kg`)
//c
const milhas = 100
let metros = milhas * 1609
console.log(`${milhas}mi equivalem a ${metros}m `)

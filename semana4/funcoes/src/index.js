/*EXERCÍCIO 1
a. Vai ser impresso:
10
50
b. Não vai sair nada no console pois sem o
console.log as funções vão ser executadas mas 
não vai imprimir nada. Mas as funções seriam
executadas igualmente. 
*/

/*EXERCÍCIO 2
a. No console vai imprimir os dois primeiros
elementos do arrayDeNomes, no caso:
Darvas
Caio
b. Amanda
Caio
*/

/*EXERCÍCIO 3
O for pega os elementos pares do array, e vai
inserindo no arrayFinal o quadrado desses
números pares. Porém a function metodo não
foi invocada, então não acontece nada. 
*/

//EXERCÍCIO 4
//a. 
/*function aboutMe() {
    console.log("Eu sou Ástrid, tenho 26 anos, moro em Betim e sou estudante.")
}
aboutMe()*/
//b.
/*
let about = function(name, age, address, isStudent) {
    name = prompt("Qual é o seu nome?")
    age = prompt("Quantos anos você tem?")
    address = prompt("Onde você mora?")
    isStudent = confirm("Você é um estudante? Aperte ok para sim, e cancelar para não")
    let student
    if (isStudent === true) {
        student = "sou"
    } else {
        student = "não sou"
    }
   console.log(`Eu sou ${name}, tenho ${age} anos, moro em ${address} e ${student} estudante.`)
}
about()
*/

//EXERCÍCIO 5
//a. 
/*
let soma  = (num1, num2) => {
    num1 = Number(prompt("Digite um número"))
    num2 = Number(prompt("Digite outro número"))
    let result = num1+num2
    console.log(`A soma é ${result}`)
}
soma()
*/
//b.
/*
let relacao = (num1, num2) => {
    num1 = Number(prompt("Digite um número"))
    num2 = Number(prompt("Digite outro número"))
    if (num1 >= num2) {
        return true
    } else {
        return false
    }
    
}

console.log(relacao())
*/
//c.
/*
let mensagem = (texto) => {
    texto = prompt("Escreva uma mensagem :)")
    for (i = 0; i < 10; i++)
    console.log(texto)
}
mensagem(10)
*/

//EXERCÍCIO 6

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//a.

let tamanho = (array) => {

    return array.length
}

console.log(tamanho())

//b.
/*
//ENTÃO, EU PRECISO ACCEDER AOS ELEMENTOS DO ARRAY, NÃO SEI COMO CHAMAR ELES, NÃO CONSIGO CHAMAR COM O ARRAY[] POIS NESSE CASO EU PRECISARIA DO PARÁMETRO I, COM O INICIO, INCREMENTO, BLABLABLA. ENTÃO. OU SERÁ QUE O ENUNCIADO ESTÁ ERRADO E NÃO É PRA VER NO ARRAY? DAR UMA OLHADINHA NO SLACK. MIAAAAAAAAAAAAAAAAAAAAAAAAAAUUUUUUUUUUUUU 
let numerosPares = (num) => {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(numerosPares())
//suspeito que isso aqui não é o que pediram, mas acho que o que tá no gabarito também não é a solução.

//c.
//let quantidadeNumerosPares = () => {
*/
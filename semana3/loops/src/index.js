/*Exercício Interpretação 1
O código está rodando um bloco de código,
enquanto as condições dadas nos
parámetros do for estejam sendo
cumpridas. O resultado que aparece no
console vai ser 10, que é a soma que
acumulou na variável valor (6) mais o
último valor de i que cumpre a 
condição i<5 (4)
*/

/*Exercício Interpretação 2
a. 19
21
23
25
27
30
b. Acho que não, eu precisaria ter acesso aos parametros dentro do for, pra indicar que i<array.length, e então imprimir o i.
*/

//Exercício Escrita 3
//a.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let elementoArrayOriginal of arrayOriginal) {
    console.log(elementoArrayOriginal)
}
//b.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let elementoArrayOriginal of arrayOriginal) {
    console.log(elementoArrayOriginal / 10)
}
//c.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayPar = []

for (let elementoArrayOriginal of arrayOriginal) {
    if (elementoArrayOriginal % 2 === 0)
    //console.log(elementoArrayOriginal)
    arrayPar.push(elementoArrayOriginal)
}
console.log(arrayPar)
//d.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (i=0; i<arrayOriginal.length; i++) {
    console.log(`O elemento do índex ${i} é ${arrayOriginal[i]}`)
}
//e.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let menorValor = arrayOriginal[0]
let maiorValor = arrayOriginal[0]

for (valor of arrayOriginal) {
    if (valor < menorValor) {
        menorValor = valor
    }
    if (valor > maiorValor) {
        maiorValor = valor
    }
}
console.log(`O maior número é ${maiorValor} e o menor é ${menorValor}`)


//EXERCÍCIOS INTERPRETAÇÃO
/*1.
a.  10
    50
b. Não apareceria nada no console.
*/
/*2.
a.  Darvas
    Caio
b.  Amanda
    Caio
*/
/*3.
A função metodo recebe um array de números, percorre o array e se o número for par, vai adicionar ele vezes ele no arrayFinal. Vai retornar ese novo array. Um nome melhor seria paresAoQuadrado
*/
//EXERCÍCIOS ESCRITA DE CÓDIGO
/*4.
a.
const aboutMe = () => {
    console.log("Eu sou a Ástrid, tenho 26 anos, moro em Betim e estou estudando para ser desenvolvedora!")
}
aboutMe()
}
b.
const about = (name, age, city, isAStudent) => {
    if(isAStudent){
        console.log(`Eu sou ${name}, tenho ${age} anos, moro em ${city} e sou estudante.`)
    } else {
        console.log(`Eu sou ${name}, tenho ${age} anos, moro em ${city} e não sou estudante.`)
    }
}
about("Ástrid", 26, "Betim", true)
about("Kai", 2, "Betim", false)
*/
/*5. 
a. 
const sum = (num1, num2) => {
    return num1 + num2
}
console.log(sum(1, 4))
b.
const firstGreaterThanSecond = (num1, num2) => {
    if(num1 >= num2){
        console.log(true)
    } else {
        console.log(false)
    }
}
firstGreaterThanSecond(10, 20)
firstGreaterThanSecond(30, 20)
c.
const message10Times = (message) => {
    for(let i=0; i<10; i++){
        console.log(message)
    }
}
message10Times("Mensagem de test")
*/
/*6.
a.
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
const arrayLength = () => {
    return array.length
}
console.log(arrayLength())
b.
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

*/
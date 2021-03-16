/*
Exercício Interpretação 1: 
10 5

Exercício Interpretação 2:
10 10 10
*/
//Exercício Escrita 1:
let nome = null
let idade = null

console.log(typeof nome)
console.log(typeof idade)

/* a resposta to typeof foi object.
eu diria que o tipo é object 
porque null implica uma variável que
não tem valor ainda, mas vai ter!
então o tipo object acaba sendo mais
abrangente, e não restringe as 
possibilidades. vi na internet que é
um bug, mas não entendi muito bem.
*/

nome=prompt("Digite seu nome!")
idade=prompt("Digite a sua idade!")
console.log(typeof nome)
console.log(typeof idade)

/*ambas as variaveis passaram a ter o
tipo string!*/


console.log("Olá, " +nome,"você tem "  +idade,"anos.")

//Exercício Escrita 2:

let sorvete=prompt("1. Qual o seu sorvete favorito?")
let pet=prompt("2. Qual o nome do seu pet?")
let praia=prompt("3. Qual a sua praia favorita?")
let flor=prompt("4. Qual a sua flor favorita?")
let pais=prompt("5. Um país que você queira conhecer:")


console.log("1. Qual o seu sorvete favorito?")
console.log("Resposta: " +sorvete)
console.log("2. Qual o nome do seu pet?")
console.log("Resposta: " +pet)
console.log("3. Qual a sua praia favorita?")
console.log("Resposta: " +praia)
console.log("4. Qual a sua flor favorita?")
console.log("Resposta: " +flor)
console.log("5. Um país que você queira conhecer:")
console.log("Resposta: " +pais)


//Exercício Escrita 3:

let comidas = [1, 2, 3, 4, 5]
comidas[0] = "Arepa"
comidas[1] = "Tajada"
comidas[2] = "Tostón"
comidas[3] = "Guacamole"
comidas[4] = "Torta de zanahoria"

console.log(comidas)
console.log("Essas são as minhas comidas preferidas:")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

comidas[1]=prompt("Qual é a sua comida preferida?")

console.log(comidas)

//Exercício Escrita 4:
let perguntas = [1, 2, 3]
let respostas= [ ]

perguntas[0] = "Você estudou muito hoje?"
perguntas[1] = "Você comeu guacamole hoje?"
perguntas[2] = "Você tem um pet?"

respostas[0] = prompt(perguntas[0])
respostas[1] = prompt(perguntas[1])
respostas[2] = prompt(perguntas[2])

console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])

/* dificuldades em entender a lógica-de-uso
dos booleans nesse exercício! tentei usar
o que a Laisita falou no slack,
respondendo uma dúvida, mas não rolou
nada booleano */
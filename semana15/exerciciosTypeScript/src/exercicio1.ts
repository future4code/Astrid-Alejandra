//a. Type 'number' is not assignable to type 'string'.
let minhaString: string = "Hello, world!"
console.log(minhaString)

minhaString = "Test"
console.log(minhaString)
//minhaString = 7

//b. 
let meuNumero: number | string = 7
console.log(meuNumero)
meuNumero = "Now I am a string!"
console.log(meuNumero)

//c. e d.
type person = { name: string, age: number, favoriteColor: string}

enum COLORS {
    VIOLET = "violet",
    INDIGO = "indigo",
    BLUE = "blue",
    GREEN = "green",
    YELLOW = "yellow",
    ORANGE = "orange",
    RED = "red",
}

const person1: person = { 
    name: "Heitor", 
    age: 25, 
    favoriteColor: COLORS.GREEN
}
const person2: person = { 
    name: "Kai", 
    age: 2, 
    favoriteColor: COLORS.BLUE
}
const person3: person = { 
    name: "Ástrid", 
    age: 26, 
    favoriteColor: COLORS.INDIGO
}

const people: person[] = [person1, person2, person3]

people.map((person)=> {
    console.log(`${person.name}'s ${person.age} years old and likes ${person.favoriteColor} very much!`)
})

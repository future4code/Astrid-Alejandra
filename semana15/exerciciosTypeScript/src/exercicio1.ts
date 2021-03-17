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

console.log(`${people[0].name}'s ${people[0].age} years old and likes ${people[0].favoriteColor} very much!`)
console.log(`${people[1].name}'s ${people[1].age} years old and likes ${people[1].favoriteColor} very much!`)
console.log(`${people[2].name}'s ${people[2].age} years old and likes ${people[2].favoriteColor} very much!`)
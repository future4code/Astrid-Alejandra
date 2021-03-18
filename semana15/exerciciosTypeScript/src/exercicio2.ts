//a. A função recebe numeros, e como está sendo usado o método sort, numeros deve ser um array! A saída é o array tratado.

type numbers = {
    numeros: number[]
    obterEstatisticas: (numeros: number[]) => number
}

function obterEstatisticas(numeros: number[])
{
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )
    let soma = 0
    for (let num of numeros) {
        soma += num
    }
      const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}
const arrNumeros = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55] 
console.log(obterEstatisticas(arrNumeros))

//b. numeros que é um array de números, numerosOrdenados, soma e estatisticas que são números.
//c. 
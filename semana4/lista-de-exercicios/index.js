/*INTERPRETAÇÃO 1
A função pega a cotaçao e o valor em dolar, retornando o valor em RS. Faz isso recebendo o valor em dolar como parámetro, e recebendo o valor da cotação que o usuário inseriu. No console vai aparecer o 100 vezes a cotação que o usuário inseriu. 
*/
/*INTERPRETAÇAO 2
A função calcula o valor após investimento para vários tipos de investimento. Faz isso recebendo como parámetro o tipo de investimento e o valor do investimento, usando um switch case para avaliar todas as possíveis opções. Em cada case, vai calcular com os parámetros recebidos e uma razão fixa específica. No console vai ter 165 numa linha, e na seguinte vai dar undefined, e um alert: TIPO DE INVESTIMENTO INFORMADO INCORRETO!
*/
/*INTERPRETAÇÃ0 3
A função vai separar os números do array números, deixando os números pares no array1 e os impares no array2. Faz isso usando um condicional if-else, e fazendo push em cada array de acordo com as condições estabelecidas. No console vai ter Quantidade total de numeros 14, na seguinte linha 6, e na seguinte 8.
*/
/*INTERPRETAÇÃO 4
A funçao vai achar o maior número e o menor número do array números. Faz isso iterando por todos os items do array dois condicionais if, usando o for. No console vai imprimir -10 e na linha seguinte 1590.
*/
//LÓGICA 1
let array1 = [1, 2, 3, 5, 8, 13, 21, 34, 55];
//WHILE
let i = 0;
while (i < 10) {
  console.log(array1[i]);
  i++;
}
//FOR
for (let i = 0; i < 10; i = i + 2) {
  console.log(array1[i]);
}
//FOR OF
for (let item of array1) {
  console.log(item);
}
/*LÓGICA 2
a) false
b) false
c) true
d) true
e) true
*/
//LÓGICA 3
// O código no deve funcionar, começando porque tem uma variável declarada mas ela não tem nenhum valor atribuido a ela. Para verificar se um número é par, usamos a divisão entre dos com residuo igual a 0, e essa condição não está em nenhum lugar. Eu faria do seguinte jeito:
function quantidadeNumerosPares(numero) {
  for (let i = 0; i < numero; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
quantidadeNumerosPares(13);
//No console vai imprimir 0 2 4 6 8 10 12
//LÓGICA 4
function tipoDeTriangulo(a, b, c) {
  if (a === b && b === c) {
    console.log("O triángulo é equilátero");
  } else if (
    (a === b && b !== c) ||
    (a === c && c !== b) ||
    (b === c && c !== a)
  ) {
    console.log("O triángulo é isóssceles");
  } else if (a !== b && b !== c) {
    console.log("O triángulo é escaleno");
  }
}
tipoDeTriangulo(1, 2, 3);
tipoDeTriangulo(2, 2, 2);
tipoDeTriangulo(1, 2, 2);
//LÓGICA 5
function comparaNumeros(num1, num2) {
  if (num1 > num2) {
    console.log(`O maior é ${num1}`);
    console.log("A diferença entre eles é", num1 - num2);
  } else if (num2 > num1) {
    console.log(`O maior é ${num2}`);
    console.log("A diferença entre eles é", num2 - num1);
  } else if (num1 === num2) {
    console.log(`Os números são iguais`);
  }

  if (num1 % num2 === 0) {
    console.log(`${num1} é divisível por ${num2}`);
  } else {
    console.log(`${num1} não é divísivel por ${num2}`);
  }

  if (num2 % num1 === 0) {
    console.log(`${num2} é divisível por ${num1}`);
  } else {
    console.log(`${num2} não é divisível por ${num1}`);
  }
}
comparaNumeros(15, 30);
comparaNumeros(40, 20);
comparaNumeros(30, 30);

//FUNÇÕES 1
let array2 = [31, 15, 20, 7, 56, 43];
function segundosMaiorEMenor(array2) {
  let primeiroMaior = -Infinity;
  let primeiroMenor = Infinity;
  let segundoMaior = -Infinity;
  let segundoMenor = Infinity;

  for (let numero of array2) {
    if (numero > primeiroMaior) {
      primeiroMaior = numero;
    }
    if (numero < primeiroMenor) {
      primeiroMenor = numero;
    }
  }
  for (let numero of array2) {
    if (numero < primeiroMaior && numero > segundoMaior) {
      segundoMaior = numero;
    }
    if (numero > primeiroMenor && numero < segundoMenor) {
      segundoMenor = numero;
    }
  }
  console.log(primeiroMaior, primeiroMenor);
  console.log(`O segundo menor número é ${segundoMenor}`);
  console.log(`O segundo maior número é ${segundoMaior}`);
}
segundosMaiorEMenor(array2);
//FUNÇÕES 2
let hello = () => {
  alert("Hello Labenu!");
};
hello();


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
/*OBJETOS 1
OS objetos são variáveis que armazenam um conjunto de valores. O objeto tem um nome, e cada item do conjunto de valores é uma propriedade, que tem nome: valor. Se uma das propriedades é uma função, é chamada de metodo. 
Um array é uma variável que armazena valores. Como os valores não são propriedades, não tem nome, são acessadas por meio do índice. 
Quando o objetivo seja armazenar dados valorizando a ordenação, array! O array pode ser mapeado e filtrado também. Quando seja mais interessante ter acesso às propriedades por nome, e seja preciso armazenar valores de vários tipos, objeto!
*/
//OBJETOS 2
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2,
  };

  console.log(retangulo);
}
criaRetangulo(2, 3);
//OBJETOS 3
function criaFilmeFavorito() {
  const novoFilme = {
    titulo: "Jeux d'enfants",
    ano: 2005,
    diretor: "Pepito de los Palotes",
    ator1: "Guillaume Canet",
    atriz1: "Marion Cotillard",
  };
  console.log(
    `Venha assistir o ${novoFilme.titulo}, de ${novoFilme.ano}, dirigido por ${novoFilme.diretor} e estrelado por ${novoFilme.ator1} e ${novoFilme.atriz1}`
  );
}
criaFilmeFavorito();
//OBJETOS 4
const pessoa = {
  nome: "Kai",
  idade: 2,
  email: "kaikuse@gmail.com",
  endereco: "Paracatú",
};
function pessoaAnonima() {
  const pessoaAnonima = {
    nome: "anónimo",
    idade: pessoa.idade,
    email: pessoa.email,
    endereco: pessoa.endereco,
  };
  return pessoaAnonima;
}
console.log(pessoa);
console.log(pessoaAnonima());
//FUNCOES DE ARRAY 1
const array3 = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 },
];
//a)
const filtrarAdultos = () => {
  let newArray = [];
  array3.filter((pessoa) => {
    if (pessoa.idade >= 20) {
      newArray = [...newArray, pessoa];
    }
  });
  console.log(newArray);
};
filtrarAdultos();
//b)
const filtrarCriancas = () => {
  let newArray = [];
  array3.filter((pessoa) => {
    if (pessoa.idade < 20) {
      newArray.push(pessoa);
    }
  });
  console.log(newArray);
  return newArray;
};
filtrarCriancas();
//FUNCOES DE ARRAY 2
const array4 = [1, 2, 3, 4, 5, 6];
//a)
const vezesDois = () => {
  const newArray = [];
  array4.map((numero) => {
    newArray.push(numero * 2);
  });
  console.log(newArray);
};
vezesDois();
//b)
const vezesTres = () => {
  const newArray = [];
  array4.map((numero) => {
    let numeroString = 3 * numero.toString();
    newArray.push(numeroString);
  });
  console.log(newArray);
};
vezesTres();
//c)
const parOuImpar = () => {
  const newArray = [];
  array4.map((numero) => {
    if (numero % 2 === 0) {
      newArray.push(`${numero} é par`);
    } else {
      newArray.push(`${numero} é impar`);
    }
  });
  console.log(newArray);
};
parOuImpar();
//FUNCOES DE ARRAY 3
const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];
//a)
const verificacaoPode = () => {
  const newArray = [];
  pessoas.filter((pessoa) => {
    if (pessoa.altura >= 1.5 && pessoa.idade < 60 && pessoa.idade > 14) {
      newArray.push(pessoa);
    }
  });
  console.log(newArray);
};
verificacaoPode();
//b)
const verificacaoNaoPode = () => {
  const newArray = [];
  pessoas.filter((pessoa) => {
    if (pessoa.altura < 1.5 || pessoa.idade > 60 || pessoa.idade < 14) {
      newArray.push(pessoa);
    }
  });
  console.log(newArray);
};
verificacaoNaoPode();
//FUNCOES DE ARRAY 4
const consultas = [
  {
    nome: "João",
    genero: "masculino",
    cancelada: true,
    dataDaConsulta: "01/10/2019",
  },
  {
    nome: "Pedro",
    genero: "masculino",
    cancelada: false,
    dataDaConsulta: "02/10/2019",
  },
  {
    nome: "Paula",
    genero: "feminino",
    cancelada: true,
    dataDaConsulta: "03/11/2019",
  },
  {
    nome: "Márcia",
    genero: "feminino",
    cancelada: false,
    dataDaConsulta: "04/11/2019",
  },
];

const emailConsulta = () => {
  let tratamento = "";
  let lembrete = "";
  consultas.map((pessoa) => {
    if (pessoa.genero === "masculino") {
      tratamento = "Sr.";
      lembrete = "lembrá-lo";
    } else {
      tratamento = "Sra.";
      lembrete = "lembrá-la";
    }
    if (pessoa.cancelada) {
      console.log(
        `Olá, ${tratamento} ${pessoa.nome}. Infelizmente, sua consulta marcada para o dia ${pessoa.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
      );
    } else {
      console.log(`Olá, ${tratamento} ${pessoa.nome}. Estamos enviando esta mensagem para
                ${lembrete} da sua consulta no dia ${pessoa.dataDaConsulta}. Por favor, acuse
                o recebimento deste e-mail.`);
    }
  });
};
emailConsulta();
//5
const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];

const atualizaSaldo = () => {
  contas.forEach((conta) => {
    let totalGastos = 0;
    conta.compras.forEach((valor) => {
      totalGastos += valor;
    });
    conta.saldoTotal -= totalGastos;
  });
  console.log(contas);
};
atualizaSaldo();


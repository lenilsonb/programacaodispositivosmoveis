//Exercicio 1

const c = 50;
var a = 1;
let b = 2;
let d = 10;
console.log(a, b, c, d);

//Exercicio 2

const ano = 1991;
let atrasoEmSegundos = 0.00016;
let area = 16 * 3.14;
let metadeArea = area / 2;

console.log("Ano: " + ano);
console.log("Atraso em segundos: " + atrasoEmSegundos);
console.log("Area: " + area);
console.log("Tipo: " + typeof metadeArea); //typeof retorna o tipo da variavel

let a = 10; //decimal
let b = 0x10; //hexadecimal
let c = 0o10; //octal
let d = 0b10; //binario
console.log(a);
console.log(b);
console.log(c);
console.log(d);

let x = 9e3;
let y = 123e-5;

console.log(x);
console.log(y);

let z = 0x21;
console.log(z);

//Exercicio 3
let pais = "Brasil";
let continente = "America do Sul";

console.log(pais);
console.log(typeof pais);
console.log(continente);
console.log(typeof continente);

let message1 = "O navio Mars fez escala no porto";
let message2 = "Chuva forte passará perto da cidade de São Paulo";

console.log(message1);
console.log(message2);

//Exercicio 4
let nome = "João";
let idade = 30;

let mensagem = `Olá, ${nome}! Você tem ${idade} anos.`;
console.log(mensagem);

//Exercicio 5
let multiLineString = `
Esta é uma string
que abrange múltiplas linhas
sem a necessidade de usar \n.`;

console.log(multiLineString);

//Exercicio 6
let texto = "Olá, mundo!";

console.log(texto.startsWith("Olá"));
console.log(texto.endsWith("mundo!"));
console.log(texto.includes("mundo"));
console.log("abc".repeat(3));

//Exercicio 7
let texto = "Javascript";
console.log(texto.charAt(2));

let frase1 = "O gato subiu no telhado e depois pulou.";
console.log(frase1.indexOf("gato"));
console.log(frase1.lastIndexOf("pulou"));

let palavra = "abcdefgh";
console.log(palavra.substring(2, 5));

let texto1 = "Esta é uma string.";
console.log(texto1.slice(5, 7));

let lista = "maçã,banana,uva,melancia";
let frutas = lista.split(",");
console.log(frutas);

let frase2 = "O JavaScript é incrível!";
let novaFrase = frase2.replace("JavaScript", "Python");
console.log(novaFrase);

let texto2 = "JavaSCRIPT";
console.log(texto2.toLowerCase());
console.log(texto2.toUpperCase());

let texto3 = "   Espaços ao redor   ";
console.log(texto3.trim());

//Exercicio 8
let resultadoSoma;

function soma(a, b) {
  return a + b;
}
resultadoSoma = soma(1, 2);
console.log("Resultado da Soma: " + resultadoSoma);

//Exercicio 9
let multiplicar = function (a, b) {
  return a * b;
};
console.log(multiplicar(4, 3));

//Exercicio 10
let usuario1 = {};
console.log(usuario1);
console.log(typeof usuario1);

let usuario2 = {
  nome: "João",
  sobrenome: "da Silva",
  idade: 18,
  email: "joao@email.com",
};

console.log(usuario2.nome + " " + usuario2.sobrenome);
console.log(usuario2.idade);
console.log(usuario2.email);

let usuario3 = {
  nome: "Maria",
  sobrenome: "da Silva",
  idade: 25,
  email: "maria@email.com",
};

console.log(usuario3.nome + " " + usuario3.sobrenome);
usuario3.idade = 30;
console.log(usuario3.idade);

//Exercicio 11
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  acelerar: function () {
    console.log("O carro está acelerando.");
  },
};

carro.acelerar();

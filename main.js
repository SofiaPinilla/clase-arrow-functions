// function sum(a, b) {
//   return a + b;
// }

// const sum = (a, b) => {
//   return a + b;
// };

const sum = (a, b) => a + b;
const saludar = (name) => `Hola ${name}`;
const test = () => "test";

console.log(sum(1, 2));

function test2() {
  console.log("Función test2 ejecutada.");
}

function test1(callback) {
  callback();
}

test1(test2);

const fruits = ["aguacate", "pato", "nisperos", "entrecot", "sangría"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (const fruit of fruits) {
//     console.log(fruit)
// }

// for (const fruit in fruits) {
//     console.log(fruit)
// }
// fruits.forEach((fruit,undefined,array) => console.log(fruit,array));

// const canciones = ["Hang onto yourself", "Go your own way", "Modern Love"];

// canciones.forEach((cancion, indice, array) => {
//   console.log('Elemento actual',cancion,'índice', indice,'array',array);
// });

// const myArray = [1,2,3,4]

// const myArrayTimesTwo = myArray.map((number)=>{
//     return number * 2
// })

// console.log(myArrayTimesTwo)

const songs = [
  { name: "Curl of the Burl", artist: "Mastodon" },
  { name: "Oblivion", artist: "Mastodon" },
  { name: "Flying Whales", artist: "Gojira" },
  { name: "Euralio y sus cabras", artist: "Euralio" },
];

// const allSongNames = [];

// for (const song of songs) {
//   allSongNames.push(song.name);
// }
// const allSongNames = songs.map(song => song.name);

const allSongNames = songs.map(function (song) {
  return song.name;
});

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosFiltrados = numeros.filter((numero) => numero > 5 && numero < 8);

console.log(numerosFiltrados);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

// let result = [];
// for (const word of words) {
//   if (word.length > 6) {
//     result.push(word);
//   }
// }

const result = words.filter((word) => word.length > 6);

console.log(result);

const partesDelCoche = ["ordenador", "volante", "pizza", "tomate"];

const coche = partesDelCoche.reduce(function (valorAnterior, valorActual) {
  return `${valorAnterior} ${valorActual},`;
}, "Mi coche tiene: ");

console.log(coche)

const numbers = [10,5,7]

const sum2 = numbers.reduce((a,b)=> a + b,5)

console.log(sum2)

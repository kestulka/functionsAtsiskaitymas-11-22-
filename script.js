"use strict";

// 1.

// function hello() {
//   return "sveikinimas";
// }
// let pasisveikinimas = hello();
// console.log(pasisveikinimas);
// function greetings(vardas, pas) {
//   console.log(`${vardas} ${pas}`);
// }

// greetings("Kestutis", pasisveikinimas);
// greetings("Evelina", pasisveikinimas);

// 2;

// let suma;
// function skaiciaiTekstas(num1, num2) {
//   if (num1 > num2) {
//     console.log("pirmas skaicius didesnis");
//   } else if (num1 === num2) {
//     suma = num1 + num2;
//     console.log(`skaiciu suma: ${suma}`);
//   } else {
//     console.log("antras skaicius didesnis");
//   }
//   return suma; // bus pernaudojama 4-toje uzduotyje!
// }

// skaiciaiTekstas(1, 2);
// skaiciaiTekstas(2, 1);
// skaiciaiTekstas(2, 2);

// 3.

// function fizzAndBuzz(string) {
//   if (string === "fizz") {
//     console.log("buzz");
//   } else if (string === "buzz") {
//     console.log("fizz");
//   } else {
//     console.log("Please provide fizz or buzz");
//   }
// }

// fizzAndBuzz("fizz");
// fizzAndBuzz("buzz");
// fizzAndBuzz("miauw");

// 4;

// function trikampis(a, b, suma) {
//   if (a + b > suma && b + suma > a && a + suma > b) {
//     console.log("trikampis gali buti sudarytas");
//   } else {
//     console.log("trikampis negali buti sudarytas");
//   }
// }

// trikampis(4, 7, suma);

// 5.

// function pasirinktiFigura() {
//   const figura = prompt("Pasirinkite figura (kvadratas arba staciamkampis");
//   plotoSkaiciuokle(figura);
// }

// function plotoSkaiciuokle(figura) {
//   let plotas;

//   if (figura === "kvadratas") {
//     const krastine = prompt("Iveskite kvadrato krastines ilgi: ");
//     plotas = krastine * krastine;
//   } else if (figura === "staciakampis") {
//     const krastineA = prompt("Iveskite staciakampis apatines krastines ilgi: ");
//     const krastineB = prompt("Iveskite staciakampis sonines krastines ilgi: ");
//     plotas = krastineA * krastineB;
//   } else {
//     alert("neteisingas ivedimas");
//     return;
//   }

//   alert("plotas: " + plotas);
//   return plotas;
// }

// pasirinktiFigura();

// 6.

// // bloga versija:

// function isSeven(x) {
//   return x="7" ? false : true : false;
// }

// // gera versija:

// function isSeven(x) {
//   return x === "7" ? true : false;
// }

// console.log(isSeven("7"));
// console.log(isSeven("8"));

// 7.

// function isEqual(param1, param2) {
//   if (param1 === param2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEqual(1, true));
// console.log(isEqual(1, 1));

// 8.

// function trysDraugai(prob, prize, pay) {
//   if (prob * prize > pay) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(trysDraugai(2, 4, 8));
// console.log(trysDraugai(2, 5, 8));

// 9.

// function minutesSekundes(minutes) {
//   const sekundemis = minutes * 60;
//   return sekundemis;
// }

// console.log(`${2} minute yra lygu ${minutesSekundes(2)} sekundziu`);

// 10.

// function calculator() {
//   const operator = prompt("Iveskite aritmetini veiksma (+, -, *, /)");
//   const num1 = parseFloat(prompt("Iveskite pirma skaiciu: "));
//   const num2 = parseFloat(prompt("Iveskite antra skaiciu: "));

//   if (operator === "+") {
//     const suma = num1 + num2;
//     alert(`${num1} + ${num2} = ${suma}`);
//   } else if (operator === "-") {
//     const suma = num1 - num2;
//     alert(`${num1} - ${num2} = ${suma}`);
//   } else if (operator === "*") {
//     const suma = num1 * num2;
//     alert(`${num1} * ${num2} = ${suma}`);
//   } else if (operator === "/") {
//     const suma = num1 / num2;
//     alert(`${num1} / ${num2} = ${suma}`);
//   } else {
//     alert("neteisinga ivestis");
//   }
// }

// calculator();

// 10.v2 (sexy switch budas)

// function calculator() {
//   const operator = prompt("Iveskite aritmetini veiksma (+, -, *, /)");
//   const num1 = parseFloat(prompt("Iveskite pirma skaiciu: "));
//   const num2 = parseFloat(prompt("Iveskite antra skaiciu: "));

//   switch (operator) {
//     case "+":
//     case "-":
//     case "*":
//     case "/":
//       const suma = eval(`${num1} ${operator} ${num2}`);
//       alert(`${num1} ${operator} ${num2} = ${suma}`);
//       break;
//     default:
//       alert("neteisinga ivestis");
//   }
// }

// calculator();

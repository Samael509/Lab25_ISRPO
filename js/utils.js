export function greet(name) {
  return `привет, ${name}!`;
}

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export const PI = 3.14159;

export default function sayHello() {
  return "привет из модуля utils!";
}

import { greet, add, PI } from "./utils.js"; // импортируем функции и константу
// выводим сообщение

console.log("модули");
 // вызываем функцию приветствия
console.log(greet("алексей"));
console.log("5 + 3 =", add(5, 3));
// выводим значение PI
console.log("значение PI:", PI);

import { multiply as умножить } from "./utils.js"; // импортируем multiply с псевдонимом

console.log("4 * 7 =", умножить(4, 7));

// импортируем все как объект
import * as Utils from "./utils.js";

console.log(Utils.greet("мария"));
// вызываем multiply из объекта
console.log("умножение:", Utils.multiply(3, 9));

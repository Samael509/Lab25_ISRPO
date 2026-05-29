console.log("\n=== Деструктуризация массивов ===");
const colors = ["red", "green", "blue"];
const color1 = colors[0];
const color2 = colors[1];
console.log(color1, color2);
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);

const [primary, , tertiary] = colors;
console.log(primary, tertiary);
const [c1, c2, c3, c4 = "yellow"] = colors;
console.log(c4);

console.log("Деструктуризация объектов");

const user = {
    name: "Алиса",
    age: 25,
    city: "Москва",
};

// получение имени пользователя из объекта user
const userName = user.name;
// получение возраста пользователя из объекта user
const userAge = user.age;
console.log(userName, userAge);

// деструктуризация объекта user для получения свойств name, age, city
const { name, age, city } = user;
console.log(name, age, city);

// переименование переменных при деструктуризации
const { name: fullName, age: years } = user;
console.log(fullName, years);

// деструктуризация с установлением значения по умолчанию для country
const { name: personName, country = "Россия" } = user;
console.log(personName, country);

console.log("Дестрруктуризация в параметрах"); 

// функция для вывода информации о пользователе
function printUserOld(user) {
  console.log(`имя: ${user.name}`);
  console.log(`возраст: ${user.age}`);
  console.log(`город: ${user.city}`);
}

// новый способ: деструктуризация прямо в параметрах функции
function printUser({ name, age, city }) {
  console.log(`имя: ${name}`);
  console.log(`возраст: ${age}`);
  console.log(`город: ${city}`);
}

printUserOld(user);
console.log();
printUser(user);

const product = {
  name: "ноутбук",
  price: 65000,
  category: "электроника",
  inStock: true
};

const { name, price, category, inStock } = product;
console.log(name, price, category, inStock);

function printProduct({ name, price, category, inStock }) {
  console.log(`название: ${name}`);
  console.log(`цена: ${price} руб.`);
  console.log(`категория: ${category}`);
  console.log(`в наличии: ${inStock ? "да" : "нет"}`);
}

printProduct(product);

console.log("Spread для массивов");

// исходные массивы
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// объединение массивов с помощью spread-оператора
const combined = [...arr1, ...arr2];
console.log("объединённый массив:", combined);

// создание копии массива
const copy = [...arr1];
consosle.log("Копия массива:", copy);

// расширение массива с добавлением элементов
const extended = [0, ...arr1, 7, 8];
console.log("Расширенный массив:", extended);

console.log("Spread для объектов");

const person = {
    name: "Иван",
    age: 30,
};

const address = {
    city: "Санкт-Петербург",
    street: "Невский проспект",
};

// объединение с помощью spread-оператора
const fullInfo = { ...person, ...address};
console.log("полная информация:", fullInfo);

// создание опии объекта person
const personCopy = { ...person};
console.log("копия объекта:", personCopy);

// создание нового объекта с изменениями
const updated = { ...person, age: 31, occupation: "Developer"};
console.log("обновлённый объект:", updated);

console.log("Rest оператор");

function sum(...numbers) {
  // возвращаем сумму всех чисел с помощью метода reduce
  return numbers.reduce((total, num) => total + num, 0);
}

// вызываем функцию с разным количеством аргументов
console.log("сумма 1,2,3:", sum(1, 2, 3));
console.log("сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));

// создаем массив чисел
const numbers = [10, 20, 30, 40, 50];
// остальные элементы собираем в массив rest
const [first, second, ...rest] = numbers;
// выводим полученные значения
console.log("первое число:", first);
console.log("второе число:", second);
console.log("остальные числа:", rest);

import { E, square, cube } from './is/math.js';

function main() {
  // импорт math.js
  console.log('E =', E);
  console.log('square(5) =', square(5));
  console.log('cube(3) =', cube(3));
}

main();

console.log("промисы");
const simplePromise = new Promise((resolve,reject) => {
  const success = true;
  if (success) {
    resolve("операция выполнена успешно!");
  } else {
    reject("произошла ошибка!");
  }
});
simplePromise
  .then((result) => console.log("результат:", result))
  .catch((error) => console.log("ошибка:", error));

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`прошло ${ms} миллисекунд`);
    }, ms);
  });
}

delay(1000).then((message) => console.log(message));

function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({
          id: userId,
          name: "иван иванов",
          email: "ivan@example.com",
        });
      } else {
        reject("неверный ID пользователя");
      }
    }, 1500);
  });
}

fetchUserData(1)
  .then((user) => console.log("пользователь:", user))
  .catch((error) => console.log("ошибка:", error));

  // функция для шага, возвращает промис, который резолвится через 500 мс с сообщением
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("шаг-1 завершён"), 500);
  });
}

// функция для шага, принимает результат предыдущего шага, возвращает промис
function step2(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${previousResult} - шаг-2 завершён`), 500);
  });
}

// функция для шага, принимает результат предыдущего шага, возвращает промис
function step3(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${previousResult} - шаг-3 завершён`), 500);
  });
}

// вызов шага, цепочка промисов с обработкой результата каждого шага
step1()
  .then((result1) => step2(result1))
 // После step2 вызывается step3 с результатом
  .then((result2) => step3(result2))
  .then((finalResult) => console.log("финальный результат:", finalResult))
  .catch((error) => console.log("ошибка в цепочке:", error)); 

function checkInventory(product) {
  return new Promise((resolve, reject) => {
    const inventory = {
      "товар1": true,
      "товар2": false,
      "товар3": true,
    };

    if (inventory.hasOwnProperty(product)) {
      if (inventory[product]) {
        resolve(`Товар "${product}" есть в наличии`);
      } else {
        reject(`Товара "${product}" нет в наличии`);
      }
    } else {
      reject(`Товар "${product}" не найден в базе`);
    }
  });
}

checkInventory("товар1")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
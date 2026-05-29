/* console.log("\n=== Деструктуризация массивов ===");
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
 */
/* console.log("Async/Await");
async function greet() {
  return "привет!";
}
greet().then((message) => console.log(message));

function getWeather() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ temp: 22, condition: "солнечно" });
    }, 1000);
  });
}
async function showWeather() {
  console.log("загрузка погоды...");
  const weather = await getWeather();
  console.log(`температура: ${weather.temp}°C, ${weather.condition}`);
}
showWeather(); */

/* async function fetchData(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("ошибка при загрузке данных");
      } else {
        resolve({ data: "важные данные" });
      }
    }, 800);
  });
}

async function getData() {
  try {
    const result = await fetchData(false);
    console.log("успешно:", result.data);
    const failedResult = await fetchData(true);
    console.log("это не выполнится");
  } catch (error) {
    console.log("поймана ошибка:", error);
  }
}

getData(); */

/* async function cookDinner() {
  console.log("начинаем готовить...");
  const pasta = await delay(1000).then(() => "паста готова");
  console.log(pasta);
  const sauce = await delay(500).then(() => "соус готов");
  console.log(sauce);
  const salad = await delay(700).then(() => "салат готов");
  console.log(salad);
  return "ужин готов!";
}
cookDinner().then((result) => console.log(result));

async function cookDinnerFast() {
  console.log("готовим всё одновременно...");
  const [pasta, sauce, salad] = await Promise.all([
    delay(1000).then(() => "паста готова"),
    delay(500).then(() => "соус готов"),
    delay(700).then(() => "салат готов")
  ]);
  console.log(pasta, sauce, salad);
  return "ужин готов быстрее!";
}
cookDinnerFast().then((result) => console.log(result)); */

/* function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function processOrder() {
  try {
    const checkProduct = await checkAvailability();
    if (!checkProduct) {
      throw new Error('товар недоступен');
    }

    const calculatePrice = await calculateCost();
    if (!calculatePrice) {
      throw new Error('ошибка при расчёте стоимости');
    }

    const confirmOrder = await confirmOrder();
    if (!confirmOrder) {
      throw new Error('подтверждение не получено');
    }

    return 'заказ успешно обработан';
  } catch (error) {
    console.error('ошибка:', error.message);
    throw error;
  }
}

async function checkAvailability() {
  await delay(1000);
  return true;
}

async function calculateCost() {
  await delay(1000);
  return 100;
}

async function confirmOrder() {
  await delay(1000);
  return true;
}

console.log("Fetch API");
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP ошибка! статус: ${response.status}`);
    }
    const users = await response.json();
    console.log("первые 3 пользователя:");
    users.slice(0, 3).forEach((user) => {
      console.log(`- ${user.name} (${user.email})`);
    });
  } catch (error) {
    console.log("ошибка при загрузке пользователей:", error.message);
  }
}
getUsers(); */

/* async function getUserById(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();
    console.log(`Пользователь #${id}`);
    console.log(`Имя: ${user.name}`);
    console.log(`Город: ${user.address.city}`);
    console.log(`Компания: ${user.company.name}`);
  } catch (error) {
    console.log("Ошибка:", error.message);
  }
}

getUserById(1); */

/* async function createPost() {
  try {
    const newPost = {
      title: "моя первая запись",
      body: "это содержание моей первой записи в блоге",
      userId: 1,
    };
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    const createdPost = await response.json();
    console.log("создана новая запись:");
    console.log("ID:", createdPost.id);
    console.log("заголовок:", createdPost.title);
  } catch (error) {
    console.log("ошибка при создании записи:", error.message);
  }
}

createPost(); */

/* console.log("Optitonal Chaining");

const user1 = {
  name: "Андрей",
  address: {
    city: "Волжский",
    street: "Пушкина",
  },
};

const user2 = {
  name: "Дмитрий",
}

const city1 = user2.address && user2.address.city;
console.log("город (старый способ):", city1);

const city2 = user2.address?.city;
console.log("город (новый способ):", city2); 

const street = user1.address?.street;
console.log("улица:", street);

const admin = {
  name: "администратор",
  permissions: {
    canDelete: () => true,
  },
};

const guest = {
  name: "гость",
};

console.log("админ может удалять?", admin.permissions?.canDelete?.());
console.log("гость может удалять?", guest.permissions?.canDelete?.()); */

/* const company = {
  name: "Tech Corp",
  employees: [
    { name: "Надежда", role: "Developer" },
    { name: "Анна", role: "Designer" },
  ],
};

const startup = {
  name: "New Startup",
};

console.log("первый сотрудник:", company.employees?.[0]?.name);
console.log("первый сотрудник стартупа:", startup.employees?.[0]?.name); */

/* console.log("Nullish Coalescing");

const value1 = 0;
const value2 = "";
const value3 = false;
const value4 = null;
const value5 = undefined;

console.log('value1 ?? "default":', value1 ?? "default");
console.log('value2 ?? "default":', value2 ?? "default");
console.log('value3 ?? "default":', value3 ?? "default");
console.log('value4 ?? "default":', value4 ?? "default");
console.log('value5 ?? "default":', value5 ?? "default"); */

/* function displayUserSettings(settings) {
  const theme = settings?.theme ?? "light";
  const fontSize = settings?.fontSize ?? 14;
  const notifications = settings?.notifications ?? true;

  console.log("настройки пользователя:");
  console.log("тема:", theme);
  console.log("размер шрифта:", fontSize);
  console.log("уведомления:", notifications);
}

displayUserSettings({ theme: "dark", fontSize: 16 });
displayUserSettings({ notifications: false });
displayUserSettings({}); */

/* const apiResponse = {
  data: {
    user: {
      profile: {
        setting: {
          language: "ru",
        },
      },
    },
  },
};

const language = apiResponse?.data?.user?.profile?.setting?.language ?? "en";
console.log("язык", language);

const emptyResponse = {};
const defaultLanguage = emptyResponse.data?.user?.profile?.settings?.language ?? "en";
console.log("язык по умолчанию:", defaultLanguage); */

const order = {
  customer: {
    name: "Серый",
    email: "ser@example.com"
  },
  shipping: {
    address: "ул. орлова, д. 10",
    city: "москва"
  },
  payment: {
    method: "кредитная карта",
    status: "оплачено"
  }
};

const customerName = order.customer?.name ?? "имя не указано";
const customerEmail = order.customer?.email ?? "email не указан";

const shippingAddress = order.shipping?.address ?? "адрес не указан";
const shippingCity = order.shipping?.city ?? "город не указан";

const paymentMethod = order.payment?.method ?? "способ оплаты не указан";
const paymentStatus = order.payment?.status ?? "статус оплаты не указан";

function displayOrder(order) {
  const customerName = order.customer?.name ?? "имя не указано";
  const customerEmail = order.customer?.email ?? "email не указан";

  const shippingAddress = order.shipping?.address ?? "адрес не указан";
  const shippingCity = order.shipping?.city ?? "город не указан";

  const paymentMethod = order.payment?.method ?? "способ оплаты не указан";
  const paymentStatus = order.payment?.status ?? "статус оплаты не указан";

  console.log(`инфа о заказе:
  Клиент: ${customerName} (${customerEmail})
  Доставка: ${shippingAddress}, ${shippingCity}
  Оплата: ${paymentMethod} (${paymentStatus})`);
}

displayOrder(order);
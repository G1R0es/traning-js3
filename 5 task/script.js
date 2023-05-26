let year = Number(prompt("Введите год:"));

if (isNaN(year) || year === "" || year === null || year === 0) {
  console.log("Введите что-то коректное");
} else if (year % 4 === 0) {
  console.log("Это високосный год");
} else if (year % 4 === 1 || year % 4 === 3 || year % 4 === 2) {
  console.log("Это невисокосный год");
} else {
  console.log("Вы ничего не ввели");
}

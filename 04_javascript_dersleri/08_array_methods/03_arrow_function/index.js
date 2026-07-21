//EXAMPLE 1
const sayHello = (name) => console.log(`Merhaba ${name}!`);

sayHello("Mert");

console.log("---------------");

//EXAMPLE 2
const square = (number) => number * number;
const enterNummber = 3;

console.log(`${enterNummber} sayısının karesi: ${square(enterNummber)}`);

console.log("---------------");

//EXAMPLE 3
const notes = [40, 55, 70, 85, 90];
const isOver = notes.map((note) => note >= 50);

console.log(isOver);

console.log("---------------");

//EXAMPLE 4
const collect = (a, b) => a + b;

console.log(collect(5, 9));

console.log("---------------");

//EXAPLE 5
const basket = [
  { name: "Kitap", price: 120 },
  { name: "Defter", price: 30 },
  { name: "Kalem", price: 15 },
];

const vatInludePrices = basket.map((newBasket) => ({
  name: newBasket.name,
  price: newBasket.price * 1.2,
}));

console.log("KDV Dahil Yeni Sepetimiz:", vatInludePrices);

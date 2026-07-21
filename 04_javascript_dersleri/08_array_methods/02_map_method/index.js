//EXAMPLE 1
const celcius = [0, 20, 30, 100];

const fahreneit = celcius.map(function (temperature) {
  return (temperature * 9) / 5 + 32;
});

console.log("Santigrat cinsinden sıcaklık: " + celcius);
console.log("Fahreneit cinsinden sıcaklık: " + fahreneit);

console.log("----------------");

//EXAMPLE 2
const names = ["ayşe", "mehmet", "cemre", "burak"];

const newName = names.map(function (name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
});

console.log("Başlangıçta isimler: " + names);
console.log("Düzeltilmiş isimler: " + newName);

console.log("----------------");

//EXAMPLE 3
const products = [
  { name: "Laptop", price: 15000 },
  { name: "Telefon", price: 10000 },
  { name: "Tablet", price: 8000 },
];

const productName = products.map(function (product) {
  return product.name;
});

console.log("Ürün isimleri: " + productName);

console.log("----------------");

//EXAPLE 4
const basket = [
  { name: "Kitap", price: 120 },
  { name: "Defter", price: 30 },
  { name: "Kalem", price: 15 },
];

const vatInludePrices = basket.map(function (newBasket) {
  return { name: newBasket.name, price: newBasket.price * 1.2 };
});

console.log("KDV Dahil Yeni Sepetimiz:",vatInludePrices);
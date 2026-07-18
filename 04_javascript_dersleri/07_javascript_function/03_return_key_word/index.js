//EXAMPLE 1
function product(a, b) {
  return a * b;
}

console.log(product(3, 4));
console.log("---------------------");

//EXAMPLE 2
function yazVeDon() {
  return "Bitti";
  console.log("Bu satır asla çalışmaz");
}

console.log(yazVeDon());
console.log("---------------------");

//EXAMPLE 3
function addition(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Geçersiz giriş";
  }

  return a + b;
}

console.log(addition(3, 8));
console.log(addition(5, "abc"));
console.log("---------------------");

//EXAMPLE 4
function subtract(a) {
  return a - 2;
}

const result = subtract(10);
const newSubtract = subtract(result);

console.log(newSubtract);
console.log("---------------------");

//EXAMPLE 4
function calculateTotalPrice(bookPrice, taxRate) {
  if (bookPrice <= 0) {
    return "Geçersiz fiyat girdisi!";
  }
  const total = bookPrice + (bookPrice * taxRate);

  return total;
}

console.log(
  `Kargonun İçinden Çıkan Toplam Fiyat: ${calculateTotalPrice(100, 0.2)}`,
);

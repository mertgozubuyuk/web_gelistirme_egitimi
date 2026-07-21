//EXAMPLE 1
const notes = [60, 75, 80, 90];

const collect = notes.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);

console.log("Dizideki notların toplamı: ", collect);

console.log("--------------------");

//EXAMPLE 2
const degree = [12, 5, -2, 8, 3];

const min = degree.reduce((accumulator, current) => {
  if (accumulator < current) {
    return accumulator;
  } else {
    return current;
  }
},degree[0]);

console.log("Dizideki en küçük sıcaklık derecesi: ", min);

console.log("--------------------");

//EXAMPLE 3
const words = ["masa", "kitaplık", "kalem", "bilgisayar", "defter"];

const longestWord = words.reduce((accumulator, current) => {
  if (accumulator.length > current.length) {
    return accumulator;
  } else {
    return current;
  }
},words[0]);

console.log("Dizideki en uzun kelime: ", longestWord);

console.log("--------------------");

//EXAMPLE 4
const students = [
  { name: "Ayşe", note: 78 },
  { name: "Burak", note: 92 },
  { name: "Can", note: 85 },
  { name: "Deniz", note: 95 },
];

const mostSuccessful = students.reduce((accumulator, current) => {
  if (accumulator.note > current.note) {
    return accumulator;
  } else {
    return current;
  }
},students[0]);

console.log("En başarılı öğrenci: ", mostSuccessful.name);

console.log("--------------------");

//EXAMPLE 5
const products = [
  { name: "Kalem", price: 10 },
  { name: "Defter", price: 25 },
  { name: "Silgi", price: 5 }
];

const totalPrice = products.reduce((accumulator,current)=>{
    return accumulator + current.price;
},0);

console.log("Ürnlerin toplam fiyatı: ",totalPrice)

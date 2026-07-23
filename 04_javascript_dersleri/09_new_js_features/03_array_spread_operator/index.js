const fruits = ["elma", "muz", "armut"];
console.log("Dizi olarak meyveler: ", fruits);
console.log("Eleman olarak meyveler: ", ...fruits);

const newFruits = [...fruits, "portakal"];
console.log("Dizi olarak yeni meyveler: ", newFruits);
console.log("Eleman olarak yeni meyveler: ", ...newFruits);

const menName = ["Ahmet", "Mehmet"];
const wowenName = ["Selin", "Azra"];

const allName = [...menName, ...wowenName];
console.log("Diziler birleşerek oluşan isimler: ", allName);
console.log("Diziler oluşan isimler(eleman olarak): ", ...allName);

const letters = [..."MERT GOZUBUYUK"];
console.log(...letters);

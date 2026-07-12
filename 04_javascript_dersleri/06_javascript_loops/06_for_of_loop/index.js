//KLASİK YÖNTEM
const books = ["1984", "Nutuk", "Sapiens", "Martı"];

for(let i=0; i<books.length; i++){
    console.log("Kitap adı: " , books[i]);
}

//MODERN YÖNTEM
for(let i of books){
    console.log("Kitap adı: " , i);
}

console.log("-------------------");

const classes = [
  ["Mert", "Zeynep"],
  ["Berk", "Ece"],
  ["İrem", "Yusuf"]
];

for(let clas of classes ){
    for(let student of clas){
        console.log("Öğrenci: " , student);
        
    }
}

console.log("-------------------");

const word = "JavaScript";

for (let letter of word) {
  console.log(letter);
}
//EXAMPLE 1
const cities = ["Ankara", "İzmir", "Eskişehir", "Bursa"];

cities.forEach(function (city) {
  console.log(city);
});

console.log("---------------------");

//EXAMPLE 2
const notes = [45, 82, 67, 90, 74, 59];

notes.forEach(function (note) {
  if (note >= 70) {
    console.log(note);
  }
});

console.log("---------------------");

//EXAMPLE 3
const books = [
  { name: "Tutunamayanlar", page: 724 },
  { name: "Kürk Mantolu Madonna", page: 160 },
  { name: "Serenad", page: 480 },
];

books.forEach(function (book) {
  console.log(`${book.name} - ${book.page} sayfa`);
});

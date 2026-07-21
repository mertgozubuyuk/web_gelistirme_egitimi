const books = [
  { name: "Yüzüklerin Efendisi", page: 1200 },
  { name: "Küçük Prens", page: 95 },
  { name: "Sefiller", page: 1463 },
  { name: "Hayvan Çiftliği", page: 112 },
];

const thickBooks = books
  .filter((book) => {
    return book.page > 1000;
  })
  .map((book) => book.name);

console.log("Kalın kitaplar: ", thickBooks);

const findBook = books.find((book) => 
    book.page > 95);

console.log(findBook);

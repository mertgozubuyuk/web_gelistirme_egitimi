const bookList1 = ["Suç ve Ceza", "Tutunamayanlar", "Atomik Alışkanlıklar", "Martı"];
console.log(bookList1);

const bookList2 = ["Nutuk", "Hayvan Çiftliği", "İçimizdeki Şeytan"];
console.log(bookList2);

const concatBookList = bookList1.concat(bookList2);
console.log(concatBookList);

console.log(bookList1.includes("Suç ve Ceza"));

console.log(bookList2.indexOf("Nutuk"));
console.log(concatBookList.indexOf("1984"));

const reverseBookList1 = bookList1.reverse();
console.log(reverseBookList1);

const newBookList2 = bookList2.slice(0,2);
console.log(newBookList2);

console.log(bookList2.splice(0,1));
console.log(bookList2);

bookList1.splice(2,0,"Küçük Prens");
console.log(bookList1);

bookList1.splice(0,1,"Yeni Dünya");
console.log(bookList1);


console.log(bookList1.sort());
console.log(bookList2.sort());
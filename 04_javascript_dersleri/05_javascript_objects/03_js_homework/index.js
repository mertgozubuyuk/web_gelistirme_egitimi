const kutuphane = {
  kategoriler: ["Roman", "Tarih", "Yazılım"],

  kitaplar: [
    ["1984", "Hayvan Çiftliği", "Karamazov Kardeşler"], // Roman
    ["Sapiens", "Tüfek Mikrop ve Çelik"], // Tarih
    ["Temel JavaScript", "Modern JavaScript", "Node.js Giriş"], // Yazılım
  ],

  stok: {
    1984: 4,
    "Hayvan Çiftliği": 2,
    "Karamazov Kardeşler": 1,
    Sapiens: 0,
    "Tüfek Mikrop ve Çelik": 3,
    "Temel JavaScript": 5,
    "Modern JavaScript": 4,
    "Node.js Giriş": 6,
  },
};

//görev 1
console.log("Yazılım Kitapları (Eski):", [...kutuphane.kitaplar[2]]);

kutuphane.kitaplar[2].push("React ve Frontend");
kutuphane.stok["React ve Frontend"] = 3;

console.log("Yazılım Kitapları (Yeni):", kutuphane.kitaplar[2]);
console.log("Güncel Stok Listesi:", kutuphane.stok);

//görev 2
console.log("Romanlar (Eski):", [...kutuphane.kitaplar[0]]);

kutuphane.kitaplar[0].pop();
delete kutuphane.stok["Karamazov Kardeşler"];

console.log("Romanlar (Yeni):", kutuphane.kitaplar[0]);

//görev 3
console.log("Tarih Kitapları (Eski):", [...kutuphane.kitaplar[1]]);
kutuphane.kitaplar[1].shift();
delete kutuphane.stok["Sapiens"];

kutuphane.kitaplar[1].unshift("Nutuk");
kutuphane.stok["Nutuk"] = 5;

console.log("Tarih Kitapları (Yeni):", kutuphane.kitaplar[1]);

//görev 4
if (kutuphane.kitaplar[2].includes("Node.js Giriş")) {
  console.log("Kitap bulundu");
} else {
  console.log("Node.js Giriş kitabı bulunamadı");
}

//görev 5
kutuphane.kitaplar[2].indexOf("Node.js Giriş");
console.log(kutuphane.kitaplar[2].indexOf("Node.js Giriş"));

//gorev 6
let sonIki = kutuphane.kitaplar[2].slice(-2);
console.log(sonIki);

//görev 7
kutuphane.kitaplar[2].sort();
console.log("A-Z Sıralama Sonrası Yazılım:", kutuphane.kitaplar[2]);

//görev 8
kutuphane.kitaplar[2].reverse();
console.log("Z-A Ters Sıralama Sonrası Yazılım:", kutuphane.kitaplar[2]);

//görev 9
kutuphane.kitaplar[1].splice(1, 0, "Türklerin Tarihi");
kutuphane.stok["Türklerin Tarihi"] = 2;

//görev 10
if (kutuphane.stok["Temel JavaScript"] > 0) {
  console.log("Kitap ödünç verilebilir");
} else {
  console.log("Kitap stokda bulunmuyor");
}

//görev 11
let kategoriIndex = 0;

switch (kategoriIndex) {
  case 0:
    console.log("Roman Kategorisi: ", kutuphane.kitaplar[0]);
    break;

  case 1:
    console.log("Tarih Kategorisi: ", kutuphane.kitaplar[1]);
    break;

  case 2:
    console.log("Yazılım Kategorisi: ", kutuphane.kitaplar[2]);
    break;

  default:
    console.log("Geçersiz kategori numarası.");
    break;
}

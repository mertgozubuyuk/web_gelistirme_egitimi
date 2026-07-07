console.log("kitap" === "kitap");
console.log(5 === 5);

console.log(["güneş", "ay"] === ["güneş", "ay"]);

//------------------------------------------

// 1. DURUM: TEMEL VERİ TİPİ (NUMBER) KARŞILAŞTIRMASI

let firstNumber = 10;
let secondNumber = 10;

// Bilgisayar sadece değerlere bakar
console.log("Sayı Karşılaştırması:", firstNumber === secondNumber); 


// 2. DURUM: REFERANS VERI TİPİ (DİZİ) KARŞILAŞTIRMası
// İki tane tamamen aynı elemanlara sahip dizi (koli) oluşturuyoruz.
const firstList = [1, 2, 3];
const secondList = [1, 2, 3];

// DİKKAT! Bilgisayar burada içindeki 1,2,3 sayılarına bakmaz!
console.log("Dizi Karşılaştırması:", firstList === secondList); 

//------------------------------------------


const originalList = ["Elma", "Muz"];

// Yeni bir dizi yaratmıyoruz, var olan dizinin adresini bu kutuya da veriyoruz.
const referenceList = originalList; 

console.log(originalList === referenceList); 

// KRİTİK KISITLAMA: Birinde temizlik yaparsan diğeri de etkilenir!
referenceList.push("Çilek");
console.log(originalList); // Çıktı: ["Elma", "Muz", "Çilek"] olur!


//Örnek:
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

numbers2 = numbers1 ;
numbers2[0]=10;

console.log(numbers2[0]);
// VERİ MODELİ (Kütüphanedeki Kitaplar)

const books = [
    { title: "1984", minAge: 16, isDamaged: false },
    { title: "Çalıkuşu", minAge: 12, isDamaged: false },
    { title: "Şeker Portakalı", minAge: 10, isDamaged: true } // Hasarlı bir kitap!
];


//EVERY METODU İLE KONTROL (HEPSİ)
// Senaryo: 18 yaşındaki bir çocuk kütüphanedeki HER kitabı tek başına alabilir mi?
// 'every' şartı: TÜM kitapların minAge değeri 18'den küçük mü?

const canChildReadEverything = books.every(book => book.minAge <= 18);

console.log("Çocuk tüm kitapları okuyabilir mi?:", canChildReadEverything); 
// Çıktı: true (Çünkü 16, 12 ve 10 yaş sınırlarının hepsi 18'den küçüktür!)


// 3. ADIM: SOME METODU İLE KONTROL (EN AZ BİRİ)
// Senaryo: Kütüphane rafında acil tamir edilmesi gereken HASARLI bir kitap var mı?
// 'some' şartı: EN AZ BİR kitabın 'isDamaged' değeri 'true' mu?

const hasAnyDamagedBook = books.some(book => book.isDamaged === true);

console.log("Rafta hiç hasarlı kitap var mı?:", hasAnyDamagedBook); 
// Çıktı: true (Çünkü Şeker Portakalı kitabının 'isDamaged' değeri true'dur!)
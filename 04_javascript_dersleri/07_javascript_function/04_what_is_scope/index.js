// 1. GLOBAL SCOPE (Her yere açık alan)
// En dışta tanımlandığı için projenin her yerinden erişilebilir.
const libraryName = "Şehir Kütüphanesi";

function openLibraryShelf() {
    
    // 2. FUNCTION / LOCAL SCOPE (Fonksiyona özel alan)
    // Sadece openLibraryShelf fonksiyonunun içinde yaşar.
    const shelfType = "Yazılım Rafı";
    
    console.log("Fonksiyon İçinden Global Veri:", libraryName); // Çıktı: Şehir Kütüphanesi (Görür!)
    console.log("Fonksiyon İçinden Local Veri:", shelfType);    // Çıktı: Yazılım Rafı (Görür!)

    // Bir if bloğu (açık süslü parantez) başlatıyoruz
    if (true) {
        
        // 3. BLOCK SCOPE (Sadece bu süslü paranteze özel)
        // Sadece bu if bloğunun içinde yaşar.
        const bookName = "Temel JavaScript";
        
        console.log("Blok İçinden Local Veri:", shelfType); // Çıktı: Yazılım Rafı (Dışarıdakini görür!)
        console.log("Blok İçinden Blok Verisi:", bookName); // Çıktı: Temel JavaScript (Kendi içini görür!)
    }

    // KRİTİK HATA NOKTASI 1:
    // console.log(bookName); 
    // HATA: bookName if bloğunun içinde öldü! Dışarı çıkamaz. (ReferenceError)
}

// Fonksiyonu çalıştırıyoruz
openLibraryShelf();

// KRİTİK HATA NOKTASI 2:
// console.log(shelfType); 
// HATA: shelfType fonksiyonun içinde öldü! Dışarıdan erişilemez. (ReferenceError)
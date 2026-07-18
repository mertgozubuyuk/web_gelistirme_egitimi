//EXAMPLE 1
//const bookName = "Java Giriş";
try {
  console.log("Kitabın adı: ", bookName);
} catch (error) {
  console.log("Üzgünüm bir hata meydana geldi: ", error);
}

console.log("---------------");

//EXAMPLE 2
function repeat(text) {
  try {
    return (text.toUpperCase() + " ").repeat(3);
  } catch (error) {
    return ("Üzgünüm bir hata meydana geldi: ", error);
  }
}

console.log(repeat("Merhaba"));
console.log(repeat(123));
console.log(repeat(true));

console.log("---------------");

//EXAMPLE 3
function fetchBookData() {
  try {
    console.log("1. Sunucuya bağlanılmaya çalışılıyor...");

    connectToExternalServer();

    console.log("2. Veriler başarıyla getirildi.");
  } catch (error) {
    console.log("⚠️ Bir hata yakalandı! Programın çökmesi engellendi.");

    console.log("Hata Mesajı:", error.message);
  }
}

console.log("--- PROGRAM BAŞLADI ---");

fetchBookData();

console.log("--- PROGRAM KAPANMADI, ÇALIŞMAYA DEVAM EDİYOR ---");

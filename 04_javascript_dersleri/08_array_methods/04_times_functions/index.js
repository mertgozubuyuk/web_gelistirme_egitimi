console.log("Lütfen gezinmeye devam edin.");

const tekrarID = setInterval(() => {
  console.log("Veri yenileniyor...");
}, 1000);

setTimeout(() => {
  clearInterval(tekrarID);
  console.log("Yenileme durduruldu.");
}, 5000);
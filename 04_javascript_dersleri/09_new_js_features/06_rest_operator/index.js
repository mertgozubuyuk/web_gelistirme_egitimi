const examResult = [15, 56, 78, 90, 34];

const [firstExam, secondExam, ...rest] = examResult;

console.log("1. sınav sonuçları: ", firstExam);
console.log("2. sınav sonuçları: ", secondExam);
console.log("Geriye kalan sınav sonuçları dizi halinde: ", rest);
console.log("Tüm sınav sonuçları dizi halinde: ", examResult);

const user = {
  name: "Selin",
  age: 24,
  city: "İstanbul",
  university: "Uludağ Üniversitesi",
};

const { name, ...remainingInformation } = user;

console.log("İsim: ", name);
console.log("Kalan bilgileri: ", remainingInformation);
console.log("Tüm bilgiler: ", user);

function calculateTotalWithShipping(shippingCost, ...prices) {
  const totalBookPrice = prices.reduce((acc, current) => acc + current, 0);

  return totalBookPrice + shippingCost;
}

console.log("--- 1. FONKSİYON REST PARAMETRESİ ---");

const total1 = calculateTotalWithShipping(20, 50, 100, 150);
console.log("3 Kitap + Kargo Toplamı:", total1);

const total2 = calculateTotalWithShipping(20, 10, 20, 30, 40, 50);
console.log("5 Kitap + Kargo Toplamı:", total2);

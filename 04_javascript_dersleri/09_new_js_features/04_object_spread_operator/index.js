const students = {
  name: "Zeynep",
  class: 11,
};

const newStudents = { ...students, number: 1256 };

console.log("Öğrenci bilgisi: ", students);
console.log("Yenilenen öğrenci bilgisi: ", newStudents);

const productInformation = {
  name: "Laptop",
  mark: "Dell",
};

const priceInformation = {
  price: 18500,
  currency: "TL",
};

const fullProduct = { ...productInformation, ...priceInformation };

console.log("Tüm ürün bilgileri: ", fullProduct);

const first = { mark: "HP", color: "siyah" };
const second = { mark: "Lenovo", screen: 15.6 };

const result = { ...first, ...second };
//Eğer birden fazla objede aynı isimde özellikler varsa, son yazılan değer geçerli olur:

console.log("Televizyon bilgisi: ",result);

const formData = {
  userName: "mehmet123",
  email: "mehmet@example.com",
};

const systemData = {
  id: 1007,
  isActive: true,
};

const newUser = { ...formData, ...systemData };

console.log("Sitedeki kullanıcıya ait bilgiler: ",newUser);

const number = [5, 10, 15];
const obj = { ...number };

console.log("Sayılar nesnesi: ",obj);
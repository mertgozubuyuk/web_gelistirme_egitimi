function print(message = "Selam") {
  console.log("Gönderilen Mesaj: " + message);
}

print("Merhaba");
print();

function introduce(name = " ", surname = " ") {
  console.log(`İsim: ${name} , Soyisim: ${surname} `);
}

introduce("Mert", "Gözübüyük");
introduce("Emin");
introduce();

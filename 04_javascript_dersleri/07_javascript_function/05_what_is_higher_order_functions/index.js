//EXAPLE 1
function executeTwice(task) {
  task();
  task();
}

function displayMessage() {
  console.log("Bu bir mesajdır.");
}

function hello() {
  console.log("Merhaba");
}

executeTwice(displayMessage);
executeTwice(hello);

//EXAMPLE 2
// Bu bizim higher order function'ımız
// "işlemYap" parametresi olarak BİR FONKSİYON alıyor
function sayilarlaIslemYap(sayilar, islemYap) {
  const sonuc = [];
  for (let sayi of sayilar) {
    sonuc.push(islemYap(sayi)); // her sayıya, dışarıdan gelen fonksiyonu uyguluyoruz
  }
  return sonuc;
}

// Şimdi "ne yapılacağını" tanımlayan küçük fonksiyonlar
function ikiyleCarp(x) {
  return x * 2;
}

function kareAl(x) {
  return x * x;
}

const sayilar = [1, 2, 3, 4];

console.log(sayilarlaIslemYap(sayilar, ikiyleCarp)); // [2, 4, 6, 8]
console.log(sayilarlaIslemYap(sayilar, kareAl)); // [1, 4, 9, 16]

//EXAPLE 3
function repeatFiveTimes(action) {
  for (let i = 0; i < 5; i++) {
    action();
  }
}

function printRandomNumber() {
  const number = Math.floor(Math.random() * 100) + 1;
  console.log("Rastgele sayı: ", number);
}

repeatFiveTimes(printRandomNumber);

//EXAMPLE 4
function sesUretici() {
  return function () {
    console.log("Yeni ses: Bip bip!");
  };
}

const ses = sesUretici();
ses();

//EXAMPLE 5
function mesajUretici() {
  const rastgeleSayi = Math.random();
  if (rastgeleSayi > 0.5) {
    return function () {
      console.log("Harika! Bugün şanslı günündesin.");
    };
  } else {
    return function () {
      console.log("Maalesef... Bugün pek iyi gitmiyor.");
    };
  }
}

const mesaj = mesajUretici();
mesaj();

//EXAMPLE 6
function sayPolite(name) {
  return `Saygılarımla, hoş geldiniz Sayın ${name}.`;
}

function sayCool(name) {
  return `Selam ${name}! Naber? 😎`;
}

function greetingRobot(user, styleCallback) {
  const finalSpeech = styleCallback(user);

  return finalSpeech;
}

const politeSpeech = greetingRobot("Mert", sayPolite);
console.log("Kibar Robot Çıktısı:", politeSpeech);

const coolSpeech = greetingRobot("Mert", sayCool);
console.log("Havalı Robot Çıktısı:", coolSpeech);

//EXAMPLE 7
function addNumbers(num1, num2) {
  return num1 + num2;
}

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

function simpleCalculator(a, b, operationCallback) {
  const result = operationCallback(a, b);

  return result;
}

const sumResult = simpleCalculator(5, 3, addNumbers);
console.log("Toplama Sonucu:", sumResult);

const multiplyResult = simpleCalculator(5, 3, multiplyNumbers);
console.log("Çarpma Sonucu:", multiplyResult);

//EXAMPLE 8
function tekrarla(gorev, kacKez) {
  for (let i = 0; i < kacKez; i++) {
    gorev();
  }
}

function selamVer() {
  console.log("Merhaba!");
}

tekrarla(selamVer, 3);

//EXAMPLE 9
function sayiyiIsle(sayi, islemFonksiyonu) {
  return islemFonksiyonu(sayi);
}

function ikiKatinaCikar(x) {
  return x * 2;
}

function kupunuAl(x) {
  return x * x * x;
}

console.log(sayiyiIsle(5, ikiKatinaCikar)); // 10 yazmalı
console.log(sayiyiIsle(3, kupunuAl));       // 27 yazmalı
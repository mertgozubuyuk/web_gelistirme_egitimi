//EXAMPLE 1
function sayHello(name) {
  console.log("Selam " + name + "!");
}

sayHello("Mert");

console.log("--------------");

//EXAMPLE 2
function productFunction(number) {
  console.log(number + " x 2 = " + number * 2);
}

productFunction(3);
productFunction(15);

console.log("--------------");

//EXAMPLE 3

function introduce(name, surname) {
  console.log(`Benim adım ${name} ve soyadım ${surname}.`);
}

introduce("Mert", "Gözübüyük");

console.log("--------------");

//EXAMPLE 4
function checkResult(studentName, note) {
  if (note >= 50 && note <= 100) {
    console.log(`${studentName} bravo!.Dersten geçtin.`);
  } else if (note < 50 && note >= 0) {
    console.log(`${studentName} üzgünüm.Dersten kaldın.`);
  } else {
    console.log("Notlandırma hatası.Lütfen tekrar deneyiniz.");
  }
}

checkResult("Mert", 90);
checkResult("Berk", 35);
checkResult("Nisa", -5);

//Örnek: 1’den 10’a Kadar Sayıları Yazdırmak
for(let i = 1; i<=10; i++){
    console.log("sayı: ", i);
}

console.log("----------------------------");

//Örnek: 0 ile 30 arasındaki sadece 3’e tam bölünebilen sayıları yazdırmak istiyoruz.
for(let i=0; i<=30; i += 3){
    console.log(i);
    
}

console.log("----------------------------");

//Örnek: 1’den 20’ye Kadar Tek Sayılar
for(let i=1; i<=20; i += 2){
    console.log(i);
}

console.log("----------------------------");

//Örnek: Geriye Doğru Saymak: 50’den 0’a
for(let i=50; i>=0; i -= 5){
    console.log(i);
}

console.log("----------------------------");

//Örnek: Çarpma Kullanarak Döngü
for(let i=2; i<=100; i*=2){
    console.log(i);
}
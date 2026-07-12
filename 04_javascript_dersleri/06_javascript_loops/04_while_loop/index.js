// ALIŞTIRMA 1: EN TEMEL WHILE YAPISI (1-5 Arası Sayma)

let number = 1;

while(number <= 5){
    
    console.log("Şu anki sayı: ", number);
    number++;
}

// ALIŞTIRMA 2: GERÇEKÇİ BİR SENARYO (Pil Şarj Simülatörü)

let batteryLevel = 70;

while(batteryLevel <= 100){

    console.log(`Telefon şarj oluyor... Güncel Pil: %${batteryLevel}`);
    batteryLevel += 10;
}

console.log("Şarj tamamlandı! Fişten çekebilirsiniz.");
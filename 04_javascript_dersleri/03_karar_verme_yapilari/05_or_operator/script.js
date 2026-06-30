//Kredi kartı veya nakit ödeme örneği

const hasCrediCard = true;
const hasCash = false;

if(hasCrediCard === true || hasCash === true){
    alert("Ödeme yöntemi onaylandı.Alışverişi tamamlayabilirisiniz.");
    console.log("Ödeme yapıldı.");
}else{
    alert("Malasef geçerli bir ödeme yöntemi bulunmuyor.");
    console.log("Ödeme yapılamadı.");
}

//Üyelik ücret işlem örneği

const age = Number(prompt("Lütfen yaşınızı giriniz"));

if((age>0 && age<=12) || (age>=65 && age<=100)){
    console.log("Giriş ücretsiz.")
}
else if(age>12 && age<18){
    console.log("Giriş ücreti 20TL'dir.");
}
else if(age>=18 && age<65){
    console.log("Giriş ücreti 40Tl'dir");
}
else{
    console.log("Hatalı yaş girdiniz");
}
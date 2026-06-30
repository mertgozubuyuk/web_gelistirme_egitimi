const age = Number(prompt("Lütfen yaşınızı giriniz:"));

if((!age) || (age<0)){
    alert("Hatalı yaş girişi.");
    console.log("Lütfen yaşınızı giriniz");
}
else{
    alert("Yaşınız doğrulandı");
    console.log("Yaş girişi başarılı.");
}
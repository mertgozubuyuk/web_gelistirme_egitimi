//Sinemya gitme örneği

const isBookRead = true;
const isRoomClean = true;

if(isBookRead && isRoomClean){
    console.log("Sinemaya gidebilirsin.");
}else{
    console.log("Üzgünüm sinemaya gidemezsin.Görevlerini yerine getirmen lazım.");
}

//Üye sayfasına giriş yapabilme örneği

const username = prompt("Kullanıcı adını giriniz");
const passaword = Number(prompt("Şifrenizi giriniz"));

if(username === "Mert" && passaword === 1234){
    console.log("Giriş başarılı.");
}else{
    alert("Kullanıcı adı veya şifre hatalı.")
    console.log("Giriş başarısız.");
}

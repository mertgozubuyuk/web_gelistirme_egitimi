const age = 20;
const isMember = true;
const hisPaid = true;

if(age>=18){
    if(isMember){
        if(hisPaid){
            console.log("Kursa başarıyla katıldınız.")
        }else{
             console.log("Üzgünüm kursa katılamadınız.Ücret ödemesi yapmamışsınız.")
        }
    }else{
         console.log("Üzgünüm kursa katılamadınız.Üyelik işleminiz tamamlanmamıştır.")
    }
}else{
    console.log("Üzgünüm kursa katılamadınız.Yaşınız 18'den büyük olmalıdır.")
}
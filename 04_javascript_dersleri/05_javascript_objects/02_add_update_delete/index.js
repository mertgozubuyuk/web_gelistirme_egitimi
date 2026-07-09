const employeeStatus = {
    Zeynep : "Görevde",
    Ali : "Toplantıda"
};

console.log("Başlangıçdaki Durum: " , employeeStatus);

//ADD(GÜNCELLEME)

employeeStatus.Ali = "Görevde";
employeeStatus["Zeynep"] = "Toplantıda";

console.log("Güncelleme: " , employeeStatus);

//UPDATE(EKLEME)

employeeStatus.Elif = "Eğitimde";
employeeStatus.Berk = "İzinde";

console.log("Ekleme: " , employeeStatus);

//DELETE(SİLME)

delete employeeStatus.Berk;
console.log("Silme: " , employeeStatus);

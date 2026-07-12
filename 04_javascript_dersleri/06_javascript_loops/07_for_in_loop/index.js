//KLASİK YÖNTEM
const employeeRoles = {
    Zeynep: "Frontend Developer",
    Ali: "Project Manager",
    Berk: "UI/UX Designer"
};

console.log(employeeRoles.Ali)
console.log(employeeRoles.Berk)
console.log(employeeRoles.Zeynep)

console.log("--------------------");


//MODERN YÖNTEM
for(let employee in employeeRoles){
    console.log(`${employee} isimli kişinin rolü: ${employeeRoles[employee]}`);
}

console.log("--------------------");


//NESNELERİ DİZİYE ÇEVİRME DURUMU
const cars = {
  BMW: 3,
  Mercedes: 5,
  Toyota: 7
};

console.log(Object.keys(cars));
console.log(Object.values(cars));
console.log(Object.entries(cars));

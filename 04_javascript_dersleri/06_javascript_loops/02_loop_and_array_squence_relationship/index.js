const cities = ["Ankara", "İstanbul", "İzmir", "Antalya", "Manisa", "Bolu"];

//Dizideki elemanları sırasıyla yazdırma
for(let i=0; i<cities.length; i++){
    console.log(cities[i]);
}

console.log("-----------------");

//Dizideki elemanları sırasıyla tersten yazdırma
for(let i=(cities.length - 1); i>=0; i--){
    console.log(cities[i]);
}


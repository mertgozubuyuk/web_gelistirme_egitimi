let salonOrder = [
    ["Ahmet", "Mehmet", "Selin"],
    ["İsmail", "Orkun", "Hakan"],
    ["Kerem", "Mert", "Elif"]
];

for(let order=0; order<salonOrder.length; order++){
    console.log("Sıra:", order+1);

    for(let students=0; students<salonOrder[order].length; students++){
        console.log(salonOrder[order][students]);
    }
}
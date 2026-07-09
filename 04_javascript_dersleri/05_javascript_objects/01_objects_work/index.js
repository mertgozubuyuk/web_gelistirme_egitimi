
const user = {
    userName : "Mert",
    followerCount : 165,
    explanation : "Kargalar sürüyle kartallar yalnız uçar",
    isSecret : true,
    interests : ["yazılım", "beşiktaş"],
    comments : [
        {
            userName : "ahmet123",
            comment : "Harika bir profil."
        },
        {
            userName : "emin45",
            comment : "Çok güzel bir fotoğraf."
        }
    ]
};

console.log(user);
console.log(user.userName);
console.log(user.followerCount);
console.log(user["explanation"]);
console.log(user["isSecret"]);
console.log(user.interests[0]);
console.log(user.comments[1].userName + ": " + user.comments[1].comment);


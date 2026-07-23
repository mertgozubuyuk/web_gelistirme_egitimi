const notes = [85, 90, 78, 92, 88];

const [firstNote, secondNote] = notes;

console.log(firstNote);
console.log(secondNote);
console.log(notes);

const student = {
  name: "Zeynep",
  age: 22,
  depertmant: "Yazılım Mühendisliği",
};

const {
  name,
  depertmant: section,
  age,
  university = "Beykoz Üniversitesi",
} = student;

const depertmant = "Faculty of Engineering";
console.log(name);
console.log(age);
console.log(section);
console.log(university);

console.log(depertmant);

const user = {
  userName: "Emir",
  address: {
    city: "İzmir",
    postalCode: 35000,
  },
};

const {
  userName,
  address: { city, postalCode },
} = user;

console.log(userName);
console.log(city);
console.log(postalCode);
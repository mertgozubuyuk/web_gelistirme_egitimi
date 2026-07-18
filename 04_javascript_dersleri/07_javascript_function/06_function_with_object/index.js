//EXAMPLE 1
const calculator = {
  collection: function (x, y) {
    return x + y;
  },

  subtraction: function (x, y) {
    return x - y;
  },

  multiplication: function (x, y) {
    return x * y;
  },

  division: function (x, y) {
    return x / y;
  },
};

console.log("6 + 3 = ", calculator.collection(6, 3));
console.log("6 - 3 = ", calculator.subtraction(6, 3));
console.log("6 x 3 = ", calculator.multiplication(6, 3));
console.log("6 / 3 = ", calculator.division(6, 3));

//EXAMPLE 2
const rectangleGeometry = {
  perimeter(x, y) {
    return 2 * (x + y);
  },

  area(x, y) {
    return x * y;
  },
};

console.log(
  "Kenarları 7  ve 8 olan dikdörtgenin çevresi: ",
  rectangleGeometry["perimeter"](7, 8),
);
console.log(
  "Kenarları 7  ve 8 olan dikdörtgenin alanı: ",
  rectangleGeometry["area"](7, 8),
);

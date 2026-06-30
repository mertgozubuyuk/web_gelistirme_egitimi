const day = prompt("Lütfen gün bilgisini giriniz");

switch (day) {
  case "Pazartesi":
    console.log("Pazartesi haftanın 1.günüdür.");
    break;

  case "Salı":
    console.log("Salı haftanın 2.günüdür.");
    break;

  case "Çarşamba":
    console.log("Çarşamba haftanın 3.günüdür.");
    break;

  case "Perşembe":
    console.log("Perşembe haftanın 4.günüdür.");
    break;

  case "Cuma":
    console.log("Cuma haftanın 5.günüdür.");
    break;

  case "Cumartesi":
    console.log("Cumartesi haftanın 6.günüdür.");
    break;

  case "Pazar":
    console.log("Pazar haftanın 7.günüdür.");
    break;

  default:
    console.log("Geçerli bir gün giriniz.(Not: Hafta isimleri büyük harfle başlar)");
    break;
}

 function functionName() {
    console.log("Selam!");
}

functionName();
tarihiYaz(); //HOİSTING

function tarihiYaz() {
  console.log("Bugünün tarihi:");
  console.log(new Date().toLocaleDateString());
}

/*file: ifeks.js*/
console.log('hej fra if eks');

//bilen kører med:
let hastighed = 60;

//Kører vi for stærkt?


if ( hastighed < 40 ) {
  resultat.innerHTML = "Du kører for langsomt!"
}

else {
  resultat.innerHTML = "Du kører derudaf!"
}

//Carlsberg test
var alder = 19;
  if (alder < 18) text = "Too young to buy alcohol!";
  else {
    resultat.innerHTML += "Velkommen"
  }


/*
//equality (se bogen javascript s. 34)
if ( hastighed <= 60 || hastighed < 46 ) {
  resultat.innerHTML = "Du kører med en passende hastighed"
}


else {
  resultat.innerHTML = "Du kører for hurtigt!"
}*/

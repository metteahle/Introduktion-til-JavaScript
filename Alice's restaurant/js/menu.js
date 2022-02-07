//menu.html

//nu skal vi bruge vores Json
menu = `{
  "Menu": [
    {
      "id": 1,
      "titel": "Onionrings",
      "beskrivelse": "Friterede løg",
      "pris": 30,
      "ret": "forret",
      "foto": "onionrings.png"
    },
    {
      "id": 2,
      "titel": "Græskarsuppe",
      "beskrivelse": "lækker græskarsuppe med hjemmelavede brødcrutoner",
      "pris": 45,
      "ret": "forret",
      "foto": "suppe.png"
    },
    {
      "id": 3,
      "titel": "Lasange",
      "beskrivelse": "lækker cremet lasange topppet med ost",
      "pris": 70,
      "ret": "hovedret",
      "foto": "lasagne.png"
    },
    {
      "id": 4,
      "titel": "Stegt flæsk",
      "beskrivelse": "Dansk stegt flæsk med kartofler og persillesovs",
      "pris": 119,
      "ret": "hovedret",
      "foto": "meat2.png"
    },
    {
      "id": 5,
      "titel": "Citrontærte",
      "beskrivelse": "Smagen af sommer der kombinerer det sure med det søde! Den perfekte dessert",
      "pris": 35,
      "ret": "dessert",
      "foto": "citrontart.png"
    },
    {
      "id": 6,
      "titel": "Sorbet is",
      "beskrivelse": "Lækket udvalg af sorbet is! ",
      "pris": 35,
      "ret": "dessert",
      "foto": "sorbet.png"
    },
    {
      "id": 7,
      "titel": "Whiskysovs",
      "beskrivelse": "Hjemmelavet whiskysovs evt. som tilbehør til stegt flæsk",
      "pris": 25,
      "ret": "tilbehør",
      "foto": "whiskey.png"
    }
  ]
}
`;

//loop der henter hele arrayet
const xxx = JSON.parse(menu);
console.log(xxx.Menu[0].titel)

//
for (let i=0; i<xxx.Menu.length; i++){

  if( xxx.Menu[i].ret == 'forret' ){ //forret henviser til navnet i JSON under titlen "ret"
        console.log('Desserter\n\n' + xxx.Menu[i].titel) //bare console.log ikke noget vigtigt
        starters.innerHTML += `
          <div class="menuTing">
            <h2> ${xxx.Menu[i].titel} </h2>
              <img src="images/${xxx.Menu[i].foto}" alt="${xxx.Menu[i].titel}">
              <p> ${xxx.Menu[i].beskrivelse} </p>
            <p> ${xxx.Menu[i].pris} kr. </p>
          </div>
        `
      }

      if( xxx.Menu[i].ret == 'hovedret' ){
            console.log('forretter\n\n' + xxx.Menu[i].titel)//bare console.log ikke noget vigtigt
            headdish.innerHTML += `
              <div class="menuTing">
                <h2> ${xxx.Menu[i].titel} </h2>
                  <img src="images/${xxx.Menu[i].foto}" alt="${xxx.Menu[i].titel}">
                  <p> ${xxx.Menu[i].beskrivelse} </p>
                <p> ${xxx.Menu[i].pris} kr. </p>
              </div>
            `
          }

          if( xxx.Menu[i].ret == 'dessert' ){
                console.log('Desserter\n\n' + xxx.Menu[i].titel)//bare console.log ikke noget vigtigt
                dessert.innerHTML += `
                  <div class="menuTing">
                    <h2> ${xxx.Menu[i].titel} </h2>
                      <img src="images/${xxx.Menu[i].foto}" alt="${xxx.Menu[i].titel}">
                      <p> ${xxx.Menu[i].beskrivelse} </p>
                    <p> ${xxx.Menu[i].pris} kr. </p>
                  </div>
                `
              }
    }

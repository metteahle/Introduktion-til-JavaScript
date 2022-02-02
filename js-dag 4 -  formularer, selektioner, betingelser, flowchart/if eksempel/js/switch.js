/*fil navn: js/switch.js
mere om switch på s. 50-51 i javascript bog*/


// datoopbjekt
let d = new Date();
let dag = d.getDay();

let ugedag = dag;
let day;

switch (ugedag) {

  //Søndag = 0

  case 1:
    day = 'Mandag 12:00 - 23:00';
    break;
  case 2:
    day = 'Tirsdag 12:00 - 23:00';
    break;
  case 3:
    day = 'Onsdag 17:00 - 23:00';
    break;
  case 4:
    day = 'Torsdag 18:00 - 22:15';
    break;
  case 5:
    day = 'Fredag 12:00 - 00:00';
    break;

  default:
    day = 'Weekend: Lukket'
}

info.innerHTML = 'I dag har vi åbent fra' + ' ' + day;

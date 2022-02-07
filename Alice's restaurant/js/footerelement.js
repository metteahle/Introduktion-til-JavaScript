/* Selvstudiedag 1 spørgsmål 2*/
//Kontaktinformation i Footer start
let contact = {
  name: 'Alices Restaurant',
  adress: 'Volden 32, 8000 Århus',
  phonenumber: 25423670,
  contactInfo: function(){
    return this.name +" "+ this.adress +" - "+ this.phonenumber;
      }
    }
  adress.innerHTML = contact.contactInfo();
//Kontaktinformation i footer slut



/* Selvstudiedag 1 spørgsmål 1  herfra og nedefter*/
    //Dag
const d = new Date();
const day = [
  'Søndag',
  'Mandag',
  'Tirsdag',
  'Onsdag',
  'Torsdag',
  'Fredag',
  'Lørdag',
]
whichday.innerHTML = day[ d.getDay() ];

    //Måned
const m = new Date();
const month = [
  'Januar',
  'Februar',
  'Marts',
  'April',
  'Maj',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'December'
]
whichmonth.innerHTML = month[ d.getMonth() ];

    //År
const y = new Date();
document.getElementById("whichyear").innerHTML = d.getFullYear();

    //Tid
const now = new Date()
  let hour = now.getHours()
  let minute = now.getMinutes()
  let second = now.getSeconds()

    if(minute < 10) {minute = '0' + minute}
    if(second < 10) {second = '0' + second}

    let time = 'Klokken er nu:' + hour + ':' + minute + ':' + second
    console.log(time)

    let greeting = 'God morgen!'
      if(hour > 11) {greeting = 'God eftermiddag!'}
      if(hour > 17) {greeting = 'God aften!'}
      console.log(greeting)
      //Men hvordan får jeg tiden ind på siden så den vises?
      document.getElementById("whattime").innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

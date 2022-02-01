//menubar
  // Get the button, and when the user clicks on it, execute myFunction
  document.getElementById("burger").onclick = function() {myFunction()};

  /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }



//Vis of fjern menukort knapper!
  //knap med billede
  function showImage(){
    let kode = `
      <aside class="menuimage">
        <h1>Dagens Menu</h1>
        <img src="images/menukort.png" alt="menu">
        <figcaption>Her ser du dagens menu</figcaption>
      </aside>
    `;

    document.getElementById('imageMenuOfTheDay').innerHTML = kode;
  }

  // og en funktion der sletter et billede
  function removeImage() {
  console.log('sletter billedet')
  document.getElementById('imageMenuOfTheDay').innerHTML = '';
  }

//Dagens citat
  let quote = [
    '"Den letteste dag under en slankekur er den tredje dag, for da har man nemlig allerede opgivet den."',
    '"Der findes ingen sandere kærlighed end kærlighed til mad."',
    '"Det første man taber under en slankekur er det gode humør."',
    '"Der er altid plads til dessert!"',
    '"Man skal nyde før man kan yde!"'
  ]

  //et tilfældigt tal
    function tilfaeldig(){
      return qoute [
        Math.floor(Math.random() * quote.length)
      ];
    }

    quoteOfTheDay.innerHTML = quote;


//Personaleliste
let namelist, workerslist = [
  'Martin Lundgreen - Kok',
  'Karoline Helt Hansen - Tjener',
  'Anna Greve Lauridsen - Tjener',
  'Erik Eriksen - Opvasker',
  'Preben Ludvigsen - Kok',
  'Alice Jensen - Ejer',
  'Henrik Larsen - Opvasker',
  'Ulla Killerich Mortensen - Tjener',
  'Ivar Nikolajsen - Tjener'
    ]

    workerslist.sort();

    for (namelist in workerslist){

    workers.innerHTML += '<li>' + workerslist[ namelist ] + '</li>';
  }


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

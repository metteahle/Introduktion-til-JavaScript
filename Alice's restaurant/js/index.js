
/* Selvstudiedag 2 punkt 4*/
//menubar
  //Når brugeren klikker på knappen udfører den myFunction
  document.getElementById("burger").onclick = function() {myFunction()};

  /* myFunction kører mellem at tilføje og fjerne show class, som bruges til at skjule og vise dropdown contentet*/
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }



//Vis of fjern menukort knapper!
  //knap med billede
  function showImage(){
    let kode = `
      <aside class="menuimage">
        <h1>Vores drinks</h1>
        <img src="images/drinkmenu.png" alt="menu">
        <figcaption>Her ser du vores udvalg af drinks</figcaption>
      </aside>
    `;

    document.getElementById('imageMenuOfTheDay').innerHTML = kode;
  }

  // og en funktion der sletter et billede
  function removeImage() {
  console.log('sletter billedet')
  document.getElementById('imageMenuOfTheDay').innerHTML = '';
  }

/* Selvstudiedag 1 spørgsmål 4*/
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

/*Selvstudiedag 4*/
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Replace the 'ytplayer' element with an <iframe> and
    // YouTube player after the API code downloads.
    var player;

    function onYouTubePlayerAPIReady() {
      player = new YT.Player('ytplayer', {
        height: '360',
        width: '640',
        videoId: 'TEWm8gtpvk0',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      })
    }

    /* Player kontrolleres af funktioner */
    function onPlayerReady(event) {
      console.log("player is ready");
      event.target.pauseVideo();
    }

    function playItSam(event) {
      console.log("player is ready");
      event.target.playVideo(); // event from player
    }

    function onPlayerStateChange() {
      console.log("player state change");

      if (event.data == YT.PlayerState.PLAYING && !done) {
        //setTimeout(stopVideo, 6000);
        done = true;
      }
    }

    /* is element visible? if ok playVideo() */
    var elementet = document.getElementById("synlig");

    window.addEventListener("scroll", function() {

      if (elFllVsbl(elementet)) {
        console.log("play video");
        player.playVideo(); // with player you can manipulate the video
      } else {
        console.log("pause video")
        player.pauseVideo();
      }
    }); // end eventlistener

    function elFllVsbl(el) {
      return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
    }



/* Selvstudiedag 1 spørgsmål 3*/
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

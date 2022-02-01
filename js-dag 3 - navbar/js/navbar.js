//burger.addEventListener('click', function(){ //når man klikker
  //navbar.innerHTML = `
  //<nav>
    //<ul>
      //<li><a href="#">Menukort</a></li>
      //<li><a href="#">Selskaber</a></li>
      //<li><a href="#">Book Bord</a></li>
      //<li><a href="#">Åbningstider</a></li>
      //<li><a href="#">Kontakt</a></li>
    //</ul>
  //</nav>
  //`
//})

//t.addEventListener('click', minFunction);

// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("burger").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

/*file name: booktable.html*/

/*Selvstudiedag 3 spørgsmål 2,3 og 4*/
btn1.addEventListener('click', function(){
  radio.style.display = 'block';
  navn.style.display = 'none';
})

btn2.addEventListener('click', function(){
  chooseday.style.display = 'block';
  radio.style.display = 'none';
})

btn3.addEventListener('click', function(){
  choosetime.style.display = 'block';
  chooseday.style.display = 'none';
})

btn4.addEventListener('click', function(){
  choosetime.style.display = 'none';
  tjek.style.display = 'block';
})

btn5.addEventListener('click', function(){
  tjek.style.display = 'none';
  lastField.style.display = 'block';
})


/*Forsøg på besvarelse af selvstudiedag 3 spørgsmål 5*/
function validateForm() {
let x = document.forms["myForm"]["fname"].value;
if (x == "") {
  alert("Navn skal udfyldes");
  return false;
}
}

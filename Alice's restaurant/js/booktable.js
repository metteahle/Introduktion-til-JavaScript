/*file name: booktable.html*/

/*Selvstudiedag 3 spørgsmål 2,3 og 4*/
btn1.addEventListener('click', function(){
  radio.style.display = 'block';
  navn.style.display = 'none';
})

btn2.addEventListener('click', function(){
  tjek.style.display = 'block';
  radio.style.display = 'none';
})

btn3.addEventListener('click', function(){
  tjek.style.display = 'none';
  lastField.style.display = 'block';
})



/*Forsøg på besvarelse af selvstudiedag 3 spørgsmål 5*/
/*( function ( ) {

  const form= document.getElementById( 'contact' )

  form.addEventListener( 'btn1' ,
		function ( event ) { validate( form, event ) } )
} ) ( )

function validate( form, event ) {
  let value = form.elements[ 'Name' ].value
  if( value === '' ) {
    alert( 'Please Enter Your Name' )
	event.preventDefault( ) ; return }

  value = form.elements[ 'Email' ].value
  if( ( value === '' ) || ( value.indexOf('@') === -1 ) ||
  ( value.indexOf('.') === -1 ) ) {
    alert( 'Please Enter A Valid Email Address' )
	event.preventDefault( ) }
}*/

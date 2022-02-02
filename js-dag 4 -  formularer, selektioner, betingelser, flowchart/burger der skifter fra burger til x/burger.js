burger.addEventListener('click', function() {
  visBurgerIgen.style.display = 'block';
  burgerNav.style.display = 'block';
  burger.style.display = 'none';
  besked.style.display = 'block';
})

visBurgerIgen.addEventListener('click', function() {
  visBurgerIgen.style.display = 'none';
  burger.style.display = 'block';
  burgerNav.style.display = 'none';
})

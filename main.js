var $racecar = document.querySelector('.racecar');
document.addEventListener('keydown', changeDirection);

function changeDirection(event) {
  if (event.key === 'w') {
    $racecar.setAttribute('class', 'racecar north');
  } else if (event.key === 'a') {
    $racecar.setAttribute('class', 'racecar west');
  } else if (event.key === 's') {
    $racecar.setAttribute('class', 'racecar south');
  } else if (event.key === 'd') {
    $racecar.setAttribute('class', 'racecar east');
  }
}

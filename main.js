/* global data */

var $racecar = document.querySelector('.racecar');

document.addEventListener('keydown', changeDirection);
document.addEventListener('keydown', handleSpacebar);

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

var distance = 0;
var interval = null;

function handleSpacebar(event) {
  if (event.keyCode === 32 && data.engineRunning === false) {
    interval = setInterval(moveCar, 16);
    data.engineRunning = true;
  } else if (event.keyCode === 32 && data.engineRunning === true) {
    clearInterval(interval);
    data.engineRunning = false;
  }
}

function moveCar(event) {
  distance++;
  $racecar.style.left = distance + 'rem';
  data.xCoordinate = distance;
}

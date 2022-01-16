var $imgElement = document.querySelector('img');
var direction = $imgElement.style;
var intervalID = null;

window.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {

  if (event.key === 'w') {
    $imgElement.className = 'north';
    data.carDirection = 'north';

  } else if (event.key === 'a') {
    $imgElement.className = 'west';
    data.carDirection = 'west';

  } if (event.key === 's') {
    $imgElement.className = 'south';
    data.carDirection = 'south';

  } else if (event.key === 'd') {
    $imgElement.className = 'east';
    data.carDirection = 'east';

  }

  if (event.key === ' ') {
    if (!intervalID) {
      intervalID = setInterval(moveCar, 16);
    } else {
      clearInterval(intervalID);
      intervalID = null;
    }
  }
}

var data = {
  carDirection: null,
  location: {
    x: direction.left,
    y: direction.top
  }
};

data.location.x = 5;
data.location.y = 5;

function moveCar() {
  if ($imgElement.className === 'east') {
    direction.left = (data.location.x * 5) + 'px';
    data.location.x += 5;
  } else if ($imgElement.className === 'south') {
    direction.top = (data.location.y * 5) + 'px';
    data.location.y += 5;
  } else if ($imgElement.className === 'west') {
    direction.left = (data.location.x * 5) + 'px';
    data.location.x -= 5;
  } else if ($imgElement.className === 'north') {
    direction.top = (data.location.y * 5) + 'px';
    data.location.y -= 5;
  }
}

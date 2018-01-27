
function repeatDown(total) {
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
  }
}

function repeatUp(total) {
  var count = 0;
  while (count < total) {
    up();
    count = count + 1;
  }
}
  
function repeatRight(total) {
  var count = 0;
  while (count < total) {
    right();
    count = count + 1;
  }
}

function repeatLeft(total) {
  var count = 0;
  while (count < total) {
    left();
    count = count + 1;
  }
}

repeatDown(9);
repeatRight(9)
repeatUp(9)
repeatLeft(9)

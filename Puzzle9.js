
function repeatDown(total) {
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
    setColor("red");
  }
}

function repeatUp(total) {
  var count = 0;
  while (count < total) {
    up();
    count = count + 1;
    setColor("red");
  }
}
  
function repeatRight(total) {
  var count = 0;
  while (count < total) {
    right();
    count = count + 1;
    setColor("red");
  }
}

function repeatLeft(total) {
  var count = 0;
  while (count < total) {
    left();
    count = count + 1;
    setColor("red");
  }
}

repeatDown(9);
repeatRight(9)
repeatUp(9)
repeatLeft(9)

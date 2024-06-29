const heading = document.querySelector('h1');

// const start = document.querySelector('#start');
// const stop = document.querySelector('#stop');

function RandomColor() {
  let hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
let changes;
const starts = function () {
  if (!changes) {
    changes = setInterval(change, 1000);
  }
  function change() {
    document.body.style.backgroundColor = RandomColor();
  }
};

const stops = function () {
  clearInterval(changes);
  changes = null;
};

document.querySelector('#start').addEventListener('click', starts);
document.querySelector('#stop').addEventListener('click', stops);

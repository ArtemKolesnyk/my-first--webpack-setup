const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const INTERVAL = 2000;
const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body')
}

refs.btnStart.addEventListener('click', startColorBody);
refs.btnStop.addEventListener('click', stopColorBody);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function addRandomColorBody() {
  const min = 0;
  const max = colors.length - 1;
  let i = randomIntegerFromInterval(min, max);
  refs.body.style.background = colors[i];
}

function startColorBody() {
  startId = setInterval(() => {
    addRandomColorBody();
  }, INTERVAL); 
}

function stopColorBody() {
  clearInterval(startId);
}
 

  



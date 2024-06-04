const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapsList = document.getElementById('laps');

let startTime, elapsedTime, intervalId, lapCount = 0;

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);

function startTimer() {
  startTime = Date.now();
  elapsedTime = 0;
  intervalId = setInterval(updateTime, 10);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  lapBtn.disabled = false;
}

function pauseTimer() {
  clearInterval(intervalId);
  elapsedTime += Date.now() - startTime;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  lapBtn.disabled = true;
}

function resetTimer() {
  clearInterval(intervalId);
  startTime = null;
  elapsedTime = 0;
  display.textContent = '00:00:00';
  lapsList.innerHTML = '';
  lapCount = 0;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  lapBtn.disabled = true;
}

function updateTime() {
  const now = Date.now();
  const totalTime = elapsedTime + now - startTime;
  const minutes = Math.floor((totalTime / 1000) / 60);
  const seconds = Math.floor((totalTime / 1000) % 60);
  const milliseconds = Math.floor((totalTime / 10) % 100);
  const formattedTime = `<span class="math-inline">\{minutes\.toString\(\)\.padStart\(2, '0'\)\}\:</span>{seconds.toString().padStart(2, '0')}

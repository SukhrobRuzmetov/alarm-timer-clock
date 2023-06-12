var timerInterval;
var startTime;
var pausedTime = 0;
var isPaused = false;

function startTimer() {
  if (isPaused) {
    startTime = Date.now() - pausedTime;
  } else {
    startTime = Date.now();
  }

  timerInterval = setInterval(updateTimer, 1000);
  isPaused = false;
}

function pauseTimer() {
  clearInterval(timerInterval);
  pausedTime = Date.now() - startTime;
  isPaused = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById("timer").textContent = "00:00:00";
  pausedTime = 0;
  isPaused = false;
}

function updateTimer() {
  var elapsedTime = Date.now() - startTime + pausedTime;
  var seconds = Math.floor(elapsedTime / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;

  document.getElementById("timer").textContent = 
    leadingZero(hours) + ":" + leadingZero(minutes) + ":" + leadingZero(seconds);
}

function leadingZero(number) {
  return number < 10 ? "0" + number : number;
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
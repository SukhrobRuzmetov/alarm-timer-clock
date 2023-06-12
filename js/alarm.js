// Function to play the alarm sound
function playAlarmSound() {
    // Replace 'alarm.mp3' with the path to your own alarm sound file
    var alarmSound = new Audio('xoroz.wav');
    alarmSound.play();
  }
  
  // Function to display the current time
  function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Pad single digits with leading zeros
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = timeString;
  }
  
  // Function to set the alarm
  function setAlarm() {
    var alarmTime = document.getElementById("alarmTime").value;
  
    if (!alarmTime) {
      alert("Please enter a valid alarm time!");
      return;
    }
  
    var currentTime = new Date();
    var alarm = new Date(alarmTime);
  
    if (currentTime > alarm) {
      alert("The entered time has already passed!");
      return;
    }
  
    var timeToAlarm = alarm - currentTime;
  
    // Start the alarm after the specified time has elapsed
    setTimeout(function() {
      playAlarmSound();
      alert("Alarm! Wake up!");
    }, timeToAlarm);
  }
  
  // Display the current time every second
  setInterval(displayTime, 1000);
  
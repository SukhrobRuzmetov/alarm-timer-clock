let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

// // digital clock

// let hours = document.getElementById("hours");
// let minutes = document.getElementById("minutes");
// let seconds = document.getElementById("seconds");
// let ampm = document.getElementById("ampm");

// let h = new Date().getHours();
// let m = new Date().getMinutes();
// let s = new Date().getSeconds();




// hours.innerHTML = h;
// minutes.innerHTML = m;
// seconds.innerHTML = s;
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

function updateClock() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  // Convert to 12-hour format
  let amOrPm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  h = h ? h : 12; // 0 should be converted to 12

  // Add leading zeros to minutes and seconds
  m = addLeadingZero(m);
  s = addLeadingZero(s);

  // Update the HTML elements
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = amOrPm;
}

// Add leading zero to single-digit numbers
function addLeadingZero(num) {
  return num < 10 ? "0" + num : num;
}

// Update the clock every second
setInterval(updateClock, 1000);

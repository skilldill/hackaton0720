const timerDisplay = document.getElementById('timer-display');
const mobileTimerDisplay = document.getElementById('mobile-timer-display');

// Set the date we're counting down to
let countDownDate = new Date("August 7, 2020 12:00:00").getTime();

function addZeroStart(val) {
  if (val < 10) {
    return `0${val}`;
  }

  return val;
}

let days;
let hours;
let minutes;
let seconds;

let consoleTime;

// Update the count down every 1 second
let x = setInterval(function() {

  // Get todays date and time
  let now = new Date().getTime();

  // Find the distance between now an the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  consoleTime = days + " days " + addZeroStart(hours) + ":"+ addZeroStart(minutes) + ":" + addZeroStart(seconds);
  let daysWord;

  const daysStr = days.toString();
  const daysLastChar = daysStr[daysStr.length - 1];

  if (daysLastChar === '1') {
    daysWord = 'день'
  } else if (daysLastChar === '2' || daysLastChar === '3' || daysLastChar === '4') {
    daysWord = 'дня'
  } else {
    daysWord = 'дней'
  }
  
  const timing = days + " " + daysWord + " <br>" + addZeroStart(hours) + ":"+ addZeroStart(minutes) + ":" + addZeroStart(seconds);

  if (!!timerDisplay) {
    timerDisplay.innerHTML = timing;
  }

  if (!!mobileTimerDisplay) {
    mobileTimerDisplay.innerHTML = timing;
  }

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    timerDisplay.innerText = "Время вышло";
  }
}, 1000);
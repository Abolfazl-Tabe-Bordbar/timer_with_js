var timer_hour = document.getElementById("timer_hour");
var timer_minutes = document.getElementById("timer_minutes");
var timer_seconds = document.getElementById("timer_seconds");

var timer_start = document.getElementById("timer_start");
var timer_rest = document.getElementById("timer_rest");
var timer_stop = document.getElementById("timer_stop");

var hour = 0;
var minutes = 0;
var seconds = 0;

var start_timer;
timer_start.addEventListener("click", function () {
  start_timer = setInterval(function () {
    seconds++;
    timer_seconds.innerHTML = seconds;
    timer_minutes.innerHTML = minutes;
    timer_hour.innerHTML = hour;
    if (seconds == 60) {
      minutes += 1;
      seconds = 0;
    } else if (minutes == 60) {
      hour += 1;
      minutes = 0;
    }
  }, 1000);
  timer_start.style.display = "none";
  timer_stop.style.display = "flex";
});
timer_stop.addEventListener("click", function () {
  clearInterval(start_timer);
  timer_start.style.display = "flex";
  timer_stop.style.display = "none";
});
timer_rest.addEventListener("click", function () {
  clearInterval(start_timer);
  hour = 0;
  minutes = 0;
  seconds = 0;
  timer_seconds.innerHTML = seconds;
  timer_minutes.innerHTML = minutes;
  timer_hour.innerHTML = hour;
  timer_start.style.display = "flex";
  timer_stop.style.display = "none";
});

//--------------------------------------------------
var timer2_value_hour = document.getElementById("timer2_get_hour");
var timer2_value_minutes = document.getElementById("timer2_get_minutes");
var timer2_value_seconds = document.getElementById("timer2_get_seconds");

var timer2_show_hour = document.getElementById("timer2_show_hour");
var timer2_show_minutes = document.getElementById("timer2_show_minutes");
var timer2_show_seconds = document.getElementById("timer2_show_seconds");

var timer2_start = document.getElementById("timer2_start");
var timer2_rest = document.getElementById("timer2_rest");
var timer2_stop = document.getElementById("timer2_stop");

var hour2 = 0;
var minutes2 = 0;
var seconds2 = 0;

var audio = new Audio("a.mp3");

var reset_hour2 = 0;
var reset_minutes2 = 0;
var reset_seconds2 = 0;

var start_timer2;
timer2_start.addEventListener("click", function () {
  hour2 = timer2_value_hour.value;
  minutes2 = timer2_value_minutes.value;
  seconds2 = timer2_value_seconds.value;
  if (hour2 == 0 && minutes2 == 0 && seconds2 == 0) {
    timer2_value_hour.style.borderColor = "red";
    timer2_value_minutes.style.borderColor = "red";
    timer2_value_seconds.style.borderColor = "red";
  } else {
    reset_hour2 = timer2_value_hour.value;
    reset_minutes2 = timer2_value_minutes.value;
    reset_seconds2 = timer2_value_seconds.value;

    timer2_value_hour.style.display = "none";
    timer2_value_minutes.style.display = "none";
    timer2_value_seconds.style.display = "none";

    timer2_show_hour.style.display = "flex";
    timer2_show_minutes.style.display = "flex";
    timer2_show_seconds.style.display = "flex";

    timer2_start.style.display = "none";
    timer2_stop.style.display = "flex";

    timer2_show_hour.innerHTML = hour2;
    timer2_show_minutes.innerHTML = minutes2;
    timer2_show_seconds.innerHTML = seconds2;

    start_timer2 = setInterval(function () {
      seconds2--;
      if (seconds2 == 0) {
        if (minutes2 != 0) {
          minutes2 -= 1;
          seconds2 = 60;
        } else if (hour2 != 0) {
          hour2 -= 1;
          minutes2 = 60;
          seconds2 = 60;
        } else {
          audio.play();
          clearInterval(start_timer2);
          hour2 = 0;
          minutes2 = 0;
          seconds2 = 0;
          timer2_show_hour.innerHTML = hour2;
          timer2_show_minutes.innerHTML = minutes2;
          timer2_show_seconds.innerHTML = seconds2;
        }
      }

      timer2_show_hour.innerHTML = hour2;
      timer2_show_minutes.innerHTML = minutes2;
      timer2_show_seconds.innerHTML = seconds2;
    }, 1000);
  }
});

timer2_stop.addEventListener("click", function () {
  clearInterval(start_timer2);
  timer2_start.style.display = "flex";
  timer2_stop.style.display = "none";
  audio.pause();
  timer2_value_hour.value = hour2;
  timer2_value_minutes.value = minutes2;
  timer2_value_seconds.value = seconds2;
});

timer2_rest.addEventListener("click", function () {
  timer2_show_hour.style.display = "none";
  timer2_show_minutes.style.display = "none";
  timer2_show_seconds.style.display = "none";

  timer2_value_hour.style.display = "inline-block";
  timer2_value_minutes.style.display = "inline-block";
  timer2_value_seconds.style.display = "inline-block";

  timer2_value_hour.value = reset_hour2;
  timer2_value_minutes.value = reset_minutes2;
  timer2_value_seconds.value = reset_seconds2;

  timer2_start.style.display = "flex";
  timer2_stop.style.display = "none";
});

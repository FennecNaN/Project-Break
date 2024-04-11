
function currentTime() {
  let date = new Date();
  // console.log(typeof date)
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // display zeros
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  // messages

  let message = "";
  if (hours >= 0 && hours < 7) {
    message = "Es hora de descansar. Apaga y sigue mañana";
  } else if (hours >= 7 && hours < 12) {
    message = "Buenos días, desayuna fuerte y a darle al código";
  } else if (hours >= 12 && hours < 14) {
    message = "Echa un rato más pero no olvides comer";
  } else if (hours >= 14 && hours < 16) {
    message = "Espero que hayas comido";
  } else if (hours >= 16 && hours < 18) {
    message = "Buenas tardes, el último empujón";
  } else if (hours >= 18 && hours < 22) {
    message = "Esto ya son horas extras, es hora de parar!";
  } else {
    message = "Buenas noches, es hora de pensar en parar y descansar";
  }

  // display DOM

  let domClock = document.getElementById("clock");
  domClock.innerHTML = `${hours}:${minutes}:${seconds}`;

  let domDate = document.getElementById("date");
  domDate.innerHTML = `${day}/${month}/${year}`;

  let domMessage = document.getElementById("message");
  domMessage.innerHTML = message;
}


setInterval(currentTime, 1000);

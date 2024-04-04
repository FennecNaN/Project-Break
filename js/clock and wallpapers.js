
let date = new Date()

function currentTime() {

    // console.log(typeof date)
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    let day = date.getDate()
    let month = date.getMonth() + 1;
    let year = date.getFullYear()


    // display zeros
    hours = (hours <10) ? "0" + hours : hours;
    minutes = (minutes <10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    day = (day <10) ? "0" + day : day;
    month = (month <10) ? "0" + month : month;

    // messages

    let message = "";
    if (hours >= 0 && hours < 7) {
        message = 'Es hora de descansar. Apaga y sigue mañana';
    } else if (hours >= 7 && hours < 12) {
        message = 'Buenos días, desayuna fuerte y a darle al código';
    } else if (hours >= 12 && hours < 14) {
        message = 'Echa un rato más pero no olvides comer';
    } else if (hours >= 14 && hours < 16) {
        message = 'Espero que hayas comido';
    } else if (hours >= 16 && hours < 18) {
        message = 'Buenas tardes, el último empujón';
    } else if (hours >= 18 && hours < 22) {
        message = 'Esto ya son horas extras, es hora de parar!';
    } else {
        message = 'Buenas noches, es hora de pensar en parar y descansar';
    }

    
    // display DOM

    let domClock = document.getElementById("clock")
    domClock.innerHTML= `${hours}:${minutes}:${seconds}`;

    let domDate = document.getElementById("date")
    domDate.innerHTML= `${day}/${month}/${year}`;

    let domMessage = document.getElementById("message")
    domMessage.innerHTML = message
}


// Display wallpaperss

const imgMorning = [
    'url("img/img1.jpg")',
    'url("img/img2.jpg")',
    'url("img/img3.jpg")',
];

const imgAfternoon = [
    'url("img/img4.jpg")',
    'url("img/img5.jpg")',
    'url("img/img6.jpg")',
];

const imgNight = [
    'url("img/img7.jpg")',
    'url("img/img8.jpg")',
    'url("img/img9.jpg")',
    'url("img/img10.jpg")',
];


function getWallpaper (){

        const hour = date.getHours();
    
        if (hour >= 6 && hour < 12) {
            return imgMorning[Math.floor(Math.random() * imgMorning.length)];
        } else if (hour >= 12 && hour < 20) {
            return imgAfternoon[Math.floor(Math.random() * imgAfternoon.length)];
        } else {
            return imgNight[Math.floor(Math.random() * imgNight.length)];
        }
    }
    
    // Función para cambiar la imagen de fondo
    function changeWallpaper() {
        const backgroundImage = getWallpaper();
        document.body.style.backgroundImage = backgroundImage;
    }



setInterval(currentTime,1000)
changeWallpaper();
setInterval(changeWallpaper,15000)




// Display wallpapers

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

function getWallpaper() {
  let date = new Date();
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

changeWallpaper();
setInterval(changeWallpaper, 15000);

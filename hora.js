var content3 = document.getElementById('contenido1');
var dat = document.getElementById('date');
var millon = document.getElementById('millones');

function updateImage() {
  const imgFormato = document.getElementById('img-formato');


  console.log("window.innerWidth",window.innerWidth)
  if (window.innerWidth <= 600) {
    imgFormato.src = `img/cuadrada.mp4`;
    
  } else if (window.innerWidth <= 768) {
    imgFormato.src = `img/rectangular.mp4`;

  } 
}

async function init() {
    updateClock();

}
function updateClock() {
  const now = new Date();
  let hora24 = now.getHours();
  if (hora24 > 12) {
    hours = (hora24 - 12);
  }
  else {
    hours = hora24;
  }
  let minutes = now.getMinutes();
  let ampm = hora24 >= 12 ? 'PM' : 'AM';

   
  // Agrega un cero delante si el número es menor a 10
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  document.getElementById('millones').innerText = `${hours}:${minutes}`;
  document.getElementById('hour').innerText = `${ampm}`;
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);


window.addEventListener('resize', updateImage);
window.addEventListener('load', updateImage);

init();

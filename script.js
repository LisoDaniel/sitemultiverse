const daysEl = document.getElementById("days");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

const newYears = "14 Apr 2024"

function countdonwn(){

    const Datadoevento = new Date(newYears);
    const currentDate = new Date();

    const TotalSegundos = (Datadoevento - currentDate) / 1000;

    const days = Math.floor(TotalSegundos / 3600/ 24);
    const horas = Math.floor(TotalSegundos / 3600) % 24;
    const minutos = Math.floor(TotalSegundos / 60) % 60;
    const segundos = Math.floor(TotalSegundos) % 60;

    daysEl.innerHTML = days;
    horasEl.innerHTML = formatTime(horas);
    minutosEl.innerHTML = formatTime (minutos);
    segundosEl.innerHTML = formatTime (segundos);


} 
   function formatTime (time){
    return time < 10 ? `0${time}` : time;
}

countdonwn();

setInterval(countdonwn, 1000);

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 120 * i);
    });
  }
  const titulo = document.querySelector('h1');
  typeWriter(titulo);





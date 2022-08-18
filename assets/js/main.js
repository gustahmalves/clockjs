const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const clock = setInterval(function time(){
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let secs = dateToday.getSeconds();

  if(hr < 10){
    hr = '0'+hr;
  }
  if(min < 10){
    min = '0'+min;
  }
  if(secs < 10){
    secs = '0'+secs;
  }

  horas.innerText = hr;
  minutos.innerText = min;
  segundos.innerText = secs;

  
})


document.addEventListener('DOMContentLoaded', function () {
    const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds');

console.log("El script de JavaScript se está ejecutando.");
 //fecha a futuro
 const countdouwnDate = new Date('Dec 23,2023 00:00:00').getTime();

 let interval = setInterval(function(){
    //obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //obtener las distancias entre ambas fechas 
    let distance = countdouwnDate - now;

    //calculos a dias , hrs, m ,sg
    let days = Math.floor(distance /(1000 *60 *60 *24)); 
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 *60 * 60));
    let minutes = Math.floor((distance % (1000*60*60))/(1000 *60));
    let seconds = Math.floor((distance % (1000*60))/(1000));

    //escribimos resultados 
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);
},1000);



const imagenesCarrusel = document.querySelectorAll('.imagen-salon');
let index = 0; // Índice de la imagen actual

function mostrarImagen(index) {
    // Oculta todas las imágenes
    imagenesCarrusel.forEach((imagen) => {
        imagen.classList.remove('active');
    });

    // Muestra la imagen actual
    imagenesCarrusel[index].classList.add('active');
}

// Función para avanzar al siguiente slide
function siguienteSlide() {
    index = (index + 1) % imagenesCarrusel.length;
    mostrarImagen(index);
}

// Función para retroceder al slide anterior
function anteriorSlide() {
    index = (index - 1 + imagenesCarrusel.length) % imagenesCarrusel.length;
    mostrarImagen(index);
}

// Lógica para cambiar automáticamente las imágenes cada cierto tiempo (opcional)
setInterval(siguienteSlide, 5000); // Cambia de imagen cada 5 segundos, ajusta el tiempo según tus preferencias

// Mostrar la primera imagen al cargar la página
mostrarImagen(index);
});

// Obtener elementos HTML
const player = document.querySelector('#spotify-player iframe');
const playPauseButton = document.querySelector('#play-pause');
const volumeSlider = document.querySelector('#volume');
const muteButton = document.querySelector('#mute');

// Evento para reproducir/pausar la canción
playPauseButton.addEventListener('click', () => {
    player.contentWindow.postMessage('{"event":"command","func":"togglePlay"}', '*');
});

// Evento para ajustar el volumen
volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;
    player.contentWindow.postMessage(`{"event":"command","func":"setVolume","args":[${volume}]}`, '*');
});

// Evento para silenciar/desilenciar
muteButton.addEventListener('click', () => {
    player.contentWindow.postMessage('{"event":"command","func":"mute"}', '*');
});





   








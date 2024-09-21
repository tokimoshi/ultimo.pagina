// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "it's you", time: 9, duration: 3 },
  { text: "it's always you", time: 10, duration: 4.2 },
  { text: "If I'm ever gonna fall in love", time: 12, duration: 5 },
  { text: "I know it's gon' be you", time: 14, duration: 5.6 },
  { text: "it's you", time: 16, duration: 5.7 },
  { text: "it's always you", time: 18, duration: 5.8 },
  { text: "Met a lot of people, but nobody feels like you", time: 20, duration: 10 },
  { text: "So please don't break my heart", time: 22, duration: 10.5},
  { text: "don't tear me apart", time: 24, duration: 11 },
  { text: "I know how it starts", time: 26, duration: 11.5},
  { text: "trust me, I've been broken before", time: 28,duration: 13 },
  { text: "Don't break me again", time: 30,duration: 12.5},
  { text: "I am delicate", time: 32, duration: 13},
  { text: "Please don't break my heart", time: 34, duration: 13.5 },
  { text: "trust me, I've been broken before", time: 36, duration: 14.5 },
  { text: "I've been broken yeah,", time: 38, duration:15},
  { text: "I know how it feels", time: 40, duration: 15.3},
  { text: "To be open and then find out your love isn't real", time: 42,duration: 18 },
  { text: "I'm still hurting", time: 44, duration: 18.5},
  { text: "yeah, I'm hurting inside", time: 46, duration: 18.9 },
  { text: "I'm so scared to fall in love", time: 48, duration: 19.7 },
  { text: "but if it's you, then I'll try", time: 50, duration: 20.5},
  { text: "eres tuuuuu mi princesita hermosa me cuesta hacer esto despues lo acabo te amoo<br> mi futura esposa no me olvides por favor cada que veas a un chico recuerdate de<br> mi que me estoy eforzado por ti", time: 52, duration: 100 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + line.duration
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
// juego.js
let eleccionJugador1 = null;
let eleccionJugador2 = null;

function jugar(opcion, jugador) {
    if (jugador === 1) {
        eleccionJugador1 = opcion;
        // Jugador 2 controlado por computadora
        let opciones = ['piedra', 'papel', 'tijeras'];
        eleccionJugador2 = opciones[Math.floor(Math.random() * opciones.length)];
        
        // Ocultar opciones
        document.getElementById('jugador1').style.display = 'none';
        document.getElementById('jugador2').style.display = 'none';
        
        // Mostrar resultado
        mostrarResultado();
        document.getElementById('resultado').style.display = 'block';
    }
}

function revancha() {
    eleccionJugador1 = null;
    eleccionJugador2 = null;
    document.body.style.backgroundColor = 'rgb(255, 200, 200)';
    document.getElementById('textoResultado').innerText = '';
    document.getElementById('imagenResultado').src = 'inicio.png';
    document.getElementById('jugador1').style.display = 'block';
    document.getElementById('jugador2').style.display = 'block';
    document.getElementById('resultado').style.display = 'none';
}


function mostrarResultado() {
    let ganador = determinarGanador(eleccionJugador1, eleccionJugador2);
    let colorFondo = 'rgb(121, 255, 139)'; // Color de fondo para empate
    let textoResultado; // Variable para almacenar el texto del resultado
    let colorTexto =  'rgb(121, 255, 139)';
    if (ganador === 0) { // Caso de empate
        textoResultado = 'Empate';
        document.getElementById('imagenResultado').src = eleccionJugador1 + '-' + eleccionJugador2 + '.png'; 
    } else if (ganador === 1) {

        colorFondo = 'rgb(252, 70, 70)'; // Color de fondo para victoria del Jugador 1
        textoResultado = 'Ganador: Jugador 1';
        colorTexto = 'rgb(252, 70, 70)';
        document.getElementById('imagenResultado').src = eleccionJugador1 + '-' + eleccionJugador2 + '.png';
    } else if (ganador === 2) {
        colorFondo = 'blueviolet'; // Color de fondo para victoria del Jugador 2
        textoResultado = 'Ganador: Jugador 2';
        colorTexto = 'blueviolet';
        document.getElementById('imagenResultado').src = eleccionJugador2 + '-' + eleccionJugador1 + '.png';
    }
    document.getElementById('resultado').style.color = colorTexto;
    document.body.style.backgroundColor = colorFondo;
    document.getElementById('textoResultado').innerText = textoResultado;
}

function determinarGanador(j1, j2) {
    if (j1 === j2) return 0; // Empate
    if ((j1 === 'piedra' && j2 === 'tijeras') ||
    (j1 === 'papel' && j2 === 'piedra') ||
    (j1 === 'tijeras' && j2 === 'papel')) {
    return 1; // Jugador 1 gana
} else {
    return 2; // Jugador 2 gana
}
}



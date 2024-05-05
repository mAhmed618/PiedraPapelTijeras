# Piedra Papel y Tijeras :new_moon: :page_with_curl: :scissors:

Para desarrollar este juego y teniendo en cuenta que no cuento con pareja, me he tomado la libertad de pedirle una mano a un amigo mío que es poseedor del título de DAW. Dicho esto, su ayuda se ciñó a dudas sobre implementación de ciertos problemas a la hora de escribir las funciones correspondientes en JavaScript. Me gustaría añadir que me hubiese gustado aumentar las funcionalidades del mismo, como por ejemplo que pudieses jugar dos personas aparte de poder jugar contra la CPU. Se podría implementar, pero no cuento con los recursos suficientes para llevar a cabo dichas ideas (recursos = tiempo). Había empezado a implementar también una pantalla previa donde podrías seleccionar si jugar 2 personas o uno, pero ante la aparición de múltiples fallos tuve que decidir eliminar esta opción ya que me llevaría más tiempo del que tengo disponible. Por último, destacar que en el código he dejado algunas partes escritas de cierta manera pensando en la futura posible implementación de la opción de que se puedan jugar dos personas, como la parte de jugador dos del código HTML, etc.

Para Empezar a desarrollar nuestro juego y ya que no contamos con una pareja vamos a definir unos requisitos funcionales y no funcionales que queremos que siga nuestro juego para ello vaos a pasar al **ERS.**

### **Especificacion de Requisitos Software:**

Estos requisitos ayudarán a guiar el desarrollo y asegurarse de que el juego cumple con las expectativas y necesidades de los usuarios.

### **Requisitos Funcionales:**

1. **RF01 - Inicio del juego**: El juego debe cargar correctamente en cualquier navegador moderno sin necesidad de instalaciones adicionales.
2. **RF02 - Selección de jugada por el usuario**: Los usuarios deben poder seleccionar entre piedra, papel o tijeras a través de clics en imágenes correspondientes.
3. **RF03 - Generación automática de jugada por la computadora**: El sistema generará automáticamente una jugada (piedra, papel o tijeras) para la computadora.
4. **RF04 - Comparación de jugadas**: El sistema debe comparar la selección del jugador con la de la computadora y determinar el ganador según las reglas del juego.
5. **RF05 - Visualización de resultados**: Mostrar el resultado de la partida inmediatamente después de que se determina el ganador.
6. **RF06 - Opción de revancha**: Permitir al usuario iniciar una nueva partida sin necesidad de recargar la página completa.
7. **RF07 - Mostrar imágenes dinámicamente**: Las imágenes de las jugadas deben cambiarse o actualizarse según la selección del jugador y la jugada de la computadora.
8. **RF08 - Control de flujo del juego**: Manejo de la lógica del juego para permitir transiciones fluidas entre selección de jugada, visualización de resultado y reinicio del juego.

### **Requisitos No Funcionales:**

1. **RNF01 - Usabilidad**: El juego debe ser fácil de entender y usar, con una interfaz intuitiva adecuada para todas las edades.
2. **RNF02 - Rendimiento**: El juego debe responder rápidamente a las entradas del usuario, idealmente en menos de dos segundos para todas las acciones.
3. **RNF03 - Compatibilidad**: Debe ser compatible y funcionar de manera uniforme en diferentes navegadores como Chrome, Firefox, y Safari, además de ser responsive para adaptarse a dispositivos móviles.
4. **RNF04 - Escalabilidad**: El diseño debe permitir la adición de nuevas características, como modos de juego diferentes o niveles de dificultad, sin cambios mayores en el código base.
5. **RNF05 - Estética**: El juego debe tener un diseño atractivo y coherente con los estilos definidos en el CSS, manteniendo una experiencia visual agradable.
6. **RNF06 - Accesibilidad**: Implementar prácticas de diseño accesible, asegurando que el juego sea usable por personas con diversas capacidades.
7. **RNF07 - Seguridad**: Aunque el juego no maneje datos sensibles, debe asegurarse de que el código sea seguro frente a inyecciones de código o manipulaciones desde la consola del navegador

### **Requisitos de Información:**

1. **RI01 - Registro de jugadas**: El sistema debe mantener en memoria el registro de la elección actual del jugador y la computadora durante una partida.
2. **RI02 - Resultados de la partida**: El sistema debe almacenar temporalmente el resultado de cada partida para su visualización, incluyendo el ganador y las jugadas realizadas por el jugador y la computadora.
3. **RI04 - Configuración del juego**: El sistema debe aplicar y respetar los estilos visuales y comportamientos especificados en los archivos CSS y JavaScript cargados, garantizando una experiencia de usuario coherente y según diseño.
4. **RI05 - Imágenes y recursos visuales**: El sistema debe gestionar el cargado y la visualización de imágenes (piedra, papel, tijeras, etc.) de manera eficiente para asegurar tiempos de carga rápidos y respuesta inmediata.
5. **RI06 - Información de interacción del usuario**: El sistema debe capturar las interacciones del usuario, como clics en las imágenes de las jugadas, y procesarlas adecuadamente para determinar el flujo del juego.

[Base de datos sin título](Piedra%20Papel%20y%20Tijeras%201f9aaaa7f66542cabfaf3c71b2136c0f/Base%20de%20datos%20sin%20ti%CC%81tulo%200cd03c4d2fd64de8850294e725472837.csv)

### **Prototipo de baja fidelidad de la página de selección de opciones:**

![IMG_6736.jpeg](PPT/Piedra%20Papel%20y%20Tijeras%201f9aaaa7f66542cabfaf3c71b2136c0f/IMG_6736.jpeg)

### **Prototipo de baja fidelidad de la página de la página de resultados**

![IMG_6733.jpeg](PPT/Piedra%20Papel%20y%20Tijeras%201f9aaaa7f66542cabfaf3c71b2136c0f/IMG_6733.jpeg)

### **Prototipo de baja fidelidad posible implementación futura de la página de seleccion de modo de juego:**

![IMG_6735.jpeg](PPT/Piedra%20Papel%20y%20Tijeras%201f9aaaa7f66542cabfaf3c71b2136c0f/IMG_6735.jpeg)

### **Prototipo de baja fidelidad posible implementación de la pagina modo los jugadores:**

![IMG_6734.jpeg](PPT/Piedra%20Papel%20y%20Tijeras%201f9aaaa7f66542cabfaf3c71b2136c0f/IMG_6734.jpeg)

una vez hecho solo podemos ir hacia el código el cual adjunto de manera grafica en cuadros de código para una posible expliación en el aula :

**HTML:**

```sql
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Piedra, Papel o Tijeras</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <header>
        <img src="logo.png" alt="Logo" class="logo">
        <h1>Piedra, Papel o Tijeras</h1>
    </header>
    <section>
        <div id="jugador1">
            <h2> Jugador Selecciona Tu Opción</h2>
            <img src="piedra.png" alt="Piedra" class="opcion" onclick="jugar('piedra', 1)">
            <img src="papel.png" alt="Papel" class="opcion" onclick="jugar('papel', 1)">
            <img src="tijeras.png" alt="Tijeras" class="opcion" onclick="jugar('tijeras', 1)">
        </div>
        <div id="jugador2">
            <h2>Jugador 2</h2>
            <img src="piedra.png" alt="Piedra" class="opcion" onclick="jugar('piedra', 2)">
            <img src="papel.png" alt="Papel" class="opcion" onclick="jugar('papel', 2)">
            <img src="tijeras.png" alt="Tijeras" class="opcion" onclick="jugar('tijeras', 2)">
        </div>
        <div id="resultado">
            <h1>Resultado:</h1>
            <h2 id="textoResultado"></h2>
            <img src="inicio.png" alt="Empieza el juego" id="imagenResultado">
            <button onclick="revancha()">Revancha</button>
        </div>
    </section>
    <script src="juego.js"></script>
</body>
</html>
```

**CSS:**

```sql
body {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    background-color: rgb(255, 200, 200);
}
header {
    width: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center; /* Alinea verticalmente los elementos en su centro */
    justify-content: center; /* Alinea horizontalmente los elementos al centro del contenedor aprendido recientemente en clase */
    border-radius: 15px;
    padding: 10px 0px;
    border: 5px solid rgb(97, 0, 0);
    background-color: rgb(255, 146, 88) ;
    color: rgb(97, 0, 0);
}

.logo {
    height: 100px; 
    border: 2px solid rgb(97, 0, 0);
    margin-right: 30px; /* Espacio entre el logo y el texto */
    border-radius: 15px;

}
section img {
    width: 200px;
    cursor: pointer;
}

#jugador1 {
    margin: 20px;
}
#resultado {
    display: none; /* Ocultar inicialmente el resultado */
    margin: 0 auto;
    width: 50%;
    border-radius: 15px;
    padding: 10px 0px;
    border: 5px solid rgb(97, 0, 0);
    background-color: rgb(255, 146, 88) ;
    color: rgb(97, 0, 0);
}

#resultado img {
    width: 65%;
    display: block;
    margin: 0 auto;
    border-radius: 15px;
    border: 5px solid rgb(97, 0, 0);
    
}

button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 10px;
    border-color: rgb(97, 0, 0);
    background-color: rgb(255, 207, 94);
    color: rgb(97, 0, 0);
}

#jugador1 h2, #jugador1 img {
    color: rgb(97, 0, 0);
    border: 5px solid rgb(97, 0, 0);
    border-radius: 15px;
    padding: 20px 0px;
    background-color: rgb(252, 114, 114) ;
}
#jugador1 img{
    margin: 20px 100px;
}
#jugador2 h2, #jugador2 img {
    display: none; /* Ocultar inicialmente el las opciones de jjugador 2 ya que es la maquina */
    color: rgb(0, 0, 137);
    border: 2px solid blue;
}
```

**JavaScript:**

```sql
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
```

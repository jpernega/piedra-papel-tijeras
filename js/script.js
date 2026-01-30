let partidas = 0;
let ganadas = 0;
let perdidas = 0;
let empatadas = 0;

// Función principal 
function tirada(jugador) {
    const cpu = eleccionCPU();

    // Cambiar las imágenes
    document.getElementById("imgJugador").src = "../piedra/imagenes/" + jugador + ".png";
    document.getElementById("imgCPU").src =  "../piedra/imagenes/" + cpu + ".png";

    const resultado = comprobarResultado(jugador, cpu);

    // Actualizar texto del resultado
    document.getElementById("resultado").innerHTML = resultado;

    // Actualizar estadísticas
    partidas++;
    document.getElementById("partidas").innerHTML = partidas;
    document.getElementById("ganadas").innerHTML = ganadas;
    document.getElementById("perdidas").innerHTML = perdidas;
    document.getElementById("empatadas").innerHTML = empatadas;
}

// Elección aleatoria de la CPU
function eleccionCPU() {
    const opciones = ["piedra", "papel", "tijeras"];
    const aleatorio = Math.floor(Math.random() * 3);
    return opciones[aleatorio];
}

// Comprobar el ganador
function comprobarResultado(jugador, cpu) {
    if (jugador === cpu) {
        empatadas++;
        return "EMPATE";
    }

    if (jugador === "piedra" && cpu === "tijeras") {
    ganadas++;
    return "HAS GANADO";
    }

    if (jugador === "papel" && cpu === "piedra") {
        ganadas++;
        return "HAS GANADO";
    }

    if (jugador === "tijeras" && cpu === "papel") {
        ganadas++;
        return "HAS GANADO";
    }

    // Si no se cumple ninguna de las anteriores
    perdidas++;
    return "HAS PERDIDO";
}
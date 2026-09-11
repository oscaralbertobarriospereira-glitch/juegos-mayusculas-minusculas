// DATOS DE LOS JUEGOS

// JUEGO 1: Corrección Básica (30 segundos)
const juego1Preguntas = [
    {
        pregunta: "¿Cuál es la corrección correcta?",
        oracion: "juan es mi mejor amigo.",
        opciones: ["Juan es mi mejor amigo.", "juan es mi mejor amigo.", "JUAN es mi mejor amigo."],
        respuestaCorrecta: 0
    },
    {
        pregunta: "Selecciona la oración correcta:",
        oracion: "maria estudia en la escuela.",
        opciones: ["maria estudia en la escuela.", "Maria estudia en la escuela.", "MARIA ESTUDIA EN LA ESCUELA."],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál está bien escrita?",
        oracion: "pedro y carlos juegan juntos.",
        opciones: ["PEDRO Y CARLOS JUEGAN JUNTOS.", "Pedro y Carlos juegan juntos.", "pedro y carlos juegan juntos."],
        respuestaCorrecta: 1
    },
    {
        pregunta: "Elige la forma correcta:",
        oracion: "ana María corrió en la carrera.",
        opciones: ["Ana María corrió en la carrera.", "ana maría corrió en la carrera.", "ANA MARÍA CORRIÓ EN LA CARRERA."],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuál comienza correctamente?",
        oracion: "santiago vive en una casa grande.",
        opciones: ["santiago vive en una casa grande.", "Santiago vive en una casa grande.", "SANTIAGO VIVE EN UNA CASA GRANDE."],
        respuestaCorrecta: 1
    },
    {
        pregunta: "Selecciona la opción correcta:",
        oracion: "lucia y david son hermanos.",
        opciones: ["Lucia y David son hermanos.", "lucia y david son hermanos.", "LUCIA Y DAVID SON HERMANOS."],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuál está correctamente escrita?",
        oracion: "después de la lluvia salió el sol.",
        opciones: ["Después de la lluvia salió el sol.", "después de la lluvia salió el sol.", "DESPUÉS DE LA LLUVIA SALIÓ EL SOL."],
        respuestaCorrecta: 0
    },
    {
        pregunta: "Elige la forma adecuada:",
        oracion: "ese libro es muy interesante.",
        opciones: ["ese libro es muy interesante.", "Ese libro es muy interesante.", "ESE LIBRO ES MUY INTERESANTE."],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es la correcta?",
        oracion: "nosotros vamos al cine el sábado.",
        opciones: ["Nosotros vamos al cine el sábado.", "nosotros vamos al cine el sábado.", "NOSOTROS VAMOS AL CINE EL SÁBADO."],
        respuestaCorrecta: 0
    },
    {
        pregunta: "Selecciona la opción correcta:",
        oracion: "mi amiga trabaja en un hospital.",
        opciones: ["mi amiga trabaja en un hospital.", "Mi amiga trabaja en un hospital.", "MI AMIGA TRABAJA EN UN HOSPITAL."],
        respuestaCorrecta: 1
    }
];

// JUEGO 2: Clasificación Avanzada (40 segundos)
const juego2Preguntas = [
    {
        pregunta: "¿Cuál es un nombre propio?",
        oracion: "En la oración: 'El doctor García atiende en la clínica'",
        opciones: ["doctor", "clínica", "García"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "Identifica el nombre propio:",
        oracion: "París es la capital de Francia.",
        opciones: ["capital", "Francia", "es"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es el título o cargo que debe llevar mayúscula?",
        oracion: "El profesor López enseña matemáticas.",
        opciones: ["profesor", "López", "matemáticas"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es un nombre propio en esta frase?",
        oracion: "Mi hermana María vive en Barcelona.",
        opciones: ["hermana", "vive", "Barcelona"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "Selecciona el nombre propio:",
        oracion: "El Museo del Prado está en Madrid.",
        opciones: ["museo", "Museo del Prado", "está"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Qué palabra es un nombre propio?",
        oracion: "Carlos trabaja en la empresa Tecnología Plus.",
        opciones: ["empresa", "Tecnología Plus", "trabaja"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "Identifica el nombre propio:",
        oracion: "La revista Científica publica artículos importantes.",
        opciones: ["revista", "Científica", "artículos"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál debe ir con mayúscula inicial?",
        oracion: "El río Amazonas es el más largo.",
        opciones: ["río", "Amazonas", "largo"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es el nombre propio?",
        oracion: "Elena estudia en la Universidad Nacional.",
        opciones: ["estudia", "Universidad Nacional", "Elena"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "Selecciona el nombre propio:",
        oracion: "Visitamos el Palacio de Versalles el verano pasado.",
        opciones: ["visitamos", "Palacio de Versalles", "verano"],
        respuestaCorrecta: 1
    }
];

// JUEGO 3: Experto en Mayúsculas (50 segundos)
const juego3Preguntas = [
    {
        pregunta: "¿Cuál opción sigue correctamente las reglas de mayúsculas?",
        oracion: "Regla: Los puntos cardinales se escriben con minúscula.",
        opciones: ["Vamos al sur de la ciudad.", "Vamos al Sur de la ciudad.", "vamos al sur de la ciudad."]
        ,
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuál está correcta según las normas?",
        oracion: "Los títulos de libros/películas: solo la primera palabra con mayúscula.",
        opciones: ["El Senor De Los Anillos", "El señor de los anillos", "El Señor de los Anillos"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Cuál es la forma correcta?",
        oracion: "Regla: Las siglas se escriben en mayúsculas.",
        opciones: ["La Onu trabaja por la paz.", "La ONU trabaja por la paz.", "La onu trabaja por la paz."],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál opción respeta las reglas de mayúsculas?",
        oracion: "Los meses y días van en minúscula, no después de punto y seguido.",
        opciones: ["El próximo Jueves llegaré.", "El próximo jueves llegaré.", "El próximo JUEVES llegaré."],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es la correcta?",
        oracion: "Regla: Después de punto y seguido siempre va mayúscula.",
        opciones: ["Corrió rápido. llegó a tiempo.", "Corrió rápido. Llegó a tiempo.", "Corrió rápido. llegó A tiempo."],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál sigue las normas correctamente?",
        oracion: "Los gentilicios (nacionalidades) van en minúscula.",
        opciones: ["Mi abuela es Colombiana y mi abuelo Español.", "Mi abuela es colombiana y mi abuelo español.", "Mi Abuela es Colombiana y mi Abuelo Español."],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál está bien escrita?",
        oracion: "Regla: Las palabras después de dos puntos van en minúscula (excepto nombres propios).",
        opciones: ["El mensaje decía: Vuelve pronto.", "El mensaje decía: vuelve pronto.", "El mensaje decía: VUELVE PRONTO."],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es la forma correcta?",
        oracion: "Regla: Los nombres de disciplinas no van en mayúscula.",
        opciones: ["Estudio Matemáticas y Literatura.", "Estudio matemáticas y literatura.", "Estudio MATEMÁTICAS Y LITERATURA."],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál sigue las reglas de mayúsculas?",
        oracion: "Después de números romanos en puntuación, va minúscula.",
        opciones: ["Los Capítulos I. Inicio y II. Desarrollo.", "Los Capítulos I. inicio y II. desarrollo.", "Los capítulos I. inicio y II. desarrollo."],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Cuál está correctamente escrita?",
        oracion: "Regla: Las instituciones y organismos van con mayúsculas iniciales.",
        opciones: ["la Policía Nacional patrulla las calles.", "La Policía Nacional patrulla las calles.", "La policía nacional patrulla las calles."],
        respuestaCorrecta: 1
    }
];

// VARIABLES GLOBALES
let juegoActual = null;
let preguntaActual = 0;
let puntuacion = 0;
let tiempoRestante = 0;
let tiempoInicial = 0;
let intervaloTiempo = null;
let respuestasCorrectas = 0;
let juegoTerminado = false;
let preguntas = [];

// Función para iniciar un juego
function iniciarJuego(nivel) {
    juegoActual = nivel;
    preguntaActual = 0;
    puntuacion = 0;
    respuestasCorrectas = 0;
    juegoTerminado = false;

    // Seleccionar preguntas según el nivel
    if (nivel === 1) {
        preguntas = [...juego1Preguntas].sort(() => Math.random() - 0.5);
        tiempoRestante = 30;
        tiempoInicial = 30;
    } else if (nivel === 2) {
        preguntas = [...juego2Preguntas].sort(() => Math.random() - 0.5);
        tiempoRestante = 40;
        tiempoInicial = 40;
    } else if (nivel === 3) {
        preguntas = [...juego3Preguntas].sort(() => Math.random() - 0.5);
        tiempoRestante = 50;
        tiempoInicial = 50;
    }

    // Ocultar menú y mostrar juego
    document.getElementById('menuPrincipal').style.display = 'none';
    document.getElementById('pantallResultados').style.display = 'none';
    document.getElementById('juego' + nivel).style.display = 'block';

    // Iniciar temporizador
    iniciarTemporizador();

    // Mostrar primera pregunta
    mostrarPregunta();
}

// Función para iniciar temporizador
function iniciarTemporizador() {
    clearInterval(intervaloTiempo);
    intervaloTiempo = setInterval(() => {
        tiempoRestante--;
        document.getElementById('timer' + juegoActual).textContent = tiempoRestante;

        if (tiempoRestante <= 0) {
            juegoTerminado = true;
            clearInterval(intervaloTiempo);
            mostrarResultados();
        }
    }, 1000);
}

// Función para mostrar la pregunta actual
function mostrarPregunta() {
    if (preguntaActual >= preguntas.length) {
        juegoTerminado = true;
        clearInterval(intervaloTiempo);
        mostrarResultados();
        return;
    }

    const pregunta = preguntas[preguntaActual];
    const contenedorPregunta = document.getElementById('pregunta' + juegoActual);
    const contenedorOpciones = document.getElementById('opciones' + juegoActual);

    contenedorPregunta.innerHTML = `<strong>${pregunta.pregunta}</strong><br><em>"${pregunta.oracion}"</em>`;

    contenedorOpciones.innerHTML = '';
    pregunta.opciones.forEach((opcion, index) => {
        const botonOpcion = document.createElement('button');
        botonOpcion.className = 'opcion';
        botonOpcion.textContent = opcion;
        botonOpcion.onclick = () => seleccionarOpcion(index);
        contenedorOpciones.appendChild(botonOpcion);
    });

    // Actualizar progreso
    document.getElementById('progreso' + juegoActual).textContent = preguntaActual + 1;

    // Actualizar barra de progreso
    const porcentaje = ((preguntaActual + 1) / preguntas.length) * 100;
    document.getElementById('barra' + juegoActual).style.width = porcentaje + '%';
}

// Función para seleccionar una opción
function seleccionarOpcion(indiceOpcion) {
    if (juegoTerminado) return;

    const pregunta = preguntas[preguntaActual];
    const opciones = document.querySelectorAll('#opciones' + juegoActual + ' .opcion');

    // Deshabilitar todas las opciones
    opciones.forEach(opt => opt.classList.add('deshabilitada'));

    // Mostrar resultado
    if (indiceOpcion === pregunta.respuestaCorrecta) {
        opciones[indiceOpcion].classList.add('correcta');
        respuestasCorrectas++;
        
        // Calcular puntos según dificultad
        if (juegoActual === 1) {
            puntuacion += 10;
        } else if (juegoActual === 2) {
            puntuacion += 15;
        } else if (juegoActual === 3) {
            puntuacion += 20;
        }
    } else {
        opciones[indiceOpcion].classList.add('incorrecta');
        opciones[pregunta.respuestaCorrecta].classList.add('correcta');
    }

    // Actualizar puntuación
    document.getElementById('puntos' + juegoActual).textContent = puntuacion;

    // Pasar a siguiente pregunta después de 1.5 segundos
    setTimeout(() => {
        preguntaActual++;
        mostrarPregunta();
    }, 1500);
}

// Función para mostrar resultados
function mostrarResultados() {
    clearInterval(intervaloTiempo);
    juegoTerminado = true;

    const tiempoUtilizado = tiempoInicial - tiempoRestante;

    document.getElementById('juego' + juegoActual).style.display = 'none';
    document.getElementById('pantallResultados').style.display = 'flex';

    document.getElementById('puntuacionFinal').textContent = puntuacion;
    document.getElementById('tiempoUtilizado').textContent = tiempoUtilizado;
    document.getElementById('respuestasCorrectas').textContent = respuestasCorrectas;
}

// Función para reintentar el juego actual
function reiniciarJuegoActual() {
    iniciarJuego(juegoActual);
}

// Función para volver al menú
function volverAlMenu() {
    clearInterval(intervaloTiempo);
    juegoTerminado = true;

    document.getElementById('menuPrincipal').style.display = 'flex';
    document.getElementById('juego1').style.display = 'none';
    document.getElementById('juego2').style.display = 'none';
    document.getElementById('juego3').style.display = 'none';
    document.getElementById('pantallResultados').style.display = 'none';

    juegoActual = null;
    preguntaActual = 0;
    puntuacion = 0;
    respuestasCorrectas = 0;
}
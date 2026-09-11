// DATOS DE LOS JUEGOS

// QUIZ
const datosQuiz = [
    { pregunta: "¿Cuál es la forma correcta?", respuesta: "Juan es mi mejor amigo.", opciones: ["Juan es mi mejor amigo.", "juan es mi mejor amigo.", "JUAN es mi mejor amigo."] },
    { pregunta: "Selecciona la oración correcta:", respuesta: "María estudia en la escuela.", opciones: ["maria estudia en la escuela.", "Maria estudia en la escuela.", "MARIA ESTUDIA EN LA ESCUELA."] },
    { pregunta: "¿Cuál está bien escrita?", respuesta: "Pedro y Carlos juegan juntos.", opciones: ["PEDRO Y CARLOS JUEGAN JUNTOS.", "Pedro y Carlos juegan juntos.", "pedro y carlos juegan juntos."] },
    { pregunta: "Elige la forma correcta:", respuesta: "Ana María corrió en la carrera.", opciones: ["Ana María corrió en la carrera.", "ana maría corrió en la carrera.", "ANA MARÍA CORRIÓ EN LA CARRERA."] },
    { pregunta: "¿Cuál comienza correctamente?", respuesta: "Santiago vive en una casa grande.", opciones: ["santiago vive en una casa grande.", "Santiago vive en una casa grande.", "SANTIAGO VIVE EN UNA CASA GRANDE."] },
    { pregunta: "Selecciona la opción correcta:", respuesta: "Lucía y David son hermanos.", opciones: ["Lucia y David son hermanos.", "lucia y david son hermanos.", "LUCIA Y DAVID SON HERMANOS."] },
    { pregunta: "¿Cuál está correctamente escrita?", respuesta: "Después de la lluvia salió el sol.", opciones: ["Después de la lluvia salió el sol.", "después de la lluvia salió el sol.", "DESPUÉS DE LA LLUVIA SALIÓ EL SOL."] },
    { pregunta: "Elige la forma adecuada:", respuesta: "Ese libro es muy interesante.", opciones: ["ese libro es muy interesante.", "Ese libro es muy interesante.", "ESE LIBRO ES MUY INTERESANTE."] },
    { pregunta: "¿Cuál es la correcta?", respuesta: "Nosotros vamos al cine el sábado.", opciones: ["Nosotros vamos al cine el sábado.", "nosotros vamos al cine el sábado.", "NOSOTROS VAMOS AL CINE EL SÁBADO."] },
    { pregunta: "Selecciona la opción correcta:", respuesta: "Mi amiga trabaja en un hospital.", opciones: ["mi amiga trabaja en un hospital.", "Mi amiga trabaja en un hospital.", "MI AMIGA TRABAJA EN UN HOSPITAL."] }
];

// ORDENAR
const datosOrdenar = [
    { instruccion: "Ordena la oración correctamente", palabras: ["amigo", "mejor", "mi", "Juan", "es"], respuesta: ["Juan", "es", "mi", "mejor", "amigo"] },
    { instruccion: "Completa la frase correctamente", palabras: ["escuela", "en", "estudia", "la", "María"], respuesta: ["María", "estudia", "en", "la", "escuela"] },
    { instruccion: "Ordena las palabras", palabras: ["juntos", "juegan", "Carlos", "Pedro", "y"], respuesta: ["Pedro", "y", "Carlos", "juegan", "juntos"] },
    { instruccion: "Forma la oración correcta", palabras: ["grande", "una", "en", "casa", "vive", "Santiago"], respuesta: ["Santiago", "vive", "en", "una", "casa", "grande"] },
    { instruccion: "Ordena correctamente", palabras: ["sol", "el", "salió", "lluvia", "la", "de", "Después"], respuesta: ["Después", "de", "la", "lluvia", "salió", "el", "sol"] },
    { instruccion: "Completa la frase", palabras: ["hermanos", "son", "David", "y", "Lucía"], respuesta: ["Lucía", "y", "David", "son", "hermanos"] },
    { instruccion: "Forma la oración", palabras: ["muy", "es", "interesante", "Este", "libro"], respuesta: ["Este", "libro", "es", "muy", "interesante"] },
    { instruccion: "Ordena las palabras", palabras: ["hospital", "en", "un", "trabaja", "amiga", "Mi"], respuesta: ["Mi", "amiga", "trabaja", "en", "un", "hospital"] }
];

// EMPAREJAR
const datosEmparejar = [
    { izquierda: ["Mayúscula inicial", "Nombre propio", "Primer palabra de oración"], derecha: ["Se escriben con minúscula", "Persona, lugar o cosa específica", "Siempre va con mayúscula"] },
    { izquierda: ["Punto y seguido", "Gentilicio", "Siglas"], derecha: ["Nacionalidad de una persona", "Abreviaciones en mayúsculas", "Marca el inicio de nueva oración con mayúscula"] },
    { izquierda: ["Principio de texto", "Disciplinas académicas", "Instituciones"], derecha: ["Minúscula (matemáticas, historia)", "Van con mayúsculas iniciales", "Mayúscula obligatoria"] },
    { izquierda: ["Días de la semana", "Meses del año", "Puntos cardinales"], derecha: ["Minúscula (enero, febrero)", "Minúscula (norte, sur)", "Minúscula (lunes, martes)"] },
    { izquierda: ["Títulos de libros", "Direcciones web", "Nombres de periódicos"], derecha: ["Primera palabra en mayúscula", "Dependen del estilo usado", "Generalmente con mayúsculas"] },
    { izquierda: ["Después de dos puntos", "Palabras en enumeración", "Abreviaturas personales"], derecha: ["Mayúscula si comienza oración", "Minúscula en general", "Se escriben en mayúscula"] },
    { izquierda: ["Conectores de inicio", "Números romanos", "Apodos o sobrenombres"], derecha: ["Van con mayúscula", "Se escriben con mayúscula", "Se escriben con mayúscula"] }
];

// VERDADERO/FALSO
const datosVerdaderoFalso = [
    { pregunta: "Los nombres propios siempre se escriben con mayúscula inicial", respuesta: true },
    { pregunta: "Los días de la semana se escriben siempre con mayúscula", respuesta: false },
    { pregunta: "Después de un punto seguido va mayúscula", respuesta: true },
    { pregunta: "Las disciplinas académicas se escriben con mayúscula", respuesta: false },
    { pregunta: "Los gentilicios se escriben con mayúscula", respuesta: false },
    { pregunta: "Las siglas se escriben en mayúsculas", respuesta: true },
    { pregunta: "Los puntos cardinales se escriben con mayúscula", respuesta: false },
    { pregunta: "El primer nombre de una persona siempre va con mayúscula", respuesta: true },
    { pregunta: "En un título de libro, todas las palabras llevan mayúscula", respuesta: false },
    { pregunta: "Después de dos puntos siempre va mayúscula", respuesta: false }
];

// ARCADE
const datosArcade = [
    { pregunta: "¿Cuál es correcto?", respuesta: "Juan es mi amigo.", opciones: ["Juan es mi amigo.", "juan es mi amigo.", "JUAN ES MI AMIGO."] },
    { pregunta: "Selecciona la forma correcta", respuesta: "María estudia.", opciones: ["maria estudia.", "María estudia.", "MARÍA ESTUDIA."] },
    { pregunta: "¿Cuál está bien?", respuesta: "Después de la lluvia.", opciones: ["después de la lluvia.", "Después de la lluvia.", "DESPUÉS DE LA LLUVIA."] },
    { pregunta: "Elige la correcta", respuesta: "París es hermosa.", opciones: ["paris es hermosa.", "París es hermosa.", "PARÍS ES HERMOSA."] },
    { pregunta: "¿Cuál es la forma adecuada?", respuesta: "Pedro y Ana.", opciones: ["pedro y ana.", "Pedro y Ana.", "PEDRO Y ANA."] },
    { pregunta: "Selecciona la opción", respuesta: "Verdadero: Los nombres propios van con mayúscula", opciones: ["Falso", "Verdadero", "A veces"] },
    { pregunta: "¿Verdadero o Falso?", respuesta: "Verdadero: Después de punto va mayúscula", opciones: ["Falso", "Verdadero", "Depende"] },
    { pregunta: "¿Cuál está correcta?", respuesta: "Estudió matemáticas.", opciones: ["Estudió Matemáticas.", "Estudió matemáticas.", "ESTUDIÓ MATEMÁTICAS."] }
];

// VARIABLES GLOBALES
let modalidadActual = null;
let preguntaActual = 0;
let puntuacion = 0;
let tiempoRestante = 0;
let tiempoInicial = 0;
let intervalo = null;
let respuestasCorrectas = 0;
let juegoTerminado = false;
let elementoArrastrado = null;

function seleccionarModalidad(modalidad) {
    modalidadActual = modalidad;
    preguntaActual = 0;
    puntuacion = 0;
    respuestasCorrectas = 0;
    juegoTerminado = false;

    document.getElementById('menuPrincipal').style.display = 'none';
    document.getElementById('pantallResultados').style.display = 'none';

    switch(modalidad) {
        case 'quiz':
            tiempoInicial = 45;
            iniciarQuiz();
            break;
        case 'ordenar':
            tiempoInicial = 60;
            iniciarOrdenar();
            break;
        case 'emparejar':
            tiempoInicial = 70;
            iniciarEmparejar();
            break;
        case 'verdaderofalso':
            tiempoInicial = 30;
            iniciarVerdaderoFalso();
            break;
        case 'arcade':
            tiempoInicial = 20;
            iniciarArcade();
            break;
    }

    tiempoRestante = tiempoInicial;
    iniciarTemporizador();
}

function iniciarTemporizador() {
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        tiempoRestante--;
        const elementoTiempo = document.getElementById('timer' + capitalizar(modalidadActual));
        if (elementoTiempo) {
            elementoTiempo.textContent = tiempoRestante;
        }

        if (tiempoRestante <= 0) {
            juegoTerminado = true;
            clearInterval(intervalo);
            mostrarResultados();
        }
    }, 1000);
}

function capitalizar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// QUIZ
function iniciarQuiz() {
    document.getElementById('juegoQuiz').style.display = 'block';
    mostrarPreguntaQuiz();
}

function mostrarPreguntaQuiz() {
    if (preguntaActual >= datosQuiz.length || juegoTerminado) return;

    const pregunta = datosQuiz[preguntaActual];
    document.getElementById('preguntaQuiz').textContent = pregunta.pregunta;
    document.getElementById('progresoQuiz').textContent = preguntaActual + 1;
    document.getElementById('barraQuiz').style.width = ((preguntaActual + 1) / datosQuiz.length * 100) + '%';

    const contenedor = document.getElementById('opcionesQuiz');
    contenedor.innerHTML = '';
    pregunta.opciones.forEach((opcion, i) => {
        const btn = document.createElement('div');
        btn.className = 'opcion';
        btn.textContent = opcion;
        btn.onclick = () => responderQuiz(i, opcion === pregunta.respuesta);
        contenedor.appendChild(btn);
    });
}

function responderQuiz(index, esCorrecta) {
    if (juegoTerminado) return;
    juegoTerminado = true;
    
    const opciones = document.querySelectorAll('#opcionesQuiz .opcion');
    opciones[index].classList.add(esCorrecta ? 'correcta' : 'incorrecta');
    
    if (esCorrecta) {
        respuestasCorrectas++;
        puntuacion += 10;
    }

    document.getElementById('puntosQuiz').textContent = puntuacion;

    setTimeout(() => {
        preguntaActual++;
        juegoTerminado = false;
        mostrarPreguntaQuiz();
    }, 1500);
}

// ORDENAR
function iniciarOrdenar() {
    document.getElementById('juegoOrdenar').style.display = 'block';
    mostrarPreguntaOrdenar();
}

function mostrarPreguntaOrdenar() {
    if (preguntaActual >= datosOrdenar.length || juegoTerminado) return;

    const pregunta = datosOrdenar[preguntaActual];
    document.getElementById('preguntaOrdenar').textContent = pregunta.instruccion;
    document.getElementById('progresoOrdenar').textContent = preguntaActual + 1;
    document.getElementById('barraOrdenar').style.width = ((preguntaActual + 1) / datosOrdenar.length * 100) + '%';

    const zonaPalabras = document.getElementById('zonaPalabras');
    zonaPalabras.innerHTML = '';
    const palabrasOrdenadas = [...pregunta.palabras].sort(() => Math.random() - 0.5);
    
    palabrasOrdenadas.forEach((palabra, i) => {
        const div = document.createElement('div');
        div.className = 'palabra';
        div.draggable = true;
        div.textContent = palabra;
        div.dataset.valor = palabra;
        div.ondragstart = (e) => {
            elementoArrastrado = e.target;
            e.target.style.opacity = '0.5';
        };
        div.ondragend = (e) => {
            e.target.style.opacity = '1';
        };
        zonaPalabras.appendChild(div);
    });

    const zonaRespuesta = document.getElementById('zonaRespuesta');
    zonaRespuesta.innerHTML = '';
    zonaRespuesta.ondragover = (e) => e.preventDefault();
    zonaRespuesta.ondrop = (e) => {
        e.preventDefault();
        if (elementoArrastrado) {
            const clone = elementoArrastrado.cloneNode(true);
            clone.className = 'palabra palabra-zona';
            clone.draggable = false;
            zonaRespuesta.appendChild(clone);
            elementoArrastrado.remove();

            const palabrasActuales = Array.from(zonaRespuesta.querySelectorAll('.palabra')).map(p => p.textContent);
            if (palabrasActuales.join('') === pregunta.respuesta.join('')) {
                respuestasCorrectas++;
                puntuacion += 15;
                document.getElementById('puntosOrdenar').textContent = puntuacion;
                
                setTimeout(() => {
                    preguntaActual++;
                    mostrarPreguntaOrdenar();
                }, 1500);
            }
        }
    };
}

// EMPAREJAR
function iniciarEmparejar() {
    document.getElementById('juegoEmparejar').style.display = 'block';
    mostrarPreguntaEmparejar();
}

function mostrarPreguntaEmparejar() {
    if (preguntaActual >= datosEmparejar.length || juegoTerminado) return;

    const pregunta = datosEmparejar[preguntaActual];
    document.getElementById('progresoEmparejar').textContent = preguntaActual + 1;
    document.getElementById('barraEmparejar').style.width = ((preguntaActual + 1) / datosEmparejar.length * 100) + '%';

    const contenedor = document.getElementById('contenedorEmparejar');
    contenedor.innerHTML = '';

    const columnaIzq = document.createElement('div');
    columnaIzq.className = 'columna-emparejar';
    pregunta.izquierda.forEach((item, i) => {
        const div = document.createElement('div');
        div.className = 'item-emparejar';
        div.textContent = item;
        div.dataset.indice = i;
        div.draggable = true;
        div.ondragstart = (e) => {
            elementoArrastrado = e.target;
            e.target.classList.add('arrastrado');
        };
        div.ondragend = (e) => {
            e.target.classList.remove('arrastrado');
        };
        columnaIzq.appendChild(div);
    });

    const columnaDer = document.createElement('div');
    columnaDer.className = 'columna-emparejar';
    const derechaOrdenada = [...pregunta.derecha].sort(() => Math.random() - 0.5);
    derechaOrdenada.forEach((item, i) => {
        const div = document.createElement('div');
        div.className = 'item-emparejar';
        div.textContent = item;
        div.dataset.original = pregunta.derecha.indexOf(item);
        div.ondragover = (e) => e.preventDefault();
        div.ondrop = (e) => {
            e.preventDefault();
            if (elementoArrastrado && elementoArrastrado.dataset.indice === div.dataset.original.toString()) {
                div.classList.add('emparejado');
                elementoArrastrado.classList.add('emparejado');
                respuestasCorrectas++;
                puntuacion += 12;
                document.getElementById('puntosEmparejar').textContent = puntuacion;

                if (document.querySelectorAll('#contenedorEmparejar .item-emparejar:not(.emparejado)').length === 0) {
                    setTimeout(() => {
                        preguntaActual++;
                        mostrarPreguntaEmparejar();
                    }, 1500);
                }
            }
        };
        columnaDer.appendChild(div);
    });

    contenedor.appendChild(columnaIzq);
    contenedor.appendChild(columnaDer);
}

// VERDADERO/FALSO
function iniciarVerdaderoFalso() {
    document.getElementById('juegoVF').style.display = 'block';
    mostrarPreguntaVF();
}

function mostrarPreguntaVF() {
    if (preguntaActual >= datosVerdaderoFalso.length || juegoTerminado) return;

    const pregunta = datosVerdaderoFalso[preguntaActual];
    document.getElementById('preguntaVF').textContent = pregunta.pregunta;
    document.getElementById('progresoVF').textContent = preguntaActual + 1;
    document.getElementById('barraVF').style.width = ((preguntaActual + 1) / datosVerdaderoFalso.length * 100) + '%';
}

function responderVF(respuesta) {
    if (juegoTerminado) return;
    juegoTerminado = true;
    
    const pregunta = datosVerdaderoFalso[preguntaActual];
    const esCorrecta = respuesta === pregunta.respuesta;
    
    const botones = document.querySelectorAll('.btn-vf');
    botones.forEach(b => b.disabled = true);

    if (esCorrecta) {
        respuestasCorrectas++;
        puntuacion += 8;
    }

    document.getElementById('puntosVF').textContent = puntuacion;

    setTimeout(() => {
        preguntaActual++;
        botones.forEach(b => b.disabled = false);
        juegoTerminado = false;
        mostrarPreguntaVF();
    }, 1500);
}

// ARCADE
function iniciarArcade() {
    document.getElementById('juegoArcade').style.display = 'block';
    mostrarPreguntaArcade();
}

function mostrarPreguntaArcade() {
    if (preguntaActual >= datosArcade.length || juegoTerminado) return;

    const pregunta = datosArcade[preguntaActual];
    document.getElementById('preguntaArcade').innerHTML = pregunta.pregunta;

    const contenedor = document.getElementById('opcionesArcade');
    contenedor.innerHTML = '';
    pregunta.opciones.forEach((opcion, i) => {
        const btn = document.createElement('div');
        btn.className = 'opcion-arcade';
        btn.textContent = opcion;
        btn.onclick = () => responderArcade(i, opcion === pregunta.respuesta || (opcion === 'Verdadero' && pregunta.respuesta.includes('Verdadero')) || (opcion === 'Falso' && pregunta.respuesta.includes('Falso')));
        contenedor.appendChild(btn);
    });
}

function responderArcade(index, esCorrecta) {
    if (juegoTerminado) return;
    juegoTerminado = true;
    
    const opciones = document.querySelectorAll('#opcionesArcade .opcion-arcade');
    opciones.forEach(o => o.style.pointerEvents = 'none');
    
    opciones[index].classList.add(esCorrecta ? 'correcta' : 'incorrecta');
    
    if (esCorrecta) {
        respuestasCorrectas++;
        puntuacion += 25;
    }

    document.getElementById('puntosArcade').textContent = puntuacion;

    setTimeout(() => {
        preguntaActual++;
        juegoTerminado = false;
        mostrarPreguntaArcade();
    }, 800);
}

function mostrarResultados() {
    clearInterval(intervalo);
    juegoTerminado = true;

    const tiempoUtilizado = tiempoInicial - tiempoRestante;
    const mensajes = [
        '¡Excelente trabajo!',
        '¡Muy bien, sigue así!',
        '¡Buen desempeño!',
        '¡Puedes hacerlo mejor!',
        '¡Sigue practicando!'
    ];
    const indice = Math.floor(puntuacion / 50);
    const mensaje = mensajes[Math.min(indice, mensajes.length - 1)];

    document.getElementById('juegoQuiz').style.display = 'none';
    document.getElementById('juegoOrdenar').style.display = 'none';
    document.getElementById('juegoEmparejar').style.display = 'none';
    document.getElementById('juegoVF').style.display = 'none';
    document.getElementById('juegoArcade').style.display = 'none';
    document.getElementById('pantallResultados').style.display = 'block';

    document.getElementById('puntuacionFinal').textContent = puntuacion;
    document.getElementById('mensajeFinal').textContent = mensaje;
    document.getElementById('respuestasCorrectas').textContent = respuestasCorrectas;
    document.getElementById('tiempoFinal').textContent = tiempoUtilizado;
}

function volverAlMenu() {
    clearInterval(intervalo);
    document.getElementById('menuPrincipal').style.display = 'block';
    document.getElementById('juegoQuiz').style.display = 'none';
    document.getElementById('juegoOrdenar').style.display = 'none';
    document.getElementById('juegoEmparejar').style.display = 'none';
    document.getElementById('juegoVF').style.display = 'none';
    document.getElementById('juegoArcade').style.display = 'none';
    document.getElementById('pantallResultados').style.display = 'none';
    modalidadActual = null;
}

function reiniciarJuegoActual() {
    seleccionarModalidad(modalidadActual);
}
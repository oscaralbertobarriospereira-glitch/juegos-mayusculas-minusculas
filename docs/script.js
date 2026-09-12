// DESAFÍOS REFLEX - Mismo orden para todos
const desafiosReflex1 = [
    { correctas: ['Asunción'], incorrectas: ['asunción', 'ASUNCIÓN'] },
    { correctas: ['Paraguay'], incorrectas: ['paraguay', 'PARAGUAY'] },
    { correctas: ['Chaco'], incorrectas: ['chaco', 'CHACO'] },
    { correctas: ['Filadelfia'], incorrectas: ['filadelfia', 'FILADELFIA'] },
    { correctas: ['Itapúa'], incorrectas: ['itapúa', 'ITAPÚA'] },
    { correctas: ['Guairá'], incorrectas: ['guairá', 'GUAIRÁ'] },
    { correctas: ['Paraná'], incorrectas: ['paraná', 'PARANÁ'] },
    { correctas: ['Guaraní'], incorrectas: ['guaraní', 'GUARANÍ'] },
    { correctas: ['Toba'], incorrectas: ['toba', 'TOBA'] },
    { correctas: ['Yerba mate'], incorrectas: ['yerba mate', 'YERBA MATE'] },
    { correctas: ['Tereré'], incorrectas: ['tereré', 'TERERÉ'] },
    { correctas: ['ONU'], incorrectas: ['onu', 'Onu'] },
    { correctas: ['Alto Paraguay'], incorrectas: ['alto paraguay', 'ALTO PARAGUAY'] },
    { correctas: ['Independencia'], incorrectas: ['independencia', 'INDEPENDENCIA'] },
    { correctas: ['Caaguazú'], incorrectas: ['caaguazú', 'CAAGUAZÚ'] },
    { correctas: ['Concepción'], incorrectas: ['concepción', 'CONCEPCIÓN'] },
    { correctas: ['Misiones'], incorrectas: ['misiones', 'MISIONES'] },
    { correctas: ['Canindé'], incorrectas: ['canindé', 'CANINDÉ'] },
    { correctas: ['Paraguayo'], incorrectas: ['paraguayo', 'PARAGUAYO'] },
    { correctas: ['Chamacoco'], incorrectas: ['chamacoco', 'CHAMACOCO'] },
];

const desafiosReflex3 = [
    { correctas: ['Asunción'], incorrectas: ['asunción', 'ASUNCIÓN'] },
    { correctas: ['Paraguay'], incorrectas: ['paraguay', 'PARAGUAY'] },
    { correctas: ['Chaco'], incorrectas: ['chaco', 'CHACO'] },
    { correctas: ['Filadelfia'], incorrectas: ['filadelfia', 'FILADELFIA'] },
    { correctas: ['Itapúa'], incorrectas: ['itapúa', 'ITAPÚA'] },
    { correctas: ['Guairá'], incorrectas: ['guairá', 'GUAIRÁ'] },
    { correctas: ['Paraná'], incorrectas: ['paraná', 'PARANÁ'] },
    { correctas: ['Guaraní'], incorrectas: ['guaraní', 'GUARANÍ'] },
    { correctas: ['Toba'], incorrectas: ['toba', 'TOBA'] },
    { correctas: ['Yerba mate'], incorrectas: ['yerba mate', 'YERBA MATE'] },
    { correctas: ['Tereré'], incorrectas: ['tereré', 'TERERÉ'] },
    { correctas: ['ONU'], incorrectas: ['onu', 'Onu'] },
    { correctas: ['Alto Paraguay'], incorrectas: ['alto paraguay', 'ALTO PARAGUAY'] },
    { correctas: ['Independencia'], incorrectas: ['independencia', 'INDEPENDENCIA'] },
    { correctas: ['Caaguazú'], incorrectas: ['caaguazú', 'CAAGUAZÚ'] },
    { correctas: ['Concepción'], incorrectas: ['concepción', 'CONCEPCIÓN'] },
    { correctas: ['Misiones'], incorrectas: ['misiones', 'MISIONES'] },
    { correctas: ['Canindé'], incorrectas: ['canindé', 'CANINDÉ'] },
    { correctas: ['Paraguayo'], incorrectas: ['paraguayo', 'PARAGUAYO'] },
    { correctas: ['Chamacoco'], incorrectas: ['chamacoco', 'CHAMACOCO'] },
    { correctas: ['Japón'], incorrectas: ['japón', 'JAPÓN'] },
    { correctas: ['Méndez'], incorrectas: ['méndez', 'MÉNDEZ'] },
    { correctas: ['Stroessner'], incorrectas: ['stroessner', 'STROESSNER'] },
    { correctas: ['Encarnación'], incorrectas: ['encarnación', 'ENCARNACIÓN'] },
    { correctas: ['Villarrica'], incorrectas: ['villarrica', 'VILLARRICA'] },
    { correctas: ['Central'], incorrectas: ['central', 'CENTRAL'] },
    { correctas: ['Lección'], incorrectas: ['lección', 'LECCIÓN'] },
    { correctas: ['Coronel'], incorrectas: ['coronel', 'CORONEL'] },
    { correctas: ['Curuguaty'], incorrectas: ['curuguaty', 'CURUGUATY'] },
    { correctas: ['Remanso'], incorrectas: ['remanso', 'REMANSO'] },
];

// VARIABLES GLOBALES
let modalidadActual = null;
let desafioActual = 0;
let puntuacion = 0;
let tiempoRestante = 0;
let tiempoInicial = 0;
let intervalo = null;
let juegoTerminado = false;
let desafiosActuales = [];
let seleccionadasEnDesafio = [];
let bloqueado = false;

function seleccionarModalidad(modalidad) {
    modalidadActual = modalidad;
    desafioActual = 0;
    puntuacion = 0;
    juegoTerminado = false;
    bloqueado = false;
    seleccionadasEnDesafio = [];

    if (modalidad === 'reflex1') {
        tiempoInicial = 60;
        desafiosActuales = desafiosReflex1;
        document.getElementById('tituloReflex').textContent = '⚡ REFLEX RÁPIDO ⚡';
    } else if (modalidad === 'reflex3') {
        tiempoInicial = 180;
        desafiosActuales = desafiosReflex3;
        document.getElementById('tituloReflex').textContent = '🔥 REFLEX EXTREMO 🔥';
    }

    tiempoRestante = tiempoInicial;

    document.getElementById('menuPrincipal').style.display = 'none';
    document.getElementById('pantallResultados').style.display = 'none';
    document.getElementById('juegoReflex').style.display = 'block';

    iniciarTemporizador();
    mostrarDesafio();
}

function iniciarTemporizador() {
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        tiempoRestante--;
        document.getElementById('timerReflex').textContent = tiempoRestante;

        if (tiempoRestante <= 0) {
            juegoTerminado = true;
            clearInterval(intervalo);
            mostrarResultados();
        }
    }, 1000);
}

function mostrarDesafio() {
    if (desafioActual >= desafiosActuales.length || juegoTerminado) {
        juegoTerminado = true;
        clearInterval(intervalo);
        mostrarResultados();
        return;
    }

    bloqueado = false;
    seleccionadasEnDesafio = [];
    const desafio = desafiosActuales[desafioActual];
    const contenedor = document.getElementById('contenedorPalabras');
    contenedor.innerHTML = '';
    document.getElementById('mensajeFeedback').textContent = '';
    document.getElementById('mensajeFeedback').className = '';

    const todasLasPalabras = [
        ...desafio.correctas.map(p => ({ texto: p, esCorrecta: true })),
        ...desafio.incorrectas.map(p => ({ texto: p, esCorrecta: false }))
    ];

    todasLasPalabras.sort(() => Math.random() - 0.5);

    todasLasPalabras.forEach((palabra, index) => {
        setTimeout(() => {
            const btn = document.createElement('button');
            btn.className = 'palabra-btn';
            btn.textContent = palabra.texto;
            btn.dataset.esCorrecta = palabra.esCorrecta;
            btn.dataset.indice = index;
            btn.onclick = () => seleccionarPalabra(btn, palabra.esCorrecta);
            contenedor.appendChild(btn);
        }, index * 150);
    });
}

function seleccionarPalabra(btn, esCorrecta) {
    if (bloqueado || juegoTerminado) return;

    const indice = btn.dataset.indice;

    if (seleccionadasEnDesafio.includes(indice)) {
        return;
    }

    btn.disabled = true;
    seleccionadasEnDesafio.push(indice);

    if (esCorrecta) {
        btn.classList.add('correcta');
        const desafio = desafiosActuales[desafioActual];
        const botones = document.querySelectorAll('.palabra-btn');
        const correctasSeleccionadas = Array.from(botones).filter(b => b.dataset.esCorrecta === 'true' && b.disabled);

        if (correctasSeleccionadas.length === desafio.correctas.length) {
            puntuacion++;
            document.getElementById('puntosReflex').textContent = puntuacion;
            document.getElementById('mensajeFeedback').textContent = '✓ ¡CORRECTO!';
            document.getElementById('mensajeFeedback').className = 'exito';
            bloqueado = true;

            setTimeout(() => {
                desafioActual++;
                mostrarDesafio();
            }, 800);
        }
    } else {
        btn.classList.add('incorrecta');
        document.getElementById('mensajeFeedback').textContent = '✗ ¡ERROR!';
        document.getElementById('mensajeFeedback').className = 'error';
        bloqueado = true;

        setTimeout(() => {
            desafioActual++;
            mostrarDesafio();
        }, 1500);
    }
}

function mostrarResultados() {
    clearInterval(intervalo);
    juegoTerminado = true;

    const mensajes = [
        '¡Principiante!',
        '¡Bien!',
        '¡Muy bien!',
        '¡Excelente!',
        '¡Eres un campeón!'
    ];
    const indice = Math.floor(puntuacion / 5);
    const mensaje = mensajes[Math.min(indice, mensajes.length - 1)];

    document.getElementById('juegoReflex').style.display = 'none';
    document.getElementById('pantallResultados').style.display = 'block';
    document.getElementById('puntuacionFinal').textContent = puntuacion;
    document.getElementById('mensajeFinal').textContent = mensaje;
}

function guardarNombre() {
    const nombre = document.getElementById('inputNombre').value.trim();
    
    if (!nombre) {
        alert('Por favor ingresa tu nombre');
        return;
    }

    let ranking = JSON.parse(localStorage.getItem('rankingChaco')) || [];

    ranking.push({
        nombre: nombre,
        puntuacion: puntuacion,
        fecha: new Date().toLocaleDateString('es-ES'),
        modalidad: modalidadActual
    });

    ranking.sort((a, b) => b.puntuacion - a.puntuacion);
    ranking = ranking.slice(0, 5);

    localStorage.setItem('rankingChaco', JSON.stringify(ranking));

    alert('¡Puntuación guardada!');
    document.getElementById('inputNombre').value = '';
}

function mostrarRanking() {
    document.getElementById('menuPrincipal').style.display = 'none';
    document.getElementById('pantallResultados').style.display = 'none';
    document.getElementById('pantallaRanking').style.display = 'block';

    const ranking = JSON.parse(localStorage.getItem('rankingChaco')) || [];
    const listaRanking = document.getElementById('listaRanking');
    listaRanking.innerHTML = '';

    if (ranking.length === 0) {
        listaRanking.innerHTML = '<div style="text-align: center; padding: 20px; color: #999;">No hay puntuaciones registradas aún</div>';
        return;
    }

    ranking.forEach((entrada, index) => {
        const medalla = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'][index];
        
        const fila = document.createElement('div');
        fila.className = 'fila-ranking';
        fila.innerHTML = `
            <span class="posicion-medalla">${medalla}</span>
            <span>${entrada.nombre}</span>
            <span style="font-weight: 700; color: #FF6B00;">${entrada.puntuacion}</span>
            <span>${entrada.fecha}</span>
        `;
        listaRanking.appendChild(fila);
    });
}

function volverAlMenu() {
    clearInterval(intervalo);
    document.getElementById('menuPrincipal').style.display = 'block';
    document.getElementById('juegoReflex').style.display = 'none';
    document.getElementById('pantallResultados').style.display = 'none';
    document.getElementById('pantallaRanking').style.display = 'none';
    modalidadActual = null;
}

function reiniciarJuegoActual() {
    seleccionarModalidad(modalidadActual);
}
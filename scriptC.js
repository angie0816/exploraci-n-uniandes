let quizTerminado = false;

const preguntas = [
    {
        pregunta: "Soy un edificio moderno, de vidrio brillante. En mí hay salones y un auditorio gigante.",
        opciones: ["Edificio Lleras", "Edificio Mario Laserna", "Edificio Santo Domingo", "Centro Cívico"],
        respuesta: 1
    },
    {
        pregunta: "Me verás en camisetas, en fotos y en actividades de la universidad; no doy clases ni represento a un solo alumno, pero cuando aparezco todos sonríen y se llenan de identidad. ¿Quién soy?",
        opciones: ["El logo de la universidad", "Séneca", "Vaquita", "La banda universitaria"],
        respuesta: 1
    },
    {
        pregunta: "No soy cama ni dormitorio, pero muchos vienen a cerrar los ojos. Mi nombre promete calma y reflexión, aunque en la práctica soy rincón de siesta y desconexión. ¿Quién soy?",
        opciones: ["La sala del silencio", "El campito", "La cafetería central", "El galpón"],
        respuesta: 0
    },
    {
        pregunta: "Entre sudaderas amarillas y libros que inspiran, soy parada obligatoria para quien estudia o admira. No soy salón ni cafetería, pero aquí encuentras desde un cuaderno hasta la camisa que grita identidad. ¿Quién soy?",
        opciones: ["La tienda Uniandes", "La biblioteca Mario Laserna", "El edificio Lleras", "El campito"],
        respuesta: 0
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
shuffle(preguntas);

let preguntaActual = 0; 
let puntaje = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const counterEl = document.getElementById("counter");
const resultEl = document.getElementById("result");

function mostrarPregunta() {
    const q = preguntas[preguntaActual];
    const opcionesBarajadas = q.opciones.map((opcion, index) => ({
        texto: opcion,
        indexOriginal: index
    }));
    shuffle(opcionesBarajadas);

    questionEl.textContent = q.pregunta;
    optionsEl.innerHTML = "";
    counterEl.textContent = `Pregunta ${preguntaActual + 1}/${preguntas.length}`;

    opcionesBarajadas.forEach(op => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = op.texto;
        button.onclick = () => verificarRespuesta(op.indexOriginal);
        li.appendChild(button);
        optionsEl.appendChild(li);
    });
}

function verificarRespuesta(indice) {
    if (indice === preguntas[preguntaActual].respuesta) {
        puntaje++;
    }
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    counterEl.style.display = "none";

    let mensaje = "";
    if (puntaje === preguntas.length) {  
        mensaje = "¡Excelente! lo acertaste todo 👏";
        const angieImg = document.querySelector('.angie'); 
        if (angieImg) angieImg.src = "Imágenes/Angie2.png"; 
    } else if (puntaje > 0) {
        mensaje = "¡Muy bien! pero aún puedes mejorar 😉";
    } else {
        mensaje = "No acertaste, pero inténtalo de nuevo 💪";
    }

    resultEl.textContent = `Tu puntaje: ${puntaje}/${preguntas.length}. ${mensaje}`;

    // 🔑 Marcamos que el quiz terminó
    quizTerminado = true;
}

mostrarPregunta();


document.getElementById('volver-landing1').addEventListener('click', function() {
    const params = new URLSearchParams(window.location.search);

    // Si el quiz terminó, actualizamos edif2=true
    if (quizTerminado) {
      params.set('edif2', 'true');
    }

    // Volvemos a landing1 con los parámetros actualizados
    window.location.href = `paginaPrincipal.html?${params.toString()}`;
  });
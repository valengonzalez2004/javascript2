let temas = [{
    tema1: "Geografía",
},
{
    tema1: "escritores",
},

{
    tema1: "Pintores",
},

{
    tema1: "Montañas",
}

]

    
localStorage.setItem("ObjetoTemas", JSON.stringify(temas));
let temasconv = JSON.parse(localStorage.getItem("ObjetoTemas"));
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired.");
    document.getElementById("lista").addEventListener("click", function () {
        let temasAlmacenados = "Algunos de los temas que veremos hoy:\n";
        for (let i = 0; i < temasconv.length; i++) {
            temasAlmacenados += temasconv[i].tema1 + "\n";
        }
        console.log(temasAlmacenados);
    });
});


let preguntaActual = 0;
const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        respuestaCorrecta: "PARIS"
    },
    {
        preguntas: "¿Quién escribió Don Quijote de la Mancha?",
        respuestaCorrecta: "MIGUEL DE CERVANTES"
    },
    {
        preguntas: "¿Quién pintó la Mona Lisa?",
        respuestaCorrecta: "LEONARDO DA VINCI"
    },
    {
        preguntas: "¿Cuál es la montaña más alta del mundo?",
        respuestaCorrecta: "MONTE EVEREST"
    }
];

let botonesRespuesta = document.getElementsByClassName("juego");

for (let i = 0; i < botonesRespuesta.length; i++) {
    botonesRespuesta[i].addEventListener("click", function () {
        const respuestaTexto = botonesRespuesta[i].textContent;

        // Verificar si el botón tiene la clase "respuesta-correcta"
        if (botonesRespuesta[i].classList.contains("respuesta-correcta")) {
            // No mostrar el SweetAlert en este caso
            comprobarRespuesta(respuestaTexto);
        } else {
            Swal.fire({
                title: '¿Estás seguro?',
                text: 'Confirma tu respuesta:',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'No'
            }).then((result) => {
                if (result.isConfirmed) {
                    comprobarRespuesta(respuestaTexto);
                }
            });
        }
    });
}

function comprobarRespuesta(respuesta) {
    let respuestaCorrecta = preguntas[preguntaActual].respuestaCorrecta;

    if (respuesta.toUpperCase() === respuestaCorrecta) {
        Swal.fire(
            '¡Respuesta correcta!',
            'Has respondido correctamente.',
            'success'
        );
        // Incrementa el contador de pregunta actual
        preguntaActual++;
        // Muestra la siguiente pregunta o el mensaje de finalización
        mostrarPregunta();
    } else {
        Swal.fire(
            'Respuesta incorrecta',
            'Inténtalo de nuevo.',
            'error'
        );
    }
}

function mostrarPregunta() {
    if (preguntaActual < preguntas.length) {
        const pregunta = preguntas[preguntaActual].pregunta;
        document.getElementById("textoPregunta").textContent = pregunta;
    } else {
        Swal.fire(
            '¡Juego completado!',
            'Has respondido todas las preguntas correctamente.',
            'success'
        );
    }
}

mostrarPregunta();

// for (let i = 0; i < botonesRespuesta.length; i++) {
//     botonesRespuesta[i].addEventListener("click", function () {
//         const respuestaTexto = botonesRespuesta[i].textContent;

//         Swal.fire({
//             title: '¿Estás seguro?',
//             text: 'Confirma tu respuesta:',
//             icon: 'question',
//             showCancelButton: true,
//             confirmButtonText: 'Sí',
//             cancelButtonText: 'No'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 comprobarRespuesta(respuestaTexto);
//             }
//         });
//     });
// }

// function comprobarRespuesta(respuesta) {
//     let respuestaCorrecta = preguntas[preguntaActual].respuestaCorrecta;

//     if (respuesta.toUpperCase() === respuestaCorrecta) {
//         Swal.fire(
//             '¡Respuesta correcta!',
//             'Has respondido correctamente.',
//             'success'
//         );
//         // Incrementa el contador de pregunta actual
//         preguntaActual++;
//         // Muestra la siguiente pregunta o el mensaje de finalización
//         mostrarPregunta();
//     } else {
//         Swal.fire(
//             'Respuesta incorrecta',
//             'Inténtalo de nuevo.',
//             'error'
//         );
//     }
// }




// mostrarPregunta();
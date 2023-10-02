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

// function comprobarRespuesta(respuesta) {
//     let respuestaCorrecta = preguntas[preguntaActual].respuestaCorrecta;
//     alert(respuestaCorrecta);
//     if (respuesta.toUpperCase() === respuestaCorrecta) {
//         alert("¡Respuesta correcta!");
//         // respuestasCorrectas++; // Incrementa el contador de respuestas correctas.
//     } else {
//         alert("Respuesta incorrecta. Inténtalo de nuevo.");
//     }
//     avanzarPregunta();
// }


// for (let i = 0; i < botonesRespuesta.length; i++) {
    
//     Swal.fire(
//     botonesRespuesta[i].addEventListener("click", function () {
//         //alert(botonesRespuesta[i].textContent);
        
//             'Good job',
//             botonesRespuesta[i].textContent,
//             'success'
//         )    
//         comprobarRespuesta(botonesRespuesta[i].textContent);
//     });
// }

for (let i = 0; i < botonesRespuesta.length; i++) {
    botonesRespuesta[i].addEventListener("click", function () {
        const respuestaTexto = botonesRespuesta[i].textContent;
        
        Swal.fire({
            icon: 'error',
            text: 'incorrecto', // Aquí mostramos el texto de la respuesta
        });

        comprobarRespuesta(respuestaTexto);
    });
}


mostrarPregunta();
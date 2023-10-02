// let temas = [{
//     tema1: "Geografía",
// },
// {
//     tema1: "escritores",
// },

// {
//     tema1: "Pintores",
// },

// {
//     tema1: "Montañas",
// },

// {
//     tema1: "Monedas",
// }

// ]

    
// localStorage.setItem("ObjetoTemas", JSON.stringify(temas));
// let temasconv = JSON.parse(localStorage.getItem("ObjetoTemas"));
// document.addEventListener("DOMContentLoaded", function () {
//     console.log("DOMContentLoaded event fired.");
//     document.getElementById("lista").addEventListener("click", function () {
//         let temasAlmacenados = "Algunos de los temas que veremos hoy:\n";
//         for (let i = 0; i < temasconv.length; i++) {
//             temasAlmacenados += temasconv[i].tema1 + "\n";
//         }
//         Swal.fire('Any fool can use a computer')
//         //alert(temasAlmacenados);
//     });
// });

// archivo.js

document.addEventListener("DOMContentLoaded", function () {
    const temas = [
        {
            tema1: "Geografía",
        },
        {
            tema1: "Escritores",
        },
        {
            tema1: "Pintores",
        },
        {
            tema1: "Montañas",
        },
        {
            tema1: "Monedas",
        }
    ];

    localStorage.setItem("ObjetoTemas", JSON.stringify(temas));

    const botonSiguiente = document.getElementById("lista");
    botonSiguiente.addEventListener("click", function () {
        const temasGuardados = JSON.parse(localStorage.getItem("ObjetoTemas"));

        let mensaje = "Temas almacenados:\n";
        for (let i = 0; i < temasGuardados.length; i++) {
            mensaje += `${i + 1}. ${temasGuardados[i].tema1}\n`;
        }

        Swal.fire({
            title: 'Temas Almacenados',
            text: mensaje,
            icon: 'info',
            confirmButtonText: 'OK'
        });
    });
});



let preguntaActual = 0;
const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        respuestaCorrecta: "HELSINKI"
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
    },
    {
        pregunta: "¿Cuál es la moneda oficial de Japón?",
        respuestaCorrecta: "YEN"
    }
];

let botonesRespuesta = document.getElementsByClassName("juego");

for (let i = 0; i < botonesRespuesta.length; i++) {
    botonesRespuesta[i].addEventListener("click", function () {
        const respuestaTexto = botonesRespuesta[i].textContent;

        if (botonesRespuesta[i].classList.contains("respuesta-correcta")) {
            comprobarRespuesta(respuestaTexto);
        } else {
            Swal.fire(
                'Respuesta incorrecta',
                'Inténtalo de nuevo.',
                'error'
            );
        }
    });
}

for (let i = 0; i < botonesRespuesta.length; i++) {
    botonesRespuesta[i].addEventListener("click", function () {
        const respuestaTexto = botonesRespuesta[i].textContent;

        if (botonesRespuesta[i].classList.contains("respuesta-correcta")) {
            if (respuestaTexto === "YEN") {
                window.location.href = "../pages/felicitaciones.html";
            } else {
                Swal.fire(
                    'Respuesta incorrecta',
                    'Inténtalo de nuevo.',
                    'error'
                );
            }
        } else {
            Swal.fire(
                'Respuesta incorrecta',
                'Inténtalo de nuevo.',
                'error'
            );
        }
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const paises = [
        {
            pais: "Argentina",
            capital: "Buenos Aires",
            habitantes: "46.044703",
            comida: "Asado",
        },
        {
            pais: "Rusia",
            capital: "Moscu",
            habitantes: "145.558000",
            comida: "Borsch",
        },
        {
            pais: "Estados Unidos",
            capital: "Washington",
            habitantes: "332.314000",
            comida: "Hamburguesas y hot dogs",
        },
    ];

    const botonesPais = document.querySelectorAll(".paises button");

    botonesPais.forEach(function (boton) {
        boton.addEventListener("click", function () {
            const paisIndex = Array.from(botonesPais).indexOf(boton);
            const paisElegido = paises[paisIndex];

            const habitantesTexto = String(paisElegido.habitantes); 
            
            Swal.fire({
                title: paisElegido.pais,
                html: `
                    <p><strong>Capital:</strong> ${paisElegido.capital}</p>
                    <p><strong>Habitantes:</strong> ${habitantesTexto}</p>
                    <p><strong>Comida típica:</strong> ${paisElegido.comida}</p>
                `,
                icon: 'info',
                confirmButtonText: 'OK',
                text: 'black'
            });
        });
    });
});


// inicia modo obscuro
const btnChangeFondos = document.querySelectorAll(".btn-changefondo");
const changeFondos = document.querySelectorAll(".changefondo");
const h1 = document.getElementById("h1");
const main = document.getElementById("main");

let isDarkMode = sessionStorage.getItem("isDarkMode") === "true";
const applyTheme = (darkMode) => {
  if (darkMode) {
    document.body.style.backgroundColor = "black";
    h1.style.textShadow = "none";
    main.style.boxShadow = "none";
    btnChangeFondos.forEach(
      (btnChangeFondo) => (btnChangeFondo.style.transform = "translateX(200%)")
    );
  } else {
    document.body.style.backgroundColor = "";
    h1.style.textShadow = "";
    main.style.boxShadow = "";
    btnChangeFondos.forEach(
      (btnChangeFondo) => (btnChangeFondo.style.transform = "translateX(0%)")
    );
  }
};
applyTheme(isDarkMode);

changeFondos.forEach((changeFondo) => {
  changeFondo.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    sessionStorage.setItem("isDarkMode", isDarkMode);
    applyTheme(isDarkMode);
    console.log(isDarkMode);
  });
});
// termina modo obscuro

// inicia Login
const inputLogin = document.getElementById("login-input");
const btnLogin = document.getElementById("login-button");
const login = document.getElementById("login");
const fraseLogin = document.getElementById("login-frase");

const frases = [
  "No es malo descubrir que no tienes todas las respuestas. Es entonces cuando te haces las preguntas correctas. –Thor-",
  "Los héroes se crean por el camino que eligen, no por los poderes con los que fueron honrados. –Iron Man-",
  "Empiezas con algo puro, algo emocionante, y luego llegan los errores, los compromisos. Nosotros creamos nuestros demonios. –Iron Man-",
  "El fracaso es la niebla entre la cual vislumbramos el triunfo. –Iron Man-",
  "Nunca perdemos nuestros demonios, solo aprendemos a vivir por encima de ellos. –Doctor Strange-",
  "La arrogancia y el miedo aún evitan que aprendas la más simple e importante de todas las lecciones: no se trata de ti. –Doctor Strange-",
  "Todo lo que podemos hacer es dar lo mejor de nosotros y, a veces, lo mejor que podemos hacer es comenzar de nuevo. -Agent Carter-",
  "Solo porque alguien tropieza o pierde el camino no implica que se pierda para siempre. A veces todos necesitamos algo de ayuda. -Charles Xavier-",
  "No siempre los más rápidos son los mejores. Lo importante es ser el último en permanecer en pie. -Lobezno-",
  "Recuerda que tu historia también es parte de la historia de otras personas. -Superman-",
  "Tuviste una vida dura, ¿sabes quién más tuvo una vida dura? ¡Todo el mundo! -Deadpool-",
  "A veces, para hacer lo correcto se deben abandonar las cosas que más se desean, incluso los sueños. -Spider-Man-",
  "En tiempos de crisis los sabios crean puentes, mientras que los tontos construyen muros. -Pantera Negra-",
  "Ninguna cantidad de dinero ha comprado jamás una segunda oportunidad. -Iron Man-",
  "Lo “maravilloso” solo puede ser alcanzado al enfrentar al miedo, al riesgo, y fallando durante el proceso. -Superman-",
  "El cambio puede ser algo bueno. Puede traer nuevas experiencias, nuevas oportunidades, nuevas personas. -Flash-",
  "Puedes quitarme mi casa y todos mis trucos y juguetes; pero hay algo que no me puedes quitar… soy Iron Man. -Iron Man-",
  "¿Cuál sería el sentido de todo el sufrimiento y sacrificio, si no estuviera dispuesto a levantarme y continuar luchando? -Falcon-",
  "Sin importar adónde vayas en la vida siempre habrá alguien que quiera derribarte, así que mantente fuerte y enfrenta tus problemas en lugar de huirles. -Superman-",
];
const frasesAleatorias = () => {
  const aleatorio = Math.floor(Math.random() * frases.length);
  fraseLogin.innerText = frases[aleatorio];
};
frasesAleatorias();
const claveCorrecta = sessionStorage.getItem("clave");
if (claveCorrecta) {
  login.style.display = "none";
  main.style.display = "block";
}
const clave = "1234";
btnLogin.addEventListener("click", () => {
  if (inputLogin.value === clave) {
    sessionStorage.setItem("clave", clave);
    login.style.display = "none";
    main.style.display = "block";
  } else {
    alert("Contraseña Incorrecta");
  }
});
inputLogin.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (inputLogin.value === clave) {
      sessionStorage.setItem("clave", clave);
      login.style.display = "none";
      main.style.display = "block";
    } else {
      alert("Contraseña Incorrecta");
    }
  }
});
// termina Login

/* inicia cerrar minimenu*/
const cerrarMinimenu = document.getElementById("cerrar-minimenu");
const minimenu = document.getElementById("mini-menu");
cerrarMinimenu.addEventListener("click", () => {
  minimenu.classList.add("cerrado");
});
minimenu.addEventListener("mouseenter", (event) => {
  if (minimenu.classList.contains("cerrado")) {
    minimenu.classList.remove("cerrado");
  }
});
minimenu.addEventListener("touchstart", (event) => {
  if (minimenu.classList.contains("cerrado")) {
    minimenu.classList.remove("cerrado");
  }
});
/* termina cerrar mini menu*/

const arrSeries = [
  {
    id: "La 3ra Roca",
    img: "https://images.justwatch.com/poster/75312210/s166/cosas-de-marcianos.avif",
    rsm: "Cuatro alienígenas vienen a la Tierra con la misión de aprender todo lo posible sobre la forma de vida y costumbres de sus habitantes. Para ello se harán pasar por seres humanos e intentarán comprender porque somos como somos y porque actuamos de determinadas maneras.",
    temp: [
      {
        numero: 1,
        capitulos: [
          {
            capitulo: 1,
            src: "https://ok.ru/videoembed/8888311024288?nochat=1",
          },
          {
            capitulo: 2,
            src: "https://ok.ru/videoembed/8888311155360?nochat=1",
          },
          {
            capitulo: 3,
            src: "https://ok.ru/videoembed/8888311089824?nochat=1",
          },
          {
            capitulo: 4,
            src: "https://ok.ru/videoembed/8888311351968?nochat=1",
          },
          {
            capitulo: 5,
            src: "https://ok.ru/videoembed/8888311220896?nochat=1",
          },
          {
            capitulo: 6,
            src: "https://ok.ru/videoembed/8888346413728?nochat=1",
          },
          {
            capitulo: 7,
            src: "https://ok.ru/videoembed/8888346479264?nochat=1",
          },
          {
            capitulo: 8,
            src: "https://ok.ru/videoembed/8888346544800?nochat=1",
          },
          {
            capitulo: 9,
            src: "https://ok.ru/videoembed/8888346610336?nochat=1",
          },
          {
            capitulo: 10,
            src: "https://ok.ru/videoembed/8888346610336?nochat=1",
          },
          {
            capitulo: 11,
            src: "https://ok.ru/videoembed/8888368171680?nochat=1",
          },
          {
            capitulo: 12,
            src: "https://ok.ru/videoembed/8888368237216?nochat=1",
          },
          {
            capitulo: 13,
            src: "https://ok.ru/videoembed/8888368302752?nochat=1",
          },
          {
            capitulo: 14,
            src: "https://ok.ru/videoembed/8888368827040?nochat=1",
          },
          {
            capitulo: 15,
            src: "https://ok.ru/videoembed/8888368368288?nochat=1",
          },
          {
            capitulo: 16,
            src: "https://ok.ru/videoembed/8888368630432?nochat=1",
          },
          {
            capitulo: 17,
            src: "https://ok.ru/videoembed/8888368433824?nochat=1",
          },
          {
            capitulo: 18,
            src: "https://ok.ru/videoembed/8888368564896?nochat=1",
          },
          {
            capitulo: 19,
            src: "https://ok.ru/videoembed/8888368695968?nochat=1",
          },
          {
            capitulo: 20,
            src: "https://ok.ru/videoembed/8888368499360?nochat=1",
          },
        ],
      },
      {
        numero: 2,
        capitulos: [
          {
            capitulo: 1,
            src: "https://ok.ru/videoembed/8888422369952?nochat=1",
          },
          {
            capitulo: 2,
            src: "https://ok.ru/videoembed/8888422304416?nochat=1",
          },
          {
            capitulo: 3,
            src: "https://ok.ru/videoembed/8888421911200?nochat=1",
          },
          {
            capitulo: 4,
            src: "https://ok.ru/videoembed/8888421780128?nochat=1",
          },
          {
            capitulo: 5,
            src: "https://ok.ru/videoembed/8888421845664?nochat=1",
          },
          {
            capitulo: 6,
            src: "https://ok.ru/videoembed/8888421976736?nochat=1",
          },
          {
            capitulo: 7,
            src: "https://ok.ru/videoembed/8888422042272?nochat=1",
          },
          {
            capitulo: 8,
            src: "https://ok.ru/videoembed/8888422173344?nochat=1",
          },
          {
            capitulo: 9,
            src: "https://ok.ru/videoembed/8888422107808?nochat=1",
          },
          {
            capitulo: 10,
            src: "https://ok.ru/videoembed/8888422238880?nochat=1",
          },
          {
            capitulo: 11,
            src: "https://ok.ru/videoembed/8888462150304?nochat=1",
          },
          {
            capitulo: 12,
            src: "https://ok.ru/videoembed/8888462215840?nochat=1",
          },
          {
            capitulo: 13,
            src: "https://ok.ru/videoembed/8888462084768?nochat=1",
          },
          {
            capitulo: 14,
            src: "https://ok.ru/videoembed/8888462281376?nochat=1",
          },
          {
            capitulo: 15,
            src: "https://ok.ru/videoembed/8888462346912?nochat=1",
          },
          {
            capitulo: 16,
            src: "https://ok.ru/videoembed/8888461953696?nochat=1",
          },
          {
            capitulo: 17,
            src: "https://ok.ru/videoembed/8888461626016?nochat=1",
          },
          {
            capitulo: 18,
            src: "https://ok.ru/videoembed/8888461691552?nochat=1",
          },
          {
            capitulo: 19,
            src: "https://ok.ru/videoembed/8888461757088?nochat=1",
          },
          {
            capitulo: 20,
            src: "https://ok.ru/videoembed/8888461888160?nochat=1",
          },
          {
            capitulo: 21,
            src: "https://ok.ru/videoembed/8888495114912?nochat=1",
          },
          {
            capitulo: 22,
            src: "https://ok.ru/videoembed/8888495180448?nochat=1",
          },
          {
            capitulo: 23,
            src: "https://ok.ru/videoembed/8888495245984?nochat=1",
          },
          {
            capitulo: 24,
            src: "https://ok.ru/videoembed/8888495442592?nochat=1",
          },
          {
            capitulo: 25,
            src: "https://ok.ru/videoembed/8888495311520?nochat=1",
          },
          {
            capitulo: 26,
            src: "https://ok.ru/videoembed/8888495049376?nochat=1",
          },
        ],
      },
    ],
  },
  {
    id: "Spartacus",
    img: "https://resizing.flixster.com/dtalUtTwPHVQ6oXrqLlMiVU6Leg=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9300710_b_v13_ac.jpg",
    rsm: "Spartacus es un tracio cuya existencia, en un principio, está marcada por el yugo de la esclavitud romana y, posteriormente, cambia de forma radical cuando este es capturado por Cayo Claudio Glabro y condenado a morir en la arena a manos de gladiadores.",
    temp: [
      {
        numero: 1,
        capitulos: [
          {
            capitulo: 1,
            src: "https://ok.ru/videoembed/8895371479712?nochat=1",
          },
          {
            capitulo: 2,
            src: "https://ok.ru/videoembed/8895371283104?nochat=1",
          },
          {
            capitulo: 3,
            src: "https://ok.ru/videoembed/8895371610784?nochat=1",
          },
          {
            capitulo: 4,
            src: "https://ok.ru/videoembed/8895420500640?nochat=1",
          },
          {
            capitulo: 5,
            src: "https://ok.ru/videoembed/8895420369568?nochat=1",
          },
          {
            capitulo: 6,
            src: "https://ok.ru/videoembed/8895420435104?nochat=1",
          },
          {
            capitulo: 7,
            src: "https://ok.ru/videoembed/8895461526176?nochat=1",
          },
          {
            capitulo: 8,
            src: "https://ok.ru/videoembed/8895461657248?nochat=1",
          },
          {
            capitulo: 9,
            src: "https://ok.ru/videoembed/8895461460640?nochat=1",
          },
          {
            capitulo: 10,
            src: "https://ok.ru/videoembed/8895502486176?nochat=1",
          },
          {
            capitulo: 11,
            src: "https://ok.ru/videoembed/8895502551712?nochat=1",
          },
          {
            capitulo: 12,
            src: "",
          },
          {
            capitulo: 13,
            src: "",
          },
        ],
      },
      {
        numero: 2,
        capitulos: [
          {
            capitulo: 1,
            src: "https://ok.ru/videoembed/8895741889184?nochat=1",
          },
          {
            capitulo: 2,
            src: "https://ok.ru/videoembed/8895741823648?nochat=1",
          },
          {
            capitulo: 3,
            src: "https://ok.ru/videoembed/8895949900448?nochat=1",
          },
          {
            capitulo: 4,
            src: "https://ok.ru/videoembed/8895949965984?nochat=1",
          },
          {
            capitulo: 5,
            src: "https://ok.ru/videoembed/8895978801824?nochat=1",
          },
          {
            capitulo: 6,
            src: "https://ok.ru/videoembed/8895978867360?nochat=1",
          },
        ],
      },
    ],
  },
];

/* inicia funcion agrega interfaz de peliculas con imagenes en html */
const contenedorSeries = document.getElementById("contenedor-series");
const cargaSeries = (arr = arrSeries) => {
  contenedorSeries.innerHTML = arr
    .map(
      ({ img, id }) => `
    <img class="series-html" src="${img}" data-id="${id}" title="${id}">
  `
    )
    .join("");
};
cargaSeries();
/* termina funcion interfaz*/

/* inicia funcion reproductor */
const ventana = document.getElementById("ventana");
const resumen = document.getElementById("resumen");
const menu = document.getElementById("menu");

const generaReproductor = () => {
  const seriesHtml = document.querySelectorAll(".series-html");
  const videoDiv = document.getElementById("video");
  const videoIframe = videoDiv.querySelector("iframe");
  seriesHtml.forEach((serie) => {
    serie.addEventListener("click", () => {
      const serieId = serie.getAttribute("data-id");
      const serieSeleccionada = arrSeries.find((s) => s.id === serieId);

      menu.style.display = "none";
      contenedorSeries.style.display = "none";
      ventana.style.display = "flex";
      window.scrollTo(0, 0);
      document.body.style.backgroundColor = "black";
      h1.style.textShadow = "none";
      main.style.boxShadow = "none";

      resumen.innerHTML = `
      <h2 class="titulo-resumen">${serieSeleccionada.id}</h2>
      <p class="p-resumen"><img class="img-resumen" src="${
        serieSeleccionada.img
      }">${serieSeleccionada.rsm}</p>
      <label id="label-temp" for="select-temp">Selecciona una temporada:</label>
        <select id="select-temp" class="select-temp">
          ${serieSeleccionada.temp
            .map(
              (t) =>
                `<option class="option-temp" value="${t.numero}">Temporada ${t.numero}</option>`
            )
            .join("")}
        </select>
        <ul id="lista-capitulos" class="lista-capitulos"></ul>
      `;
      // Agregar evento al select de temporadas
      const selectTemp = document.getElementById("select-temp");
      const listaCapitulos = document.getElementById("lista-capitulos");

      const actualizarCapitulos = (numeroTemporada) => {
        const temporada = serieSeleccionada.temp.find(
          (t) => t.numero === parseInt(numeroTemporada, 10)
        );
        if (temporada) {
          listaCapitulos.innerHTML = temporada.capitulos
            .map(
              (cap) => `
              <li>
              <button class="capitulo-btn" data-src="${cap.src}">
              Capítulo ${cap.capitulo}
            </button>
              </li>`
            )
            .join("");
        }
      };
      // Cargar capítulos de la primera temporada por defecto
      actualizarCapitulos(selectTemp.value);

      // Actualizar capítulos al cambiar de temporada
      selectTemp.addEventListener("change", (e) => {
        actualizarCapitulos(e.target.value);
      });
      // Agregar evento para reproducir capítulos
      listaCapitulos.addEventListener("click", (e) => {
        if (e.target.classList.contains("capitulo-btn")) {
          const capituloSrc = e.target.getAttribute("data-src");

          if (capituloSrc) {
            window.scrollTo(0, 0);

            videoIframe.src = capituloSrc;
            videoDiv.style.display = "flex";
            videoDiv.style.position = "absolute";
            videoDiv.style.zIndex = 1000;
          }
        }
      });
      // cerrar video
      const cerrarVideo = document.getElementById("cerrar-video");
      cerrarVideo.addEventListener("click", () => {
        videoDiv.style.display = "none";
        videoIframe.src = "";
      });
    });
  });
};
generaReproductor();
/* termina funcion reproductor */

/* inicia funcion cerrar reproductor*/
const cerrar = document.getElementById("cerrar");
cerrar.addEventListener("click", () => {
  menu.style.display = "block";
  ventana.style.display = "none";
  contenedorSeries.style.display = "grid";
  if (isDarkMode) {
    document.body.style.backgroundColor = "black";
    h1.style.textShadow = "none";
    main.style.boxShadow = "none";
  } else {
    document.body.style.backgroundColor = "";
    h1.style.textShadow = "";
    main.style.boxShadow = "";
  }
});
/* termina funcion cerrar */

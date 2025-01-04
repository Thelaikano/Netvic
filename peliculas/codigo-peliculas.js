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
document.addEventListener("DOMContentLoaded", () => {
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
    main.style.display = "flex";
  }
  const clave = "1234";
  btnLogin.addEventListener("click", () => {
    if (inputLogin.value === clave) {
      sessionStorage.setItem("clave", clave);
      login.style.display = "none";
      main.style.display = "flex";
    } else {
      alert("Contraseña Incorrecta");
    }
  });
  inputLogin.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (inputLogin.value === clave) {
        sessionStorage.setItem("clave", clave);
        login.style.display = "none";
        main.style.display = "flex";
      } else {
        alert("Contraseña Incorrecta");
      }
    }
  });
});
// termina Login

const contenedorPeliculas = document.getElementById("contenedor-peliculas");
const ventana = document.getElementById("ventana");
const reproductor = document.getElementById("reproductor");
const cerrar = document.getElementById("cerrar");
const filtros = document.querySelectorAll("#filtro");
const resumen = document.getElementById("resumen");
const menu = document.getElementById("menu");

/* inicia arrai donde toma informacion las funciones */
const ArrPeliculas = [
  {
    id: "HellBoy 1",
    genero: "ciencia ficcion",
    img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/11/hellboy.jpg?tf=256x",
    src: "https://ok.ru/videoembed/2569435679364",
    resumen:
      "Nacido de las llamas del infierno, el demonio Hellboy es transportado a la Tierra mediante una sombría ceremonia realizada por los nazis, deseosos de utilizar las fuerzas infernales con fines de conquista. Salvado por el doctor Broom, Hellboy es adiestrado para combatir las fuerzas del mal. Armado, con un brazo duro como una piedra, forma equipo con el telépata Abe Sapien y Liz Sherman, capaz de controlar el fuego...",
  },
  {
    id: "HellBoy 2",
    genero: "ciencia ficcion",
    img: "https://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/64/63/19/18942272.jpg",
    src: "https://ok.ru/videoembed/4090091997839",
    resumen:
      "Un malvado elfo rompe un acuerdo milenario entre los seres humanos y ciertos poderes invisibles, lo que acerca el infierno cada vez más a la Tierra. El elfo decide liberar al Ejército Dorado para que le ayude a acabar con toda la humanidad. Hellboy y su equipo son los únicos que pueden salvar la Tierra del fatal destino al que se enfrenta. Para eso, Hellboy viajará entre dos mundos, combatiendo a los seres fantásticos.",
  },
  {
    id: "Carnage 98 wwf",
    genero: "wwf",
    img: "https://m.media-amazon.com/images/M/MV5BM2VjYzI0ODctZDc2Mi00NjcxLTlhODQtODJkMGNjMGZlMDhkXkEyXkFqcGc@._V1_QL75_UX380_CR0,63,380,562_.jpg",
    src: "https://ok.ru/videoembed/3926574697071",
    resumen:
      "Desde Londres, Inglaterra, llega WWE Capital Carnage. Ken Shamrock defiende el título intercontinental de la WWE contra Steve Blackman. L.O.D. 2000 lucha contra The Headbangers. The Rock defiende el campeonato de la WWE contra X-Pac. Triple H se enfrenta a Jeff Jarrett. The New Age Outlaws defienden el campeonato mundial en parejas de la WWE contra D-Lo Brown y Mark Henry, ¡y más!",
  },
  {
    id: "El club de la pelea",
    genero: "drama",
    img: "https://www.arte.unicen.edu.ar/cdab/wp-content/uploads/2018/11/club-de-la-pelea.jpg",
    src: "https://ok.ru/videoembed/7963623295698",
    resumen:
      "Un joven hastiado de su gris y monótona vida lucha contra el insomnio. En un viaje en avión conoce a un carismático vendedor de jabón que sostiene una teoría muy particular: el perfeccionismo es cosa de gentes débiles; sólo la autodestrucción hace que la vida merezca la pena. Ambos deciden entonces fundar un club secreto de lucha, donde poder descargar sus frustaciones y su ira, que tendrá un éxito arrollador.",
  },
  {
    id: "Underworld",
    genero: "ciencia ficcion",
    img: "https://underbrain.com/wp-content/uploads/2020/11/underworld-2003.jpg.webp",
    src: "https://ok.ru/videoembed/3612556921461",
    resumen:
      "Durante siglos, dos razas han ido evolucionando en las profundidades de la Tierra: los aristocráticos y sofisticados vampiros y los brutales hombres-lobo (Lycans), cuya existencia siempre había formado parte del mundo de los mitos y las leyendas. Estas razas nocturnas son enemigas mortales y están condenadas a vivir en perpetua guerra hasta que sólo una de ellas sobreviva.",
  },
  {
    id: "Underworld la Rebelion",
    genero: "ciencia ficcion",
    img: "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/69/04/08/20290498.jpg",
    src: "https://ok.ru/videoembed/7764442745428?nochat=1",
    resumen:
      "Viktor, el cruel rey de los vampiros, ha estado persiguiendo a los licántropos durante siglos. El joven licántropo Lucian consigue el apoyo de su gente para luchar contra Viktor y sus 'Death dealers'. Con la ayuda de su amante secreta, una vampira, Lucian lidera a los hombres lobo en una batalla final que les llevará a librarse del yugo de los vampiros o a morir en el intento.",
  },
  {
    id: "Alien",
    genero: "ciencia ficcion",
    img: "https://www.elche.es/wp-content/uploads/2019/10/Alien-El-Octavo-Pasajero.jpg",
    src: "https://ok.ru/videoembed/7333624416825",
    resumen:
      "De regreso a la Tierra, la nave de carga Nostromo interrumpe su viaje y despierta a sus siete tripulantes. El ordenador central, MADRE, ha detectado la misteriosa transmisión de una forma de vida desconocida, procedente de un planeta cercano aparentemente deshabitado. La nave se dirige entonces al extraño planeta para investigar el origen de la comunicación.",
  },
  {
    id: "Indesctructibles",
    genero: "accion",
    img: "https://cinemarama.wordpress.com/wp-content/uploads/2010/09/13.jpg",
    src: "https://ok.ru/videoembed/6899189877479",
    resumen:
      "Los indestructibles es un thriller de acción sobre un grupo de mercenarios contratados para que se infiltren en un país sudamericano con el fin de derrocar a su despiadado dictador. Tan pronto como inician la misión, esos hombres se dan cuenta de que las cosas no son lo que parecen, y se ven atrapados en una peligrosa red de engaño y traición. Con la misión frustrada y una vida inocente en peligro, los hombres van a vérselas con un desafío incluso mayor, el que amenaza con destruir esta banda de camaradas cuyo lazo les hace sentirse como hermanos.",
  },
  {
    id: "Turbo",
    genero: "animacion",
    img: "https://i.blogs.es/b83d9c/turbo-20poster/1366_2000.jpg",
    src: "https://ok.ru/videoembed/4467095833157",
    resumen:
      "Turbo es un caracol de jardín con un sueño imposible: convertirse en el caracol más rápido del mundo. Cuando un extraño accidente le da el poder de la súper velocidad, Turbo intentará cumplir su sueño: ganar las 500 millas de Indianápolis.",
  },
  {
    id: "El pico de dante",
    genero: "catastrofe",
    img: "https://cl2.buscafs.com/www.tomatazos.com/public/uploads/images/32758/32758_173x256.jpg",
    src: "https://ok.ru/videoembed/5277957294720",
    resumen:
      "Harry Dalton, un prestigioso vulcanólogo detecta una peligrosa actividad sísmica y avisa de una posible erupción en las cercanías de Dante's Peak, un tranquilo pueblecito del Noroeste que está coronado por un inmenso volcán apagado.",
  },
  {
    id: "Borat",
    genero: "comedia",
    img: "https://www.elespectadorimaginario.com/wp-content/webpc-passthru.php?src=https://www.elespectadorimaginario.com/wp-content/uploads/borat2poster.jpg&nocache=1",
    src: "https://ok.ru/videoembed/584878459581",
    resumen:
      "Situaciones atroces ocurren cuando Borat, un popular reportero (Sacha Baron Cohen) de Kazajistán, llega a los Estados Unidos para filmar un documental sobre por qué América es una gran nación. A lo largo del camino, él se dedica a ofender a casi todas las personas que conoce, se enamora de la actriz Pamela Anderson, y realiza un viaje a lo largo del país para convertirla en su esposa.",
  },
  {
    id: "Rec",
    genero: "terror",
    img: "https://pics.filmaffinity.com/rec-273731015-large.jpg",
    src: "https://ok.ru/videoembed/7890632510169?nochat=1",
    resumen:
      "Una reportera y su camarógrafo graban la terrible epidemia de una enfermedad que transforma a los humanos en caníbales en un edificio de vecinos que ha sido puesto en cuarentena. Es sólo el comienzo de una larga pesadilla y de un dramático reportaje único en el mundo.",
  },
  {
    id: "Impacto profundo",
    genero: "catastrofe",
    img: "https://posters.movieposterdb.com/08_04/1998/120647/l_120647_95756169.jpg",
    src: "https://ok.ru/videoembed/3954733746805",
    resumen:
      "El joven Leo Biederman se ha apuntado al Club de Astronomía del colegio, más para estar con Sarah Hotchner que para mirar el cielo. Un día descubre en un cúmulo de estrellas una gran mancha blanca que resulta ser un cometa que está a punto de chocar con la Tierra. Mientras tanto, Jenny Learner, una ambiciosa reportera de la NBC, rastreando una posible historia escandalosa de un senador, descubre accidentalmente que Ellie (E.L.E.) no es el nombre de su amante, sino de un cometa que amenaza con destruir la Tierra.",
  },
  {
    id: "300",
    genero: "accion",
    img: "https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/67/71/17/20027466.jpg",
    src: "https://ok.ru/videoembed/7010980465287?nochat=1",
    resumen:
      "En el año 480 antes de Cristo, existe un estado de guerra entre Persia, dirigida por el rey Jerjes, y Grecia. En la batalla de la Termópilas, Leonidas, rey de la ciudad griega de Esparta, encabeza a sus 300 bravos soldados en contra del numeroso ejército persa. A pesar de que la muerte aguarda a los espartanos, su sacrificio inspira a toda Grecia para unirla en contra de su enemigo común.",
  },
  {
    id: "Constantine",
    genero: "ciencia ficcion",
    img: "https://pics.filmaffinity.com/constantine-696456521-mmed.jpg",
    src: "https://ok.ru/videoembed/3807702878727?nochat=1",
    resumen:
      "Nacido con el don de ver a los ángeles y demonios que viven en la tierra bajo aspecto humano, John Constantine se quitó la vida para escapar de sus visiones. Resucitado en contra de su voluntad, patrulla la frontera terrenal entre cielo e infierno.",
  },
  {
    id: "Historia americana X",
    genero: "drama",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgH-e4Quj_8oprs11bP4ugtEbKOfRT00Pcuv8r58lfdPDIbUXfCPeG2MbcU0XkJ7oUzZCRoQiFxQjeci477UNPKpl25DKdl9M8GWuLAwWWhBMxFbhwZ4D1Ly672m8-xyYQb5xKPBRYibG9g/s200/American+history.bmp",
    src: "https://ok.ru/videoembed/5271270394452?nochat=1",
    resumen:
      "Tras cumplir condena por el asesinato de dos hombres negros, Derek Vinyard, logra vencer su fanatismo, pero no se dará por satisfecho hasta que no haga entrar en razón a su hermano, quien le ve como un héroe e intenta seguir sus pasos.",
  },
  {
    id: "ECW One Night Stand",
    genero: "wwf",
    img: "https://m.media-amazon.com/images/M/MV5BNDBjNGNhYzctMjM1Zi00YmZjLWFlZDQtZmQ5MDAwNGY0MjYwXkEyXkFqcGdeQXVyMzQwNDk2ODM@._V1_.jpg",
    src: "//ok.ru/videoembed/8927396891296?nochat=1",
    resumen:
      " ECW One Night Stand 2006, dirigido por Kevin Dunn, es un evento de lucha libre profesional producido por la World Wrestling Entertainment (WWE). Este evento especial marcó un hito en la historia de la ECW, ofreciendo combates intensos y emocionantes que capturaron la esencia del estilo hardcore de la ECW.",
  },
];
/* termina arrai */

/* inicia funcion agrega interfaz de peliculas con imagenes en html */
const cargaPeliculas = (arr = ArrPeliculas) => {
  contenedorPeliculas.innerHTML = arr
    .map(
      ({ img, id }) => `
    <img class="pelicula-html" src="${img}" data-id="${id}" title="${id}">
  `
    )
    .join("");
};
cargaPeliculas();
/* termina funcion interfaz*/

/* inicia funcion agrega link video a reproductor */
const indexVideo = () => {
  const peliculaHtml = document.querySelectorAll(".pelicula-html");
  peliculaHtml.forEach((pelicula) => {
    pelicula.addEventListener("click", () => {
      const peliculaId = pelicula.getAttribute("data-id");
      const peliculaSeleccionada = ArrPeliculas.find(
        (p) => p.id === peliculaId
      );

      menu.style.display = "none";
      contenedorPeliculas.style.display = "none";
      ventana.style.display = "flex";
      window.scrollTo(0, 0);
      document.body.style.backgroundColor = "black";
      h1.style.textShadow = "none";
      main.style.boxShadow = "none";
      reproductor.src = peliculaSeleccionada.src;
      resumen.innerHTML = `
      <h2 class="titulo-resumen">${peliculaSeleccionada.id}</h2>
      <p class="p-resumen"><img class="img-resumen" src="${peliculaSeleccionada.img}">${peliculaSeleccionada.resumen}</p>
      `;
    });
  });
};
indexVideo();
/* termina funcion agrega link */

/* inicia funcion cerrar reproductor*/
cerrar.addEventListener("click", () => {
  reproductor.src = "";
  menu.style.display = "block";
  ventana.style.display = "none";
  contenedorPeliculas.style.display = "grid";
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

/* inicia funcion filtro de input select */
filtros.forEach((filtro) => {
  filtro.addEventListener("change", (e) => {
    contenedorPeliculas.innerHTML = "";
    switch (e.target.value) {
      case "accion":
        cargaPeliculas(
          ArrPeliculas.filter((pelicula) => pelicula.genero === "accion")
        );
        break;

      case "drama":
        cargaPeliculas(
          ArrPeliculas.filter((pelicula) => pelicula.genero === "drama")
        );
        break;

      case "animacion":
        cargaPeliculas(
          ArrPeliculas.filter((pelicula) => pelicula.genero === "animacion")
        );
        break;

      case "catastrofe":
        cargaPeliculas(
          ArrPeliculas.filter((pelicula) => pelicula.genero === "catastrofe")
        );
        break;

      case "ciencia-ficcion":
        cargaPeliculas(
          ArrPeliculas.filter(
            (pelicula) => pelicula.genero === "ciencia ficcion"
          )
        );
        break;

      case "comedia":
        cargaPeliculas(
          ArrPeliculas.filter((pelicula) => pelicula.genero === "comedia")
        );
        break;

      case "terror":
        cargaPeliculas(
          ArrPeliculas.filter((pelicula) => pelicula.genero === "terror")
        );
        break;

      case "wwf":
        cargaPeliculas(
          ArrPeliculas.filter((pelicula) => pelicula.genero === "wwf")
        );
        break;

      default:
        cargaPeliculas();
        break;
    }
    indexVideo();
  });
});
/* termina select */

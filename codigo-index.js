// inicia Login
document.addEventListener("DOMContentLoaded", () => {
  const inputLogin = document.getElementById("login-input");
  const btnLogin = document.getElementById("login-button");
  const login = document.getElementById("login");

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
});
// termina Login

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

const galeriaPeliculas = document.getElementById("galeria-peliculas");
const menu = document.getElementById("menu");
const objeto = document.getElementById("objeto");
const iframe = document.getElementById("iframe");
const contenedores = document.querySelectorAll(".contenedor");
const resumen = document.getElementById("resumen");
const cerrar = document.getElementById("cerrar");

const arrGaleriaPeliculas = [
  {
    id: "HellBoy 1",
    img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/11/hellboy.jpg?tf=256x",
    src: "https://ok.ru/videoembed/2569435679364",
    resumen:
      "Nacido de las llamas del infierno, el demonio Hellboy es transportado a la Tierra mediante una sombría ceremonia realizada por los nazis, deseosos de utilizar las fuerzas infernales con fines de conquista. Salvado por el doctor Broom, Hellboy es adiestrado para combatir las fuerzas del mal. Armado, con un brazo duro como una piedra, forma equipo con el telépata Abe Sapien y Liz Sherman, capaz de controlar el fuego...",
  },
  {
    id: "HellBoy 2",
    img: "https://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/64/63/19/18942272.jpg",
    src: "https://ok.ru/videoembed/4090091997839",
    resumen:
      "Un malvado elfo rompe un acuerdo milenario entre los seres humanos y ciertos poderes invisibles, lo que acerca el infierno cada vez más a la Tierra. El elfo decide liberar al Ejército Dorado para que le ayude a acabar con toda la humanidad. Hellboy y su equipo son los únicos que pueden salvar la Tierra del fatal destino al que se enfrenta. Para eso, Hellboy viajará entre dos mundos, combatiendo a los seres fantásticos.",
  },
  {
    id: "Carnage 98 wwf",
    img: "https://m.media-amazon.com/images/M/MV5BM2VjYzI0ODctZDc2Mi00NjcxLTlhODQtODJkMGNjMGZlMDhkXkEyXkFqcGc@._V1_QL75_UX380_CR0,63,380,562_.jpg",
    src: "https://ok.ru/videoembed/3926574697071",
    resumen:
      "Desde Londres, Inglaterra, llega WWE Capital Carnage. Ken Shamrock defiende el título intercontinental de la WWE contra Steve Blackman. L.O.D. 2000 lucha contra The Headbangers. The Rock defiende el campeonato de la WWE contra X-Pac. Triple H se enfrenta a Jeff Jarrett. The New Age Outlaws defienden el campeonato mundial en parejas de la WWE contra D-Lo Brown y Mark Henry, ¡y más!",
  },
  {
    id: "El club de la pelea",
    img: "https://www.arte.unicen.edu.ar/cdab/wp-content/uploads/2018/11/club-de-la-pelea.jpg",
    src: "https://ok.ru/videoembed/7963623295698",
    resumen:
      "Un joven hastiado de su gris y monótona vida lucha contra el insomnio. En un viaje en avión conoce a un carismático vendedor de jabón que sostiene una teoría muy particular: el perfeccionismo es cosa de gentes débiles; sólo la autodestrucción hace que la vida merezca la pena. Ambos deciden entonces fundar un club secreto de lucha, donde poder descargar sus frustaciones y su ira, que tendrá un éxito arrollador.",
  },
  {
    id: "Underworld",
    img: "https://underbrain.com/wp-content/uploads/2020/11/underworld-2003.jpg.webp",
    src: "https://ok.ru/videoembed/3612556921461",
    resumen:
      "Durante siglos, dos razas han ido evolucionando en las profundidades de la Tierra: los aristocráticos y sofisticados vampiros y los brutales hombres-lobo (Lycans), cuya existencia siempre había formado parte del mundo de los mitos y las leyendas. Estas razas nocturnas son enemigas mortales y están condenadas a vivir en perpetua guerra hasta que sólo una de ellas sobreviva.",
  },
  {
    id: "Underworld la Rebelion",
    img: "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/69/04/08/20290498.jpg",
    src: "https://ok.ru/videoembed/7764442745428?nochat=1",
    resumen:
      "Viktor, el cruel rey de los vampiros, ha estado persiguiendo a los licántropos durante siglos. El joven licántropo Lucian consigue el apoyo de su gente para luchar contra Viktor y sus 'Death dealers'. Con la ayuda de su amante secreta, una vampira, Lucian lidera a los hombres lobo en una batalla final que les llevará a librarse del yugo de los vampiros o a morir en el intento.",
  },
  {
    id: "Alien",
    img: "https://www.elche.es/wp-content/uploads/2019/10/Alien-El-Octavo-Pasajero.jpg",
    src: "https://ok.ru/videoembed/7333624416825",
    resumen:
      "De regreso a la Tierra, la nave de carga Nostromo interrumpe su viaje y despierta a sus siete tripulantes. El ordenador central, MADRE, ha detectado la misteriosa transmisión de una forma de vida desconocida, procedente de un planeta cercano aparentemente deshabitado. La nave se dirige entonces al extraño planeta para investigar el origen de la comunicación.",
  },
  {
    id: "300",
    img: "https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/67/71/17/20027466.jpg",
    src: "https://ok.ru/videoembed/7010980465287?nochat=1",
    resumen:
      "En el año 480 antes de Cristo, existe un estado de guerra entre Persia, dirigida por el rey Jerjes, y Grecia. En la batalla de la Termópilas, Leonidas, rey de la ciudad griega de Esparta, encabeza a sus 300 bravos soldados en contra del numeroso ejército persa. A pesar de que la muerte aguarda a los espartanos, su sacrificio inspira a toda Grecia para unirla en contra de su enemigo común.",
  },
  {
    id: "Constantine",
    img: "https://pics.filmaffinity.com/constantine-696456521-mmed.jpg",
    src: "https://ok.ru/videoembed/3807702878727?nochat=1",
    resumen:
      "Nacido con el don de ver a los ángeles y demonios que viven en la tierra bajo aspecto humano, John Constantine se quitó la vida para escapar de sus visiones. Resucitado en contra de su voluntad, patrulla la frontera terrenal entre cielo e infierno.",
  },
  {
    id: "Historia americana X",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgH-e4Quj_8oprs11bP4ugtEbKOfRT00Pcuv8r58lfdPDIbUXfCPeG2MbcU0XkJ7oUzZCRoQiFxQjeci477UNPKpl25DKdl9M8GWuLAwWWhBMxFbhwZ4D1Ly672m8-xyYQb5xKPBRYibG9g/s200/American+history.bmp",
    src: "https://ok.ru/videoembed/5271270394452?nochat=1",
    resumen:
      "Tras cumplir condena por el asesinato de dos hombres negros, Derek Vinyard, logra vencer su fanatismo, pero no se dará por satisfecho hasta que no haga entrar en razón a su hermano, quien le ve como un héroe e intenta seguir sus pasos.",
  },
];
const cargaGaleriaPeliculas = (arr = arrGaleriaPeliculas) => {
  galeriaPeliculas.innerHTML = arr
    .map(
      ({ id, img }) => `
     <img src="${img}" class="caja" id="${id}" title="${id}" alt="${id}">
    `
    )
    .join("");
};
cargaGaleriaPeliculas();

const cajas = document.querySelectorAll(".caja");
cajas.forEach((caja, index) => {
  caja.addEventListener("click", () => {
    menu.style.display = "none";

    contenedores.forEach((contenedor) => (contenedor.style.display = "none"));
    objeto.style.display = "block";
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = "black";
    h1.style.textShadow = "none";
    main.style.boxShadow = "none";
    iframe.src = arrGaleriaPeliculas[index].src;
    resumen.innerHTML = `
      <h2 class="titulo-resumen">${arrGaleriaPeliculas[index].id}</h2>
      <p class="p-resumen"><img class="img-resumen" src="${arrGaleriaPeliculas[index].img}">${arrGaleriaPeliculas[index].resumen}</p>
      `;
  });
});
cerrar.addEventListener("click", () => {
  iframe.src = iframe.src;
  iframe.src = "";
  menu.style.display = "block";
  document.body.style.backgroundColor = "";
  h1.style.textShadow = "";
  main.style.boxShadow = "";
  objeto.style.display = "none";
  contenedores.forEach((contenedor) => (contenedor.style.display = "block"));
});

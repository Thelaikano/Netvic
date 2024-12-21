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

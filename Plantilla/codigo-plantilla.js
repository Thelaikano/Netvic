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

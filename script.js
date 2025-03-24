// Cambio de imagen para la vista completa
function changeImage(small) {
    const full = document.getElementById("imagebox");
    full.src = small.src;

    // Agregar una clase para efecto de transición
    full.classList.add("fade-in");
    setTimeout(() => {
        full.classList.remove("fade-in");
    }, 500); // Duración de la transición
}

// Validación del formulario de inicio de sesión
document.querySelector("#loginForm").addEventListener("submit", function (event) {
    const username = document.querySelector(".username").value;
    const password = document.querySelector("input[name='password']").value;

    // Validar si el usuario y contraseña son correctos
    if (username === "juan123" && password === "pepe") {
        alert("Inicio de sesión exitoso");

        // Redirigir a la página index.html
        window.location.href = "index.html"; // Redirige a la página de inicio
    } else {
        alert("Usuario o contraseña incorrectos");
        event.preventDefault(); // Evita el envío del formulario
    }
});

// Mostrar el botón al hacer scroll
window.addEventListener("scroll", () => {
    const button = document.getElementById("backToTop");
    if (window.scrollY > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

// Volver arriba al hacer clic
document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// Cambiar entre modo oscuro y claro
const toggleButton = document.getElementById("themeToggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Cambiar el texto del botón según el modo
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Modo Claro";
    } else {
        toggleButton.textContent = "Modo Oscuro";
    }
});


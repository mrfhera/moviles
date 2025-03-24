
function changeImage(small) {
    const full = document.getElementById("imagebox");
    full.src = small.src;

    // Agregar una clase para efecto de transición
    full.classList.add("fade-in");
    setTimeout(() => {
        full.classList.remove("fade-in");
    }, 500); // Duración de la transición
}
document.querySelector("form").addEventListener("submit", function (event) {
    const username = document.querySelector(".username").value;
    const password = document.querySelector("input[name='password']").value;

    if (!username || !password) {
        alert("Por favor, completa todos los campos.");
        event.preventDefault(); // Evita el envío del formulario
    } else {
        alert("Inicio de sesión exitoso");
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
const reviewCards = document.querySelectorAll(".review_card");

function showCards() {
    reviewCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showCards);

document.querySelector(".search_bar button").addEventListener("click", (event) => {
    const email = document.querySelector(".search_bar input").value;

    if (email) {
        alert(`¡Gracias por suscribirte, ${email}!`);
    } else {
        alert("Por favor, ingresa un correo válido.");
    }
});

// Función para inicializar las estrellas interactivas
function initStarRatings() {
    const stars = document.querySelectorAll('.like i');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            setStarRating(stars, index + 1);
        });
    });
}

// Función para cambiar visualmente las estrellas según la calificación
function setStarRating(stars, rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('fa-solid');
            star.classList.remove('fa-regular');
        } else {
            star.classList.add('fa-regular');
            star.classList.remove('fa-solid');
        }
    });
    newFunction();

    function newFunction() {
        console.log(Calificación, seleccionada, $, { rating }, estrellas);
    }
}

// Función para añadir una nueva reseña dinámicamente
function addReview(name, image, comment, rating) {
    const reviewBox = document.querySelector('.review_box');

    // Crear elementos del DOM para la nueva reseña
    const reviewCard = document.createElement('div');
    reviewCard.classList.add('review_card');

    reviewCard.innerHTML = `
        <div class="card_top">
            <div class="profile">
                <div class="profile_image">
                    <img src="${image}" alt="${name}">
                </div>
                <div class="name">
                    <strong>${name}</strong>
                    <div class="like">${generateStarHTML(rating)}</div>
                </div>
            </div>
        </div>
        <div class="comment">
            <p>${comment}</p>
        </div>
    `;

    // Agregar la nueva reseña al contenedor
    reviewBox.appendChild(reviewCard);
}

// Función para generar HTML de estrellas dinámicamente
function generateStarHTML(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        starsHTML += i <= rating
            ? '<i class="fa-solid fa-star"></i>'
            : '<i class="fa-regular fa-star"></i>';
    }
    return starsHTML;
}

// Función para filtrar reseñas por calificación
function filterReviews(minRating) {
    const reviewCards = document.querySelectorAll('.review_card');
    reviewCards.forEach((card) => {
        const stars = card.querySelectorAll('.like .fa-solid').length;
        if (stars >= minRating) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Inicialización del script
document.addEventListener('DOMContentLoaded', () => {
    initStarRatings();

    // Ejemplo: Agregar una nueva reseña al cargar la página
    addReview(
        'Nuevo Usuario',
        'imagen/default.jpg',
        '¡Esta es una reseña añadida dinámicamente!',
        4
    );

    // Ejemplo: Filtrar reseñas con 4 estrellas o más
    // filterReviews(4);
});

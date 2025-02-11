// Obtener los elementos de los íconos y los modales
const searchIcon = document.getElementById("search-icon");
const userIcon = document.getElementById("user-icon");
const cartIcon = document.getElementById("cart-icon");

const searchModal = document.getElementById("search-form");
const userModal = document.getElementById("user-modal");
const cartModal = document.getElementById("cart-modal");

const closeButtons = document.querySelectorAll(".modal button");

// Función para mostrar el modal
function showModal(modal) {
    modal.style.display = "block"; // Mostrar modal
}

// Función para cerrar el modal
function closeModal(modal) {
    modal.style.display = "none"; // Ocultar modal
}

// Agregar eventos de clic a los íconos
searchIcon.addEventListener("click", () => showModal(searchModal));
userIcon.addEventListener("click", () => showModal(userModal));
cartIcon.addEventListener("click", () => showModal(cartModal));

// Agregar evento de clic a los botones de cierre de los modales
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Cerrar el modal en el que está el botón
        closeModal(button.closest(".modal"));
    });
});
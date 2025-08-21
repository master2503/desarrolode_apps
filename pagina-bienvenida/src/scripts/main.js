

document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    const button = document.getElementById('welcome-button');

    if (welcomeMessage) {
        welcomeMessage.textContent = "¡Bienvenido a nuestra página!";
    }

    if (button) {
        button.addEventListener('click', () => {
            alert("¡Gracias por visitar nuestra página!");
        });
    }
});
// Lógica interactiva para el Sistema de Gimnasio
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Evita que la página se recargue de golpe
            
            const nombre = document.getElementById("nombre").value;
            const membresia = document.getElementById("membresia").value;
            
            if (nombre.trim() === "") {
                alert("Por favor, ingresa el nombre del miembro.");
                return;
            }
            
            alert(`¡Éxito! El miembro "${nombre}" con membresía "${membresia}" ha sido registrado correctamente.`);
            form.reset(); // Limpia el formulario
        });
    }
});

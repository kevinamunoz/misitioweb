document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input");
    const barras = document.querySelectorAll(".barra");
    const porcentajes = document.querySelectorAll(".porcentaje");
    const graficarBtn = document.getElementById("graficarBtn");

    graficarBtn.addEventListener("click", function() {
        let totalVotos = 0;

        inputs.forEach((input) => {
            const votos = parseFloat(input.value) || 0;
            totalVotos += votos;
        });

        barras.forEach((barra, index) => {
            const puntaje = parseFloat(inputs[index].value) || 0;

            const proporcion = totalVotos > 0 ? (puntaje / totalVotos) * 100 : 0;
            const anchoBarra = proporcion + "%";

            barra.style.width = anchoBarra;
            porcentajes[index].textContent = proporcion.toFixed(0) + "%";
        });
    });
});

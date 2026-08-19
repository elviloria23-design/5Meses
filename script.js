const boton = document.getElementById("btnAbrir");
const sobre = document.querySelector(".sobre");

let cartaActual = 1;

boton.addEventListener("click", function () {

    // =========================
    // ABRIR EL SOBRE
    // =========================

    if (cartaActual === 1) {

        sobre.classList.add("abierto");

        boton.textContent = "SIGUIENTE CARTA 💌";

        cartaActual = 2;

        return;
    }


    // =========================
    // CARTA 2
    // =========================

    if (cartaActual === 2) {

        sobre.classList.add("mostrar-carta2");

        boton.textContent = "SIGUIENTE CARTA 💌";

        cartaActual = 3;

        return;
    }


    // =========================
    // CARTA 3
    // =========================

    if (cartaActual === 3) {

        sobre.classList.add("mostrar-carta3");

        boton.textContent = "SIGUIENTE CARTA 💌";

        cartaActual = 4;

        return;
    }


    // =========================
    // CARTA 4
    // =========================

    if (cartaActual === 4) {

        sobre.classList.add("mostrar-carta4");

        boton.textContent = "TE AMO ❤️";

        cartaActual = 5;

        return;
    }


    // =========================
    // SORPRESA FINAL
    // =========================

    if (cartaActual === 5) {

        const sorpresa = document.getElementById("sorpresaFinal");

        sorpresa.classList.add("mostrar");

        boton.style.display = "none";

    }

});
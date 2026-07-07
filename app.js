/* ==========================================================================
   simulator.js — Planificador sencillo de actividad física saludable.
   Entrega una recomendación EDUCATIVA GENERAL, no médica, a partir de
   disponibilidad semanal, intensidad percibida, intereses y objetivo.
   ========================================================================== */

(function () {
  "use strict";

  const form = document.getElementById("simForm");
  if (!form) return;

  const resultBox = document.getElementById("simResult");

  const INTERES_ACTIVIDADES = {
    equipo: ["fútbol reducido con amigos", "vóleibol recreativo", "básquetbol 3x3"],
    individual: ["trote suave", "bicicleta", "salto de cuerda"],
    coordinacion: ["circuito de coordinación con conos", "juegos de manipulación con balón"],
    baile: ["rutinas de baile o ritmo", "juegos con música y desplazamientos"]
  };

  function recomendarFrecuencia(dias) {
    if (dias <= 1) return "Comienza con 2 bloques breves a la semana antes de aumentar la frecuencia.";
    if (dias <= 3) return "Tu disponibilidad permite mantener " + dias + " sesiones semanales, un buen punto de partida sistemático.";
    return "Con " + dias + " días disponibles puedes distribuir sesiones de distinta intensidad durante la semana, alternando con descanso activo.";
  }

  function recomendarIntensidad(intensidad) {
    const mapa = {
      baja: "Prioriza sesiones de baja intensidad (caminatas, movilidad, juegos suaves) e ve aumentando de forma progresiva.",
      media: "Una intensidad moderada, con percepción de esfuerzo controlada, es adecuada para sostener la actividad en el tiempo.",
      alta: "Si percibes alta intensidad, asegura períodos de descanso entre sesiones y no la practiques todos los días consecutivos."
    };
    return mapa[intensidad] || mapa.media;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dias = parseInt(form.querySelector('[name="dias"]').value, 10) || 0;
    const intensidad = form.querySelector('[name="intensidad"]:checked')?.value || "media";
    const interesesEls = form.querySelectorAll('[name="intereses"]:checked');
    const objetivo = form.querySelector('[name="objetivo"]').value;

    const intereses = Array.from(interesesEls).map((i) => i.value);
    let actividadesSugeridas = [];
    intereses.forEach((int) => {
      actividadesSugeridas = actividadesSugeridas.concat(INTERES_ACTIVIDADES[int] || []);
    });
    if (!actividadesSugeridas.length) actividadesSugeridas = ["caminatas activas", "juegos predeportivos suaves"];

    const objetivoTexto = {
      salud: "mantener un estilo de vida saludable y sostenible",
      social: "socializar y disfrutar el movimiento en compañía",
      rendimiento: "mejorar tu condición física de forma progresiva",
      estres: "liberar tensión y mejorar tu bienestar emocional"
    }[objetivo] || "cuidar tu bienestar general";

    const html = `
      <h3>Tu orientación semanal</h3>
      <p>${recomendarFrecuencia(dias)}</p>
      <p>${recomendarIntensidad(intensidad)}</p>
      <p>Como tu objetivo es <strong>${objetivoTexto}</strong>, algunas actividades acordes a tus intereses son:</p>
      <ul>${actividadesSugeridas.slice(0, 4).map((a) => `<li>${a}</li>`).join("")}</ul>
      <div class="sim-warning">
        <strong>Autocuidado y progresión:</strong> esta es una orientación educativa general, no una prescripción médica.
        Aumenta la carga de forma gradual, hidrátate, realiza calentamiento y elongación, y detente ante dolor o molestia.
        Si tienes una condición de salud preexistente, consulta con un profesional de la salud antes de aumentar la intensidad.
      </div>
    `;

    resultBox.innerHTML = html;
    resultBox.classList.add("show");
    resultBox.setAttribute("tabindex", "-1");
    resultBox.focus();

    if (window.EFIAddPoints) window.EFIAddPoints(4);
    if (window.EFIUnlockBadge) window.EFIUnlockBadge("planificador-usado");
  });

  const resetBtn = document.getElementById("simReset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      form.reset();
      resultBox.classList.remove("show");
      resultBox.innerHTML = "";
    });
  }
})();

/* ==========================================================================
   assistant.js — EFI-Bot: asistente flotante con base de conocimientos
   preconfigurada (ver data/knowledge-base.js) y lectura en voz alta
   mediante la Web Speech API. No es una IA generativa y no usa claves API.
   ========================================================================== */

(function () {
  "use strict";

  const toggle = document.getElementById("botToggle");
  const panel = document.getElementById("botPanel");
  const closeBtn = document.getElementById("botClose");
  const messages = document.getElementById("botMessages");
  const form = document.getElementById("botForm");
  const input = document.getElementById("botInput");
  const suggestionsBox = document.getElementById("botSuggestions");
  const audioControls = document.getElementById("botAudioControls");
  const playBtn = document.getElementById("botPlay");
  const pauseBtn = document.getElementById("botPause");
  const stopBtn = document.getElementById("botStop");

  if (!toggle || !panel) return;

  const speechSupported = "speechSynthesis" in window;
  let lastBotText = "";

  toggle.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen && input) input.focus();
  });
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      panel.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    });
  }

  function addMessage(text, who) {
    const div = document.createElement("div");
    div.className = "bot-msg " + who;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function normalize(str) {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function findAnswer(query) {
    const q = normalize(query);
    let best = null;
    let bestScore = 0;
    (window.EFI_KNOWLEDGE_BASE || []).forEach((entry) => {
      let score = 0;
      entry.keywords.forEach((k) => {
        if (q.includes(normalize(k))) score += normalize(k).split(" ").length;
      });
      if (score > bestScore) {
        bestScore = score;
        best = entry;
      }
    });
    return best ? best.respuesta : window.EFI_FALLBACK;
  }

  function respond(query) {
    addMessage(query, "user");
    const answer = findAnswer(query);
    lastBotText = answer;
    setTimeout(() => {
      addMessage(answer, "bot");
      if (speechSupported && audioControls) audioControls.style.display = "flex";
    }, 250);
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = (input.value || "").trim();
      if (!val) return;
      respond(val);
      input.value = "";
    });
  }

  function renderSuggestions() {
    if (!suggestionsBox) return;
    (window.EFI_SUGGERIDAS || []).forEach((s) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = s;
      b.addEventListener("click", () => respond(s));
      suggestionsBox.appendChild(b);
    });
  }
  renderSuggestions();

  addMessage(
    "Hola, soy EFI-Bot 👋 Soy un asistente educativo con respuestas preconfiguradas sobre los contenidos de este OVA. No reemplazo al docente ni a profesionales de la salud. ¿En qué puedo ayudarte?",
    "bot"
  );

  /* ---------- Lectura en voz alta (Web Speech API) ---------- */
  if (speechSupported) {
    if (playBtn) {
      playBtn.addEventListener("click", () => {
        if (!lastBotText) return;
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(lastBotText);
        utter.lang = "es-ES";
        window.speechSynthesis.speak(utter);
      });
    }
    if (pauseBtn) {
      pauseBtn.addEventListener("click", () => {
        if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
          window.speechSynthesis.pause();
        } else if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      });
    }
    if (stopBtn) {
      stopBtn.addEventListener("click", () => window.speechSynthesis.cancel());
    }
  } else if (audioControls) {
    audioControls.innerHTML = '<p class="small">Tu navegador no admite lectura en voz alta. Puedes leer las respuestas escritas en este panel.</p>';
  }
})();

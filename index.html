/* ==========================================================================
   app.js — Lógica general del OVA:
   navegación, indicador de progreso, gamificación, infografía interactiva,
   mapa conceptual, caso interactivo individual y reto colaborativo.
   ========================================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "ova-efi200-progreso";

  /* ---------- Estado persistente (localStorage) ---------- */
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : { sections: {}, points: 0, badges: [] };
    } catch (e) {
      return { sections: {}, points: 0, badges: [] };
    }
  }
  function saveState(state) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
    catch (e) { /* almacenamiento no disponible: se continúa sin guardar */ }
  }
  const state = loadState();
  window.EFIState = state;
  window.EFISave = () => saveState(state);

  function addPoints(n) {
    state.points = (state.points || 0) + n;
    saveState(state);
    updateGamificationUI();
  }
  window.EFIAddPoints = addPoints;

  function unlockBadge(id) {
    if (!state.badges) state.badges = [];
    if (!state.badges.includes(id)) {
      state.badges.push(id);
      saveState(state);
      updateGamificationUI();
    }
  }
  window.EFIUnlockBadge = unlockBadge;

  function updateGamificationUI() {
    const pointsEl = document.getElementById("pointsValue");
    if (pointsEl) pointsEl.textContent = state.points || 0;
    document.querySelectorAll(".badge[data-badge]").forEach((el) => {
      const id = el.getAttribute("data-badge");
      el.classList.toggle("unlocked", (state.badges || []).includes(id));
    });
  }

  /* ---------- Navegación móvil ---------- */
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
    mainNav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- Indicador de avance por secciones vistas ---------- */
  const sections = Array.from(document.querySelectorAll("main .section[id]"));
  const progressFill = document.getElementById("progressFill");

  function updateProgressBar() {
    const total = sections.length;
    const seen = Object.keys(state.sections || {}).length;
    const pct = total ? Math.round((seen / total) * 100) : 0;
    if (progressFill) {
      progressFill.style.width = pct + "%";
      progressFill.setAttribute("aria-valuenow", String(pct));
    }
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            state.sections[entry.target.id] = true;
            saveState(state);
            updateProgressBar();
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => observer.observe(s));
  }
  updateProgressBar();
  updateGamificationUI();

  /* ---------- Infografía interactiva (capacidades y habilidades) ---------- */
  document.querySelectorAll(".node-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("aria-controls");
      const detail = document.getElementById(targetId);
      const expanded = btn.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".node-btn").forEach((b) => {
        b.setAttribute("aria-expanded", "false");
        const d = document.getElementById(b.getAttribute("aria-controls"));
        if (d) d.classList.remove("show");
      });
      if (!expanded) {
        btn.setAttribute("aria-expanded", "true");
        if (detail) detail.classList.add("show");
        addPoints(1);
        unlockBadge("explorador-infografia");
      }
    });
  });

  /* ---------- Mapa conceptual interactivo (SVG) ---------- */
  const mapaData = {
    afisica: { label: "Actividad física", rel: ["saludable", "motrices", "convivencia"], info: "Eje central del OVA: la práctica sistemática de movimiento." },
    saludable: { label: "Vida saludable", rel: ["afisica", "etica"], info: "Estilo de vida que integra autocuidado y bienestar, competencia sello USM." },
    motrices: { label: "Habilidades motrices", rel: ["afisica", "convivencia"], info: "Capacidades básicas y complejas que se ponen en juego en cada actividad." },
    convivencia: { label: "Convivencia", rel: ["motrices", "equipo", "saludable"], info: "Se construye en los juegos de socialización y el trabajo colectivo." },
    etica: { label: "Ética", rel: ["saludable", "equipo"], info: "Juego limpio, respeto por reglas y compañeros, inteligencia kinestésica." },
    equipo: { label: "Trabajo en equipo", rel: ["convivencia", "etica"], info: "Coordinar roles y comunicarse para lograr un objetivo común en clase." }
  };

  const mapInfo = document.getElementById("mapInfo");
  document.querySelectorAll(".concept-node-svg").forEach((node) => {
    node.addEventListener("click", () => activateNode(node));
    node.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activateNode(node); }
    });
  });

  function activateNode(node) {
    const id = node.getAttribute("data-node");
    const data = mapaData[id];
    document.querySelectorAll(".concept-node-svg circle").forEach((c) => {
      c.setAttribute("fill", "#0a2342");
    });
    document.querySelectorAll(".map-edge").forEach((edge) => edge.setAttribute("stroke", "#d7d3c6"));
    node.querySelector("circle").setAttribute("fill", "#c81d25");
    if (data) {
      (data.rel || []).forEach((relId) => {
        const edge = document.getElementById("edge-" + [id, relId].sort().join("-"));
        if (edge) edge.setAttribute("stroke", "#f2b705");
      });
      if (mapInfo) {
        mapInfo.innerHTML = "<h4>" + data.label + "</h4><p>" + data.info + "</p><p class='small'>Conceptos relacionados: " +
          data.rel.map((r) => mapaData[r] ? mapaData[r].label : r).join(", ") + "</p>";
      }
    }
    addPoints(1);
    unlockBadge("explorador-mapa");
  }

  /* ---------- Caso interactivo individual ---------- */
  const caseSteps = Array.from(document.querySelectorAll(".decision-step"));
  let caseIndex = 0;
  let habitScore = 50;

  function showCaseStep(i) {
    caseSteps.forEach((s, idx) => s.classList.toggle("active", idx === i));
    document.querySelectorAll(".case-progress span").forEach((el, idx) => {
      el.classList.toggle("done", idx < i);
    });
  }

  document.querySelectorAll(".decision-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const step = btn.closest(".decision-step");
      const feedback = step.querySelector(".feedback-box");
      const delta = parseInt(btn.getAttribute("data-score"), 10) || 0;
      const type = btn.getAttribute("data-type") || "positive";
      habitScore = Math.max(0, Math.min(100, habitScore + delta));

      const bar = document.getElementById("habitBarFill");
      if (bar) bar.style.width = habitScore + "%";

      step.querySelectorAll(".decision-btn").forEach((b) => (b.disabled = true));
      if (feedback) {
        feedback.textContent = btn.getAttribute("data-feedback") || "";
        feedback.classList.remove("positive", "warning");
        feedback.classList.add(type === "warning" ? "warning" : "positive");
        feedback.classList.add("show");
      }
      addPoints(delta > 0 ? 2 : 1);

      const nextBtn = step.querySelector(".case-next");
      if (nextBtn) nextBtn.style.display = "inline-flex";
    });
  });

  document.querySelectorAll(".case-next").forEach((btn) => {
    btn.addEventListener("click", () => {
      caseIndex++;
      if (caseIndex < caseSteps.length) {
        showCaseStep(caseIndex);
      } else {
        const result = document.getElementById("caseResult");
        if (result) {
          result.style.display = "block";
          result.querySelector(".final-score").textContent = habitScore;
          result.querySelector(".final-msg").textContent =
            habitScore >= 70
              ? "Camila logra construir una rutina saludable equilibrada. ¡Buen trabajo tomando decisiones conscientes!"
              : "Camila avanza, pero algunas decisiones podrían mejorar su equilibrio entre estudio, descanso y actividad física. Puedes reiniciar el caso e intentar otras opciones.";
        }
        unlockBadge("caso-completo");
      }
    });
  });

  const caseRestart = document.getElementById("caseRestart");
  if (caseRestart) {
    caseRestart.addEventListener("click", () => {
      caseIndex = 0;
      habitScore = 50;
      const bar = document.getElementById("habitBarFill");
      if (bar) bar.style.width = "50%";
      document.querySelectorAll(".decision-btn").forEach((b) => (b.disabled = false));
      document.querySelectorAll(".feedback-box").forEach((f) => f.classList.remove("show"));
      document.querySelectorAll(".case-next").forEach((b) => (b.style.display = "none"));
      const result = document.getElementById("caseResult");
      if (result) result.style.display = "none";
      showCaseStep(0);
    });
  }
  if (caseSteps.length) showCaseStep(0);

  /* ---------- Reto colaborativo ---------- */
  const challengeTimerEl = document.getElementById("challengeTimer");
  let challengeSeconds = 15 * 60;
  let challengeInterval = null;

  function formatTime(s) {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return m + ":" + sec;
  }
  function renderTimer() {
    if (challengeTimerEl) challengeTimerEl.textContent = formatTime(challengeSeconds);
  }
  renderTimer();

  const startTimerBtn = document.getElementById("startChallengeTimer");
  if (startTimerBtn) {
    startTimerBtn.addEventListener("click", () => {
      if (challengeInterval) return;
      challengeInterval = setInterval(() => {
        challengeSeconds = Math.max(0, challengeSeconds - 1);
        renderTimer();
        if (challengeSeconds === 0) {
          clearInterval(challengeInterval);
          challengeInterval = null;
        }
      }, 1000);
    });
  }
  const resetTimerBtn = document.getElementById("resetChallengeTimer");
  if (resetTimerBtn) {
    resetTimerBtn.addEventListener("click", () => {
      clearInterval(challengeInterval);
      challengeInterval = null;
      challengeSeconds = 15 * 60;
      renderTimer();
    });
  }

  const challengeText = document.getElementById("challengeText");
  const copyBtn = document.getElementById("copyChallenge");
  const downloadBtn = document.getElementById("downloadChallenge");

  if (copyBtn && challengeText) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(challengeText.value);
        copyBtn.textContent = "Copiado ✓";
        addPoints(3);
        unlockBadge("reto-colaborativo");
        setTimeout(() => (copyBtn.textContent = "Copiar propuesta"), 2000);
      } catch (e) {
        copyBtn.textContent = "No se pudo copiar";
      }
    });
  }
  if (downloadBtn && challengeText) {
    downloadBtn.addEventListener("click", () => {
      const blob = new Blob([challengeText.value || ""], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "reto-colaborativo-efi200.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      addPoints(3);
      unlockBadge("reto-colaborativo");
    });
  }

  /* ---------- Recurso C: micro-podcast (Web Speech API) ---------- */
  const podcastText = document.getElementById("podcastTranscript");
  const podcastPlay = document.getElementById("podcastPlay");
  const podcastPause = document.getElementById("podcastPause");
  const podcastStop = document.getElementById("podcastStop");
  const podcastStatus = document.getElementById("podcastStatus");
  const speechOk = "speechSynthesis" in window;

  if (podcastText && podcastPlay) {
    if (!speechOk) {
      if (podcastStatus) podcastStatus.textContent = "Tu navegador no admite lectura en voz alta. Usa la transcripción escrita a continuación.";
      podcastPlay.disabled = true;
      if (podcastPause) podcastPause.disabled = true;
      if (podcastStop) podcastStop.disabled = true;
    } else {
      podcastPlay.addEventListener("click", () => {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(podcastText.textContent);
        utter.lang = "es-ES";
        utter.onstart = () => { if (podcastStatus) podcastStatus.textContent = "Reproduciendo…"; };
        utter.onend = () => { if (podcastStatus) podcastStatus.textContent = "Finalizado."; };
        window.speechSynthesis.speak(utter);
        addPoints(2);
        unlockBadge("podcast-escuchado");
      });
      if (podcastPause) {
        podcastPause.addEventListener("click", () => {
          if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
            window.speechSynthesis.pause();
            if (podcastStatus) podcastStatus.textContent = "En pausa.";
          } else if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            if (podcastStatus) podcastStatus.textContent = "Reproduciendo…";
          }
        });
      }
      if (podcastStop) {
        podcastStop.addEventListener("click", () => {
          window.speechSynthesis.cancel();
          if (podcastStatus) podcastStatus.textContent = "Detenido.";
        });
      }
    }
  }

  /* ---------- Año dinámico en el pie de página ---------- */
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();

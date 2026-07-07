/* ==========================================================================
   quiz.js — Autoevaluación gamificada de la Unidad 1.
   4 opción múltiple, 2 verdadero/falso con explicación,
   1 relación/clasificación, 1 reflexión abierta (no autocorregible).
   Criterio de logro sugerido: 70%.
   ========================================================================== */

(function () {
  "use strict";

  const QUIZ_DATA = [
    {
      type: "mc",
      title: "1. ¿Cuál de las siguientes opciones define mejor la actividad física sistemática?",
      options: [
        "Cualquier movimiento corporal ocasional realizado sin planificación.",
        "La práctica regular y organizada de movimiento, con frecuencia e intensidad planificadas.",
        "Únicamente el ejercicio realizado en un gimnasio con máquinas.",
        "Un tipo de deporte competitivo de alto rendimiento."
      ],
      correct: 1,
      explain: "La actividad física sistemática se caracteriza por su regularidad y planificación, lo que permite generar beneficios sostenidos para la salud."
    },
    {
      type: "mc",
      title: "2. ¿Cuál de estas es una capacidad condicionante?",
      options: ["Coordinación óculo-manual", "Equilibrio", "Fuerza", "Ritmo"],
      correct: 2,
      explain: "La fuerza, junto con la resistencia, velocidad y flexibilidad, corresponde a las capacidades condicionantes trabajadas en el syllabus mediante estaciones de fuerza de tren superior e inferior."
    },
    {
      type: "mc",
      title: "3. Un circuito con aros, bancas y balones que exige ajustar la mirada y el movimiento de las manos, ¿qué capacidad desarrolla principalmente?",
      options: ["Capacidad coordinativa", "Capacidad condicionante", "Habilidad motriz compleja de un deporte específico", "Ninguna, es solo recreación"],
      correct: 0,
      explain: "Ese tipo de circuito trabaja capacidades coordinativas como la coordinación óculo-manual y óculo-podal."
    },
    {
      type: "mc",
      title: "4. ¿Qué caracteriza a un juego de socialización dentro de la asignatura?",
      options: [
        "Se juega en silencio y de forma individual.",
        "Combina movimiento con interacción social, comunicación y convivencia.",
        "Excluye el trabajo en equipo.",
        "No tiene relación con las habilidades motrices."
      ],
      correct: 1,
      explain: "Los juegos de socialización (como pintas en pareja o postas) combinan práctica motriz con vínculo social y convivencia."
    },
    {
      type: "tf",
      title: "5. Verdadero o falso: la competencia sello Vida Saludable solo se aplica dentro de la sala de clases y no se relaciona con la vida universitaria en general.",
      correct: false,
      explain: "Falso. La competencia sello Vida Saludable busca que el estudiante incorpore hábitos de autocuidado en su vida universitaria y personal, más allá de la clase."
    },
    {
      type: "tf",
      title: "6. Verdadero o falso: las habilidades motrices básicas (locomoción, manipulación, equilibrio) son la base para desarrollar habilidades motrices más complejas.",
      correct: true,
      explain: "Verdadero. Las habilidades básicas sostienen el aprendizaje de habilidades complejas, como los fundamentos técnicos de un deporte."
    },
    {
      type: "match",
      title: "7. Relaciona cada concepto con su ejemplo correspondiente.",
      pairs: [
        { left: "Capacidad condicionante", right: "Fuerza de tren superior" },
        { left: "Capacidad coordinativa", right: "Coordinación óculo-podal" },
        { left: "Habilidad motriz básica", right: "Correr, saltar, lanzar" },
        { left: "Juego de socialización", right: "Postas en pareja con balón" }
      ],
      explain: "Cada capacidad o habilidad se reconoce por el tipo de exigencia física o social que plantea la actividad."
    },
    {
      type: "open",
      title: "8. Reflexión y transferencia: piensa en tu semana universitaria actual. ¿Qué capacidad o habilidad motriz de esta unidad podrías aplicar de forma sistemática y por qué?",
      guide: [
        "Menciona una capacidad o habilidad concreta vista en la unidad (por ejemplo, una capacidad condicionante o coordinativa).",
        "Relaciónala con una situación real de tu semana (tiempo disponible, lugar, compañía).",
        "Explica qué beneficio esperarías obtener si la practicas de forma sistemática.",
        "Esta respuesta no se autocalifica: revísala con estos criterios o coméntala con tu docente."
      ]
    }
  ];

  const PASS_THRESHOLD = 70;

  let current = 0;
  let score = 0;
  let maxScore = 0;
  const answered = new Array(QUIZ_DATA.length).fill(false);

  const container = document.getElementById("quizContainer");
  if (!container) return;

  const progressLabel = document.getElementById("quizProgressLabel");
  const progressFill = document.getElementById("quizProgressFill");
  const finalPanel = document.getElementById("quizFinal");
  const prevBtn = document.getElementById("quizPrev");
  const nextBtn = document.getElementById("quizNext");

  function render() {
    container.innerHTML = "";
    QUIZ_DATA.forEach((q, i) => {
      const wrap = document.createElement("div");
      wrap.className = "quiz-question" + (i === current ? " active" : "");
      wrap.setAttribute("data-index", i);

      const title = document.createElement("p");
      title.className = "q-title";
      title.textContent = q.title;
      wrap.appendChild(title);

      if (q.type === "mc") {
        const list = document.createElement("div");
        list.className = "q-options";
        q.options.forEach((opt, oi) => {
          const b = document.createElement("button");
          b.type = "button";
          b.textContent = opt;
          b.addEventListener("click", () => answerMC(i, oi, b, wrap));
          list.appendChild(b);
        });
        wrap.appendChild(list);
      } else if (q.type === "tf") {
        const list = document.createElement("div");
        list.className = "q-options";
        [["Verdadero", true], ["Falso", false]].forEach(([label, val]) => {
          const b = document.createElement("button");
          b.type = "button";
          b.textContent = label;
          b.addEventListener("click", () => answerTF(i, val, b, wrap));
          list.appendChild(b);
        });
        wrap.appendChild(list);
      } else if (q.type === "match") {
        const grid = document.createElement("div");
        grid.className = "match-grid";
        const rightOptions = q.pairs.map((p) => p.right);
        q.pairs.forEach((p, pi) => {
          const row = document.createElement("div");
          row.className = "match-row";
          const left = document.createElement("span");
          left.textContent = p.left;
          const select = document.createElement("select");
          select.setAttribute("aria-label", "Selecciona la pareja correcta para " + p.left);
          const empty = document.createElement("option");
          empty.textContent = "Selecciona…";
          empty.value = "";
          select.appendChild(empty);
          rightOptions.forEach((r) => {
            const o = document.createElement("option");
            o.textContent = r;
            o.value = r;
            select.appendChild(o);
          });
          select.setAttribute("data-correct", p.right);
          row.appendChild(left);
          row.appendChild(select);
          grid.appendChild(row);
        });
        wrap.appendChild(grid);
        const checkBtn = document.createElement("button");
        checkBtn.type = "button";
        checkBtn.className = "btn btn-primary mt-3";
        checkBtn.textContent = "Comprobar relación";
        checkBtn.addEventListener("click", () => answerMatch(i, grid, wrap, checkBtn));
        wrap.appendChild(checkBtn);
      } else if (q.type === "open") {
        const textarea = document.createElement("textarea");
        textarea.rows = 4;
        textarea.style.width = "100%";
        textarea.style.padding = "10px";
        textarea.style.borderRadius = "6px";
        textarea.style.border = "2px solid var(--line)";
        textarea.setAttribute("aria-label", q.title);
        wrap.appendChild(textarea);
        const guideBtn = document.createElement("button");
        guideBtn.type = "button";
        guideBtn.className = "btn btn-outline mt-3";
        guideBtn.textContent = "Ver criterios para revisar mi respuesta";
        const guideBox = document.createElement("div");
        guideBox.className = "reflect-guide";
        guideBox.style.display = "none";
        const ul = document.createElement("ul");
        q.guide.forEach((g) => {
          const li = document.createElement("li");
          li.textContent = g;
          ul.appendChild(li);
        });
        guideBox.appendChild(ul);
        guideBtn.addEventListener("click", () => {
          guideBox.style.display = guideBox.style.display === "none" ? "block" : "none";
          if (!answered[i]) {
            answered[i] = true;
            markSectionDone(i);
          }
        });
        wrap.appendChild(guideBtn);
        wrap.appendChild(guideBox);
      }

      const explain = document.createElement("div");
      explain.className = "q-explain";
      explain.textContent = q.explain || "";
      wrap.appendChild(explain);

      container.appendChild(wrap);
    });
    updateNav();
  }

  function markSectionDone(i) {
    answered[i] = true;
  }

  function answerMC(i, selected, btnEl, wrap) {
    if (answered[i]) return;
    answered[i] = true;
    maxScore += 1;
    const q = QUIZ_DATA[i];
    const buttons = wrap.querySelectorAll(".q-options button");
    buttons.forEach((b, idx) => {
      b.disabled = true;
      if (idx === q.correct) b.classList.add("correct");
    });
    if (selected === q.correct) {
      score += 1;
    } else {
      btnEl.classList.add("incorrect");
    }
    wrap.querySelector(".q-explain").classList.add("show");
    if (window.EFIAddPoints) window.EFIAddPoints(selected === q.correct ? 5 : 1);
  }

  function answerTF(i, selected, btnEl, wrap) {
    if (answered[i]) return;
    answered[i] = true;
    maxScore += 1;
    const q = QUIZ_DATA[i];
    const buttons = wrap.querySelectorAll(".q-options button");
    const correctLabel = q.correct ? "Verdadero" : "Falso";
    buttons.forEach((b) => {
      b.disabled = true;
      if (b.textContent === correctLabel) b.classList.add("correct");
    });
    if (selected === q.correct) {
      score += 1;
    } else {
      btnEl.classList.add("incorrect");
    }
    wrap.querySelector(".q-explain").classList.add("show");
    if (window.EFIAddPoints) window.EFIAddPoints(selected === q.correct ? 5 : 1);
  }

  function answerMatch(i, grid, wrap, checkBtn) {
    if (answered[i]) return;
    const selects = grid.querySelectorAll("select");
    let correctCount = 0;
    selects.forEach((s) => {
      const isCorrect = s.value === s.getAttribute("data-correct");
      s.style.borderColor = s.value ? (isCorrect ? "var(--success)" : "var(--red)") : "var(--line)";
      if (isCorrect) correctCount++;
    });
    answered[i] = true;
    maxScore += 1;
    score += correctCount === selects.length ? 1 : correctCount / selects.length;
    checkBtn.disabled = true;
    wrap.querySelector(".q-explain").classList.add("show");
    if (window.EFIAddPoints) window.EFIAddPoints(correctCount * 2);
  }

  function updateNav() {
    if (progressLabel) progressLabel.textContent = "Pregunta " + (current + 1) + " de " + QUIZ_DATA.length;
    if (progressFill) progressFill.style.width = Math.round(((current + 1) / QUIZ_DATA.length) * 100) + "%";
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.textContent = current === QUIZ_DATA.length - 1 ? "Ver resultado" : "Siguiente";
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (current > 0) {
        current--;
        showCurrent();
      }
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (current < QUIZ_DATA.length - 1) {
        current++;
        showCurrent();
      } else {
        showResult();
      }
    });
  }

  function showCurrent() {
    container.querySelectorAll(".quiz-question").forEach((el, idx) => {
      el.classList.toggle("active", idx === current);
    });
    updateNav();
  }

  function showResult() {
    const closedMax = maxScore || 1;
    const pct = Math.round((score / closedMax) * 100);
    container.style.display = "none";
    document.querySelector(".quiz-nav").style.display = "none";
    if (finalPanel) {
      finalPanel.classList.add("show");
      finalPanel.querySelector(".score-ring").textContent = pct + "%";
      const statusEl = finalPanel.querySelector(".score-status");
      const pass = pct >= PASS_THRESHOLD;
      statusEl.textContent = pass ? "Logrado" : "Por reforzar";
      statusEl.className = "score-status " + (pass ? "pass" : "fail");
      finalPanel.querySelector(".score-detail").textContent =
        "Respondiste correctamente " + Math.round(score * 10) / 10 + " de " + closedMax + " preguntas cerradas (criterio de logro: " + PASS_THRESHOLD + "%).";
    }
    if (window.EFIUnlockBadge) window.EFIUnlockBadge("autoevaluacion-completa");
    if (pct >= PASS_THRESHOLD && window.EFIUnlockBadge) window.EFIUnlockBadge("logro-autoevaluacion");
  }

  const retryBtn = document.getElementById("quizRetry");
  if (retryBtn) {
    retryBtn.addEventListener("click", () => {
      current = 0;
      score = 0;
      maxScore = 0;
      answered.fill(false);
      if (finalPanel) finalPanel.classList.remove("show");
      container.style.display = "block";
      document.querySelector(".quiz-nav").style.display = "flex";
      render();
    });
  }

  render();
})();

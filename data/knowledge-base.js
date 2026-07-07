/* ==========================================================================
   knowledge-base.js
   Base de conocimientos del asistente "EFI-Bot".
   IMPORTANTE: EFI-Bot NO es una IA generativa. Todas sus respuestas están
   preconfiguradas aquí, a partir del syllabus EFI-200 y de los contenidos
   de este mismo sitio. No requiere conexión externa ni claves API.
   ========================================================================== */

const EFI_KNOWLEDGE_BASE = [
  {
    keywords: ["actividad fisica sistematica", "que es actividad fisica sistematica", "concepto actividad fisica"],
    pregunta: "¿Qué es la actividad física sistemática?",
    respuesta: "Es la práctica regular y organizada de movimiento corporal, planificada en frecuencia, duración e intensidad, orientada a generar beneficios sostenidos para la salud física, social y emocional. Se diferencia de la actividad ocasional porque tiene continuidad en el tiempo."
  },
  {
    keywords: ["capacidades condicionantes", "condicionantes"],
    pregunta: "¿Qué son las capacidades condicionantes?",
    respuesta: "Son las capacidades físicas de base energética y muscular: fuerza, resistencia, velocidad y flexibilidad. En el syllabus aparecen trabajadas en estaciones como fuerza de tren superior, fuerza de tren inferior y trabajo abdominal."
  },
  {
    keywords: ["capacidades coordinativas", "coordinativas", "coordinacion"],
    pregunta: "¿Qué son las capacidades coordinativas?",
    respuesta: "Son las capacidades que permiten organizar, regular y adaptar el movimiento: coordinación óculo-manual, óculo-podal, equilibrio y ritmo. Se practican, por ejemplo, en los circuitos con aros, bancas y balones."
  },
  {
    keywords: ["habilidades motrices basicas", "motrices basicas"],
    pregunta: "¿Cuáles son las habilidades motrices básicas?",
    respuesta: "Son los patrones fundamentales de movimiento: locomoción (correr, saltar, reptar), manipulación (lanzar, recepcionar, botear) y equilibrio. Son la base para aprender habilidades más complejas y juegos predeportivos."
  },
  {
    keywords: ["habilidades motrices complejas", "motrices complejas"],
    pregunta: "¿Qué son las habilidades motrices complejas?",
    respuesta: "Son combinaciones de habilidades básicas aplicadas a contextos específicos, como los fundamentos técnicos de un deporte (por ejemplo, el saque en vóleibol o la conducción en fútbol). Requieren mayor precisión y coordinación."
  },
  {
    keywords: ["juegos de socializacion", "socializacion"],
    pregunta: "¿Para qué sirven los juegos de socialización?",
    respuesta: "Favorecen la convivencia, la comunicación y el trabajo en equipo mientras se practican habilidades motrices. En el curso aparecen actividades como pintas en pareja, postas y juegos con cuerdas que combinan movimiento y vínculo social."
  },
  {
    keywords: ["vida saludable", "cts", "competencia sello", "sello"],
    pregunta: "¿Qué es la competencia sello Vida Saludable?",
    respuesta: "Es una competencia transversal de la USM que busca que el estudiante incorpore hábitos de autocuidado y actividad física sistemática como parte de su formación integral, más allá de la nota de la asignatura."
  },
  {
    keywords: ["trabajo en equipo"],
    pregunta: "¿Cómo se relaciona la actividad física con el trabajo en equipo?",
    respuesta: "Muchas actividades del curso se organizan en equipos (postas, circuitos, juegos predeportivos), lo que exige coordinar roles, comunicarse y apoyar a los compañeros para lograr un objetivo común."
  },
  {
    keywords: ["etica", "inteligencia kinestesica"],
    pregunta: "¿Qué es la ética en la actividad física?",
    respuesta: "Se refiere a jugar limpio, respetar reglas y compañeros, y reconocer el propio cuerpo y sus límites (inteligencia kinestésica) como parte del desarrollo personal en la práctica deportiva."
  },
  {
    keywords: ["autoevaluacion", "quiz", "cuestionario", "preguntas"],
    pregunta: "¿Cómo funciona la autoevaluación?",
    respuesta: "Tiene 8 preguntas de distinto tipo. Al responder recibes retroalimentación inmediata, un puntaje final y puedes reintentarla las veces que quieras. El logro sugerido es 70%."
  },
  {
    keywords: ["simulador", "planificador", "plan de actividad fisica"],
    pregunta: "¿Qué hace el planificador de actividad física?",
    respuesta: "A partir de tu disponibilidad semanal, intensidad percibida, intereses y objetivo, te entrega una recomendación educativa general. No reemplaza una evaluación médica ni un plan profesional."
  },
  {
    keywords: ["reto colaborativo", "actividad grupal", "equipo de 3"],
    pregunta: "¿En qué consiste el reto colaborativo?",
    respuesta: "Un equipo de 3 estudiantes diseña una experiencia de actividad física saludable para la vida universitaria: objetivo, calentamiento, actividad principal, dinámica de socialización, estrategia de autocuidado y cierre reflexivo."
  },
  {
    keywords: ["quien eres", "que eres", "efi-bot", "eres una ia"],
    pregunta: "¿Quién eres tú?",
    respuesta: "Soy EFI-Bot, un asistente educativo con respuestas preconfiguradas sobre los contenidos de este OVA. No soy una inteligencia artificial generativa, no reemplazo al docente ni a profesionales de la salud."
  },
  {
    keywords: ["objetivos", "resultados de aprendizaje", "rda"],
    pregunta: "¿Cuáles son los resultados de aprendizaje de este OVA?",
    respuesta: "Reconocer la actividad física sistemática y su aporte a la vida saludable, diferenciar capacidades y habilidades motrices, diseñar una propuesta de actividad física personal, y valorar el trabajo en equipo y la ética en los juegos de socialización."
  }
];

const EFI_FALLBACK = "No tengo una respuesta preconfigurada para esa pregunta. Prueba con alguna de las preguntas sugeridas, o revisa la sección 'Ruta de aprendizaje' del sitio. Recuerda que para dudas académicas específicas debes consultar a tu docente.";

const EFI_SUGGERIDAS = [
  "¿Qué es la actividad física sistemática?",
  "¿Qué son las capacidades coordinativas?",
  "¿Cómo funciona la autoevaluación?",
  "¿Quién eres tú?"
];

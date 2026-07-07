# OVA EFI-200 · "Muévete con propósito"

Objeto Virtual de Aprendizaje (OVA) sobre actividad física saludable y habilidades motrices para la vida universitaria, elaborado a partir del syllabus de **EFI-200 Educación Física I** (Universidad Técnica Federico Santa María, 1er semestre 2026).

Es un recurso **delimitado, autónomo y reutilizable**: no reemplaza el curso completo, se centra en la Unidad 1 del programa y puede incorporarse a Moodle o enlazarse desde otro ecosistema digital.

---

## 1. Decisiones pedagógicas

- **Alcance acotado:** se trabajó solo la Unidad 1 (Actividad física saludable), evitando convertir el OVA en un repositorio de todo el programa.
- **Resultados de aprendizaje adaptados:** se reformularon los RdA del syllabus con verbos observables de la taxonomía de Bloom (reconocer, diferenciar, diseñar, valorar), cubriendo comprensión, aplicación, reflexión y colaboración.
- **Identidad visual "pizarra táctica":** se optó por una estética deportiva y técnica (líneas de cancha, numeración tipo dorsal) en los colores institucionales de la UTFSM (azul oscuro, amarillo, rojo), evitando estilos genéricos de plantilla.
- **Contenidos anclados al syllabus real:** los ejemplos de la infografía, el caso interactivo y las preguntas de autoevaluación provienen de actividades efectivamente descritas en el syllabus (pintas, cuerdas, postas, circuitos de coordinación, taller CTS Vida Saludable), no de contenido inventado.
- **Transmedia complementaria, no redundante:** video (mostrar), infografía (definir), podcast (contextualizar en la vida universitaria), simulador (aplicar a la propia rutina) y mapa conceptual (integrar) cubren funciones distintas.
- **Recurso audiovisual real incorporado:** el equipo aportó un video propio ("Nuevo currículo escolar: Educación Física y Salud", ~7:36 min, formato explicativo tipo NotebookLM) que se incrustó localmente en `assets/video/` mediante `<video>` HTML5 (no un iframe externo, ya que el archivo es propio y no está alojado en una plataforma de terceros). Su contenido —la inclusión del concepto de salud en el currículo escolar y las reglas adaptadas de los juegos— se usa como contexto complementario a la Unidad 1. Queda pendiente incorporar la transcripción literal completa; por ahora se incluye un resumen del contenido visible en pantalla.
- **Gamificación con sentido pedagógico:** puntos, insignias y barra de progreso están ligados a acciones de aprendizaje real (explorar la infografía, completar el caso, usar el planificador), no a competencia superficial.
- **Accesibilidad de base:** HTML semántico, navegación por teclado, texto alternativo, contraste, transcripciones, `prefers-reduced-motion`, y guardado de progreso en `localStorage`.
- **Tipografías de sistema:** no se cargan fuentes externas, para evitar dependencias y asegurar funcionamiento offline/en hosting estático simple.
- **EFI-Bot no generativo:** el asistente responde solo desde una base de conocimientos preconfigurada (`data/knowledge-base.js`), sin conexión a APIs externas ni claves.

## 2. Árbol de archivos

```
OVA_EFI200/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── quiz.js
│   ├── simulator.js
│   └── assistant.js
├── data/
│   └── knowledge-base.js
├── assets/
│   ├── img/
│   │   └── escudo-usm.png
│   ├── audio/          (vacío: reservado para audio grabado real, opcional)
│   └── video/          (vacío: reservado para video propio, opcional)
├── README.md
└── referencias.md
```

## 3. Cómo revisarlo localmente

1. Descomprime `OVA_EFI200_Actividad_Fisica_Saludable.zip`.
2. Abre el archivo `index.html` con doble clic, o arrástralo a cualquier navegador moderno (Chrome, Firefox, Edge, Safari).
3. No requiere instalación, servidor, Node.js ni base de datos.

## 4. Cómo subirlo a un hosting estático

1. Sube la carpeta completa `OVA_EFI200/` (manteniendo la estructura de subcarpetas) a cualquier hosting estático: GitHub Pages, Netlify, Vercel, un servidor propio, etc.
2. Asegúrate de que `index.html` quede en la raíz del sitio o del subdirectorio publicado.
3. No es necesario configurar build, compilación ni variables de entorno.

## 5. Cómo enlazarlo o incrustarlo en Moodle

- **Como enlace externo:** en Moodle, agrega un recurso "URL" apuntando a la dirección donde publicaste `index.html`.
- **Como página incrustada:** usa un recurso "Paquete IMS CP" o incrusta un `<iframe>` en una página de Moodle apuntando a la URL pública del sitio, por ejemplo:
  ```html
  <iframe src="https://tu-hosting.com/OVA_EFI200/index.html" width="100%" height="900" style="border:0;"></iframe>
  ```
- **Como archivo SCORM/paquete:** si tu Moodle lo requiere, comprime la carpeta `OVA_EFI200/` completa y súbela como recurso tipo "Archivo", indicando `index.html` como página principal.

## 6. Lista de comprobación

| Elemento requerido | Estado |
|---|---|
| Carátula con datos institucionales y equipo | ✅ Sección 1 (Inicio) |
| Objetivos / resultados de aprendizaje (3-4, verbos Bloom) | ✅ Sección 2 |
| Estructura didáctica con menú navegable de 10 secciones | ✅ Encabezado + `index.html` |
| Mínimo 3 recursos transmedia funcionales | ✅ 5 recursos (video, infografía, podcast, simulador, mapa conceptual) |
| Actividades interactivas y gamificadas (mínimo 2) | ✅ Caso interactivo + Reto colaborativo |
| Ideas principales (5-8) | ✅ Sección 6 |
| Conclusiones | ✅ Sección 7 |
| Autoevaluación gamificada (8 preguntas, corrección automática, 70%) | ✅ Sección 8 |
| Accesibilidad (semántico, teclado, contraste, transcripciones, localStorage) | ✅ Transversal |
| Anexo de prompt e IA | ✅ Sección 10 + este README |

## 7. Notas técnicas

- El asistente **EFI-Bot** y el resumen de audio usan la **Web Speech API** (`SpeechSynthesisUtterance`), disponible de forma nativa en la mayoría de navegadores modernos; si el navegador no la soporta, se muestra automáticamente la alternativa textual.
- El progreso de lectura, los puntos y las insignias se guardan en `localStorage` del navegador del estudiante (dato local, no se envía a ningún servidor).
- No se incluyen enlaces de video ni citas inventadas: los espacios sin un recurso verificado están marcados como `[VIDEO POR INCORPORAR]`, `[TRANSCRIPCIÓN POR INCORPORAR]` o `[FUENTE POR INCORPORAR]`.
- Para conectar en el futuro un modelo de lenguaje externo real en lugar de EFI-Bot (opcional, no implementado en esta versión): crear una función en `js/assistant.js` que llame a la API externa mediante `fetch`, gestionando la clave de API **desde el backend/servidor**, nunca en el código del front-end.

---

## Anexo: prompt completo utilizado

```
Actúa simultáneamente como:
Diseñador instruccional especializado en educación superior.
Experto en objetos virtuales de aprendizaje, narrativa transmedia y gamificación.
Desarrollador web front-end experto en HTML5, CSS3 y JavaScript.
Especialista en accesibilidad, experiencia de usuario y diseño responsivo.
Voy a adjuntar el syllabus de la asignatura EFI-200 Educación Física I, correspondiente al primer semestre de 2026. Analízalo cuidadosamente y utilízalo como fuente principal para diseñar y desarrollar un Objeto Virtual de Aprendizaje —OVA— con enfoque transmedia.
No debes crear un curso completo ni abarcar todo el programa. El OVA debe ser un recurso delimitado, autónomo y reutilizable, que pueda incorporarse posteriormente en Moodle o enlazarse desde otro ecosistema digital educativo.

TEMA DEL OVA
"Muévete con propósito: actividad física saludable y habilidades motrices para la vida universitaria".
El contenido debe centrarse principalmente en la Unidad 1 del syllabus:
Actividad física saludable. Capacidades condicionantes y coordinativas. Habilidades motrices básicas y complejas. Juegos de socialización. Competencia transversal sello Vida Saludable. Trabajo en equipo, recreación, ética e inteligencia kinestésica.

PÚBLICO OBJETIVO
Estudiantes universitarios de primer año que cursan EFI-200 Educación Física I en la Universidad Técnica Federico Santa María.

RESULTADOS DE APRENDIZAJE DEL PROGRAMA
Reconocer la actividad física sistemática, identificando su contribución hacia un estilo de vida saludable.
Ejecutar prácticas motrices conscientes, desenvolviéndose corporal y socialmente en las distintas actividades y juegos pre-deportivos.
Adaptar la redacción para el entorno virtual conservando su sentido, con verbos observables y medibles de la taxonomía de Bloom.

PROPÓSITO GENERAL
Crear una experiencia digital educativa que permita comprender la relación entre actividad física, habilidades motrices y vida saludable, aplicar estos contenidos en situaciones de la vida universitaria y participar en actividades individuales y colaborativas.

ESTRUCTURA OBLIGATORIA (menú navegable, visible y responsivo):
1. Inicio y carátula. 2. Objetivos o resultados de aprendizaje. 3. Ruta de aprendizaje: temas y subtemas. 4. Experiencia transmedia. 5. Actividades interactivas y gamificadas. 6. Ideas principales. 7. Conclusiones. 8. Autoevaluación. 9. Referencias. 10. Anexo sobre uso de inteligencia artificial.

CARÁTULA: título, frase motivadora, asignatura EFI-200, programa/unidad académica: Educación Física, institución: Universidad Técnica Federico Santa María, equipo (Claudio Barrera – Coordinador, Víctor Cámara – Investigador), fecha de elaboración: 7 de julio de 2026, identidad visual universitaria/deportiva/moderna, espacio para logotipos institucionales reales.

OBJETIVOS: 3-4 resultados de aprendizaje medibles, con verbos de acción, coherentes con nivel universitario, que incluyan comprensión, aplicación práctica, reflexión y colaboración.

TEMAS Y SUBTEMAS (numeración jerárquica):
1. Actividad física y vida saludable (1.1 concepto de actividad física sistemática; 1.2 beneficios físicos, sociales y emocionales; 1.3 actividad física y vida universitaria).
2. Capacidades y habilidades motrices (2.1 capacidades condicionantes; 2.2 capacidades coordinativas; 2.3 habilidades motrices básicas; 2.4 habilidades motrices complejas).
3. Dimensión social y formativa (3.1 juegos de socialización; 3.2 trabajo en equipo; 3.3 recreación y convivencia; 3.4 ética e inteligencia kinestésica).
4. Aplicación práctica (4.1 diseño de una actividad física saludable; 4.2 seguridad, autocuidado y adaptación; 4.3 reflexión sobre hábitos personales).
Explicar con lenguaje académico, claro y cercano, usando tarjetas, ejemplos, preguntas orientadoras, esquemas y elementos desplegables, evitando un repositorio de textos extensos.

INTEGRACIÓN TRANSMEDIA (mínimo 4 recursos funcionales y complementarios):
A. Recurso audiovisual: sección para video, guion/storyboard de 2-4 minutos, iframe, transcripción escrita; sin inventar enlaces de YouTube, usando marcador si no hay video verificado.
B. Infografía interactiva en HTML/CSS/JS que explique capacidades condicionantes, coordinativas y habilidades motrices, con definición y ejemplo al pulsar cada componente.
C. Audio o micro-podcast (2-3 minutos) sobre actividad física y vida universitaria, con Web Speech API, botones de reproducir/pausar/detener y transcripción visible.
D. Simulador: planificador de actividad física saludable según disponibilidad semanal, intensidad percibida, intereses y objetivo personal; recomendación educativa general (no médica), con advertencias de autocuidado, progresión y consulta profesional.
E. Mapa conceptual interactivo que relacione actividad física, vida saludable, habilidades motrices, convivencia, ética y trabajo en equipo, permitiendo seleccionar conceptos y desplegar relaciones.
Cada recurso debe incluir justificación pedagógica: por qué se eligió, qué aprendizaje favorece, cómo complementa a los otros medios y con qué resultado de aprendizaje se relaciona.

ACTIVIDADES INTERACTIVAS Y GAMIFICADAS (mínimo 2):
Actividad 1 — Caso interactivo individual: estudiante con poco tiempo y hábitos sedentarios que debe decidir sobre organización del tiempo, tipo de actividad, intensidad, descanso, participación con compañeros y seguridad/autocuidado, con retroalimentación inmediata y consecuencias explicadas.
Actividad 2 — Reto colaborativo: equipos de 3 (coordinador/a, analista de necesidades, diseñador/a de la actividad) diseñan una experiencia de actividad física saludable con objetivo, calentamiento, actividad principal, dinámica de socialización, estrategia de autocuidado y cierre reflexivo; incluir instrucciones, tiempo estimado, criterios de evaluación, sistema de puntos, rúbrica breve, espacio editable y botón para copiar o descargar la propuesta.
Gamificación con sentido pedagógico: barra de progreso, puntos, insignias, retos, retroalimentación inmediata, mensajes de avance y posibilidad de reintentar, evitando competencia superficial.

IDEAS PRINCIPALES: 5-8 afirmaciones significativas (no repetición del índice) que sinteticen los aprendizajes centrales.

CONCLUSIONES: integrar aprendizajes, relacionar con la vida universitaria, destacar el trabajo colaborativo, proponer formas de aplicar lo aprendido, identificar desafíos de autocuidado, inclusión y participación, sin limitarse a repetir definiciones.

AUTOEVALUACIÓN: 8 preguntas gamificadas (4 opción múltiple, 2 verdadero/falso con explicación, 1 relación/clasificación, 1 reflexión/transferencia); corrección automática de preguntas cerradas, retroalimentación específica, resultado final con puntaje y porcentaje, criterio de logro sugerido 70%, posibilidad de reintentar, explicación de respuestas correctas e incorrectas orientada a aprender; la pregunta abierta debe ofrecer criterios de revisión aunque no se autocalifique.

AGENTE VIRTUAL "EFI-BOT": asistente flotante que responde preguntas frecuentes basándose únicamente en una base de conocimientos construida con el syllabus y los contenidos del sitio; campo de texto, preguntas sugeridas, respuestas escritas y en voz alta mediante Web Speech API (activar/pausar/detener), alternativa textual si el navegador no admite audio, y transparencia de que es un asistente educativo preconfigurado que no reemplaza al docente ni a profesionales de salud. No simular una IA generativa si no existe conexión real a una API; no incluir claves API en el código; se pueden dejar instrucciones opcionales en el README para conectar un modelo externo de forma segura.

DISEÑO Y ACCESIBILIDAD: responsivo (computador/tableta/teléfono), mobile-first, navegación clara con menú fijo o desplegable, indicador de avance, HTML semántico, navegable con teclado, textos alternativos, contraste legible, tipografías de sistema, transcripciones para audio y video, evitar animaciones excesivas, criterios básicos WCAG 2.1 AA, y progreso/resultados del cuestionario guardados con localStorage.

REFERENCIAS Y RIGOR ACADÉMICO: usar el syllabus como fuente principal, conservar su terminología, no inventar autores, citas, estadísticas ni enlaces; marcar como "[FUENTE POR INCORPORAR]" lo que no esté en los documentos adjuntos; referencias finales en formato APA 7; diferenciar fuentes académicas de recursos multimedia.

ANEXO SOBRE INTELIGENCIA ARTIFICIAL: incluir en el README o en una sección imprimible el prompt completo utilizado y una reflexión de máximo 150 palabras sobre cómo se usó la IA, qué aportó, qué contenidos fueron revisados, qué cambios realizó el equipo y por qué sigue siendo necesaria la revisión humana.

ARCHIVOS A GENERAR: paquete web estático (index.html, css/styles.css, js/app.js, js/quiz.js, js/simulator.js, js/assistant.js, data/knowledge-base.js, assets/img, assets/audio, assets/video, README.md, referencias.md) que funcione abriendo index.html en cualquier hosting estático, sin instalación, compilación, Node.js ni base de datos, sin rutas absolutas locales, sin botones inertes ni enlaces rotos, con comentarios claros y sin errores de consola, preparado para incrustarse en Moodle.

ENTREGA FINAL: explicación de decisiones pedagógicas, árbol de archivos, archivos completos y funcionales, un archivo comprimido "OVA_EFI200_Actividad_Fisica_Saludable.zip", instrucciones para revisar localmente / subir a hosting / enlazar en Moodle, y una lista de comprobación del cumplimiento de carátula, objetivos, estructura didáctica, recursos transmedia, actividades interactivas, ideas principales, conclusiones, autoevaluación, accesibilidad y anexo de prompts. Verificar coherencia entre resultados de aprendizaje, contenidos, recursos transmedia, actividades y autoevaluación. No hacer preguntas adicionales; usar marcadores editables entre corchetes cuando falte un dato administrativo.
```

### Reflexión sobre el uso de IA (máx. 150 palabras)

Ver sección 10 ("Anexo IA") dentro de `index.html`, donde se incluye la misma reflexión del equipo para que sea visible directamente en el sitio.

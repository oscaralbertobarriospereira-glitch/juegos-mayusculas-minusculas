# 🎮 Juegos de Mayúsculas y Minúsculas

Una plataforma interactiva de tres juegos educativos diseñados para que estudiantes de secundaria aprendan y practiquen las reglas del uso correcto de mayúsculas y minúsculas en español.

## 📋 Descripción

Esta aplicación presenta tres niveles de dificultad progresiva donde los estudiantes pueden competir entre ellos por alcanzar la mayor puntuación. Los juegos pueden jugarse múltiples veces con las mismas actividades.

### Características principales:
- ✅ **Sistema de puntuación** - Ganan más puntos en niveles más difíciles
- ⏱️ **Límite de tiempo** - Cada nivel tiene un tiempo específico para completarlo
- 📊 **Progreso visual** - Barra de progreso y contador de preguntas
- 🎯 **Feedback inmediato** - Respuesta correcta/incorrecta al instante
- 🔄 **Jugar múltiples veces** - Las preguntas se barajan aleatoriamente cada vez
- 📱 **Diseño responsivo** - Funciona en computadoras, tablets y móviles

## 🎮 Los Tres Niveles

### Nivel 1: Corrección Básica ⭐ (30 segundos)
**Dificultad:** Principiante

En este nivel, los estudiantes deben identificar la corrección correcta de oraciones simples que comienzan mal. Se enfoca en la regla fundamental: después de un punto seguido, la primera letra de la oración debe ser mayúscula.

**Puntos por respuesta correcta:** 10 puntos
**Total máximo:** 100 puntos

---

### Nivel 2: Clasificación Avanzada ⭐⭐ (40 segundos)
**Dificultad:** Intermedio

Los estudiantes deben identificar y clasificar nombres propios en oraciones. Aprenden a distinguir entre:
- Nombres propios (personas, lugares, instituciones)
- Nombres comunes (no llevan mayúscula)
- Títulos de obras y organismos

**Puntos por respuesta correcta:** 15 puntos
**Total máximo:** 150 puntos

---

### Nivel 3: Experto en Mayúsculas ⭐⭐⭐ (50 segundos)
**Dificultad:** Experto

El nivel más desafiante donde los estudiantes deben aplicar múltiples reglas complejas de mayúsculas:
- Puntos cardinales en minúscula
- Títulos de libros/películas (solo primera palabra)
- Siglas en mayúscula
- Meses y días en minúscula
- Mayúscula después de punto y seguido
- Gentilicios en minúscula
- Palabras después de dos puntos
- Disciplinas académicas en minúscula
- Instituciones con mayúsculas iniciales

**Puntos por respuesta correcta:** 20 puntos
**Total máximo:** 200 puntos

---

## 🚀 Cómo Usar

1. **Abre la página** - Carga el archivo `index.html` en tu navegador
2. **Selecciona un nivel** - Haz clic en uno de los tres botones de juego
3. **Lee la pregunta** - Observa la oración y el contexto
4. **Elige la respuesta** - Haz clic en una de las tres opciones
5. **Recibe feedback** - La respuesta correcta se resaltará en verde, las incorrectas en rojo
6. **Continúa jugando** - El juego avanza automáticamente a la siguiente pregunta
7. **Finaliza** - Al terminar todas las preguntas o se agote el tiempo, verás tus resultados

## 📊 Sistema de Puntuación

- **Nivel 1:** 10 puntos por respuesta correcta (máximo 100)
- **Nivel 2:** 15 puntos por respuesta correcta (máximo 150)
- **Nivel 3:** 20 puntos por respuesta correcta (máximo 200)

Los estudiantes pueden jugar múltiples veces y competir por la puntuación más alta.

## ⏱️ Tiempos Límite

- **Nivel 1:** 30 segundos para 10 preguntas
- **Nivel 2:** 40 segundos para 10 preguntas
- **Nivel 3:** 50 segundos para 10 preguntas

## 🎨 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño moderno con gradientes y animaciones
- **JavaScript Vanilla** - Lógica de juego sin dependencias externas

## 📁 Estructura de Archivos

```
juegos-mayusculas-minusculas/
│
├── index.html          # Archivo principal con la estructura HTML
├── styles.css          # Estilos visuales y animaciones
├── script.js           # Lógica de los juegos
└── README.md          # Este archivo
```

## 🎓 Reglas de Mayúsculas Cubiertas

Los juegos cubren estas reglas fundamentales:

1. **Inicio de oración** - Siempre mayúscula después de punto seguido
2. **Nombres propios** - Personas, lugares, instituciones
3. **Puntos cardinales** - Se escriben en minúscula
4. **Títulos de obras** - Solo la primera palabra con mayúscula
5. **Siglas** - Se escriben en mayúsculas
6. **Meses y días** - Se escriben en minúscula
7. **Gentilicios** - Se escriben en minúscula
8. **Disciplinas académicas** - Se escriben en minúscula
9. **Instituciones y organismos** - Llevan mayúsculas iniciales
10. **Palabras después de dos puntos** - Generalmente en minúscula

## 💡 Consejos para el Docente

- **Competencia sana** - Impulsa a los estudiantes a mejorar sus puntuaciones
- **Análisis en clase** - Revisa las reglas más difíciles después de que jueguen
- **Variedad** - Los estudiantes pueden jugar durante varias sesiones
- **Refuerzo** - Usa los resultados para identificar áreas que necesitan más práctica

## 📝 Notas

- Cada vez que se inicia un juego, las preguntas se barajan aleatoriamente
- Los resultados se muestran al final con puntuación total, tiempo utilizado y respuestas correctas
- Los estudiantes pueden reintentar el mismo nivel o cambiar de nivel desde la pantalla de resultados
- La plataforma no requiere conexión a internet para funcionar

## 🔧 Personalización

Puedes modificar fácilmente:
- Las preguntas (en los arreglos `juego1Preguntas`, `juego2Preguntas`, `juego3Preguntas`)
- Los tiempos límite (valores `tiempoRestante` e `tiempoInicial`)
- Los puntos por nivel (en la función `seleccionarOpcion`)
- Los colores y estilos (en el archivo `styles.css`)

---

**Creado para estudiantes de secundaria | Diseño responsive y accesible**
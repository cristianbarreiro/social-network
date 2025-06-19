# 🤖 Chatbot con Gemini y Gradio (Modo Claro)

Este proyecto es una interfaz web simple construida con [Gradio](https://gradio.app/) que permite interactuar con el modelo **Gemini 1.5 Flash** de Google. Utiliza `google-generativeai`, `gradio` y `dotenv` para gestionar claves de forma segura y crear una experiencia moderna en modo claro.

---

## 🧠 ¿Qué hace este proyecto?

- Permite ingresar preguntas a través de una interfaz web intuitiva.
- Envía la consulta al modelo Gemini (Google Generative AI).
- Muestra la respuesta generada en pantalla.
- Totalmente diseñado en **modo claro**, ideal para integrarse fácilmente como `iframe` en otros proyectos web.

---

## 📂 Proyecto complementario: Red Social "GenericLogo"

Junto a este chatbot, se está desarrollando una **red social experimental llamada "GenericLogo"** usando **HTML, CSS y JavaScript puro**.  
Este frontend tiene como objetivo:

- Simular una red social básica con diseño adaptable.
- Servir como entorno de pruebas para futuras integraciones con APIs.
- Evaluar cómo se comporta una interfaz real conectada al chatbot Gemini.

Próximamente se planea **conectar esta red social a una API** utilizando JavaScript para ofrecer funcionalidades dinámicas como:

- Registro y login de usuarios
- Publicación de contenido
- Respuestas inteligentes generadas por IA (como el chatbot actual)

Este enfoque permite un desarrollo progresivo y didáctico del ecosistema web + IA.

---

## 📦 Requisitos

- Python 3.10 o superior
- Clave de API de Google Gemini (obtenida desde [Google AI Studio](https://makersuite.google.com/app/apikey))

---

## ⚙️ Instalación

Crea y activa un entorno virtual

bash
Copiar
Editar
python -m venv venv
.\venv\Scripts\activate      # En Windows
# source venv/bin/activate   # En Linux/Mac
Instala las dependencias

bash
Copiar
Editar
pip install -r requirements.txt
Crea un archivo .env y agrega tu clave API

ini
Copiar
Editar
GEMINI_API_KEY=tu_clave_api_aqui
🚀 Ejecutar la app
Una vez todo esté configurado, puedes lanzar la aplicación con:

bash
Copiar
Editar
python app.py
Esto abrirá una interfaz web donde podrás escribir preguntas y ver las respuestas de Gemini en tiempo real.


1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/chatbot-gemini-gradio.git
   cd chatbot-gemini-gradio


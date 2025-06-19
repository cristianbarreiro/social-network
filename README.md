# 🤖 Chatbot con Gemini y Gradio (Modo Claro)

Este proyecto es una interfaz web simple construida con [Gradio](https://gradio.app/) que permite interactuar con el modelo **Gemini 1.5 Flash** de Google. Utiliza `google-generativeai`, `gradio`, y `dotenv` para gestionar claves y crear una experiencia moderna en modo claro.

---

## 🧠 ¿Qué hace este proyecto?

- Permite ingresar preguntas en una interfaz web.
- Envía la consulta a Gemini (Google Generative AI).
- Muestra la respuesta generada por el modelo.
- Diseñado con una interfaz clara y adaptable para `iframe`.

---

## 📦 Requisitos

- Python 3.10 o superior
- Clave de API de Google Gemini (obtenida desde [Google AI Studio](https://makersuite.google.com/app/apikey))

---

## ⚙️ Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/chatbot-gemini-gradio.git
   cd chatbot-gemini-gradio
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
Crea un archivo .env y agrega tu clave

env
Copiar
Editar
GEMINI_API_KEY=tu_clave_api_aqui
🚀 Ejecutar la app
Una vez configurado todo:

bash
Copiar
Editar
python app.py
La app se abrirá en http://localhost:7860

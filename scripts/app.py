import os
from dotenv import load_dotenv
import gradio as gr
import google.generativeai as genai

# 1. Cargar variables de entorno
load_dotenv()
API_KEY = os.getenv("GEMINI_API_KEY")
if not API_KEY:
    raise ValueError("❌ No se encontró GEMINI_API_KEY en .env")

# 2. Configurar API
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-1.5-flash')

# 3. Función para generar respuestas
def generar_respuesta(pregunta):
    try:
        response = model.generate_content(pregunta)
        return response.text
    except Exception as e:
        return f"⚠️ Error: {str(e)}"

# 4. Estilo CSS: modo claro total
css = """
body, .gradio-container {
    background-color: #f4f6f9;
    color: #111;
    font-family: 'Segoe UI', sans-serif;
    padding: 8px 12px;
    margin: 0;
    width: 400px !important;
    min-width: 400px !important;
    max-width: 400px !important;
    box-sizing: border-box;
}

footer {
    display: none !important;
}

/* Inputs (pregunta y respuesta) */
textarea, input[type="text"] {
    background: #464655;
    color: #111 !important;
    border: 1px solid #ccc !important;
    border-radius: 8px !important;
    padding: 8px !important;
    font-size: 0.95rem !important;
    box-shadow: none !important;
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box;
}

/* Botón Enviar */
button {
    background-color: #4CAF50 !important;
    color: white !important;
    font-weight: bold !important;
    border: none !important;
    border-radius: 6px !important;
    padding: 8px 16px !important;
    font-size: 0.95rem !important;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box;
}

button:hover {
    background-color: #45a049 !important;
}

/* Markdown título */
.markdown {
    color: #111 !important;
}

/* Ancho completo para todos los componentes */
#component-0, #component-1, #component-2 {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box;
}

/* Textbox azul marino */
textarea, input[type="text"] {
    background-color: #0a2342 !important;
    color: #fff !important;
    border: 1px solid #0a2342 !important;
}

/* For the h2 inside the span with class 'md' */
.md h2 {
    color: #111 !important;
}
"""

# 5. Interfaz Gradio
with gr.Blocks(title="Chat con Gemini", css=css, theme="default") as app:
    gr.Markdown("## 🤖 ¿Cuál es tu pregunta?")
    
    with gr.Row():
        pregunta = gr.Textbox(
            placeholder="Escribe aquí...",
            label="Pregunta",
            lines=2
        )
    
    with gr.Row():
        boton = gr.Button("Enviar", variant="primary")
    
    with gr.Row():
        respuesta = gr.Textbox(
            label="Respuesta",
            interactive=False,
            lines=5
        )
    
    boton.click(
        fn=generar_respuesta,
        inputs=pregunta,
        outputs=respuesta
    )

# 6. Lanzar app
if __name__ == "__main__":
    app.launch(
        server_name="0.0.0.0",
        server_port=7860,
        share=True,
        show_error=True
    )

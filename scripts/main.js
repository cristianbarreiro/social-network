document.addEventListener("DOMContentLoaded", function () {
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (!navbarPlaceholder) return;

  const navbarHTML = `
    <header>
      <div class="wrapper">
        <h1 class="logo">Generic<span>Logo</span></h1>
        <nav class="main-nav">
          <ul>
            <li><a href="../index.html"><i class="fa fa-home nav-icon"></i><span>HOME</span></a></li>
            <li><a href="../about.html"><i class="fa fa-info nav-icon"></i><span>About Us</span></a></li>
            <li><a href="../prices.html"><i class="fa fa-usd nav-icon"></i><span>Premium Prices</span></a></li>
            <li><a href="#" id="support-link"><i class="fa fa-headset nav-icon"></i><span>Support</span></a></li>
            <li><a href="../config.html"><i class="fa fa-gear nav-icon"></i><span class="text-label" id="configuration"></span></a></li>
          </ul>
        </nav>
        <div class="menu-toggle">
          <div class="hamburger"></div>
        </div>
      </div>
    </header>
    <!-- Modal HTML -->
    <div id="support-modal" class="modal">
      <div class="modal-content" tabindex="0">
        <span class="close-modal"></span>
        <h2 id="faq-title">Support</h2>
        <ul class="modal-faq" id="faq-list">
          <li>How do I reset my password?</li>
          <li>How can I change my profile picture?</li>
          <li>How do I delete my account?</li>
          <li>How can I report inappropriate content?</li>
          <li>How do I block or unblock a user?</li>
          <li>How do I change my privacy settings?</li>
          <li>Why can't I log in to my account?</li>
          <li>How do I contact customer support?</li>
          <li>How do I upgrade to a premium account?</li>
          <li>How do I recover a hacked account?</li>
        </ul>
        
        <div class="container" id="asistente-container">
            <h1>Asistente Virtual Gemini</h1>
            <iframe src="https://1f78a2bb7397b921a7.gradio.live" title="Chatbot Gemini" allow="clipboard-read; clipboard-write;"></iframe>
        </div>

        <h5 >¿No has podido resolver tu problema? Consulta aquí abajo. <a href="#" id="mostrar-asistente">Click aquí</a></h5>
        <hr>
      </div>
    </div>
  `;

  navbarPlaceholder.innerHTML = navbarHTML;

  // Carga del script de Tawk.to según el snippet oficial
  (function () {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/686719d6dd67f9190a43345c/1iv9bprle";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();

  const supportLink = document.getElementById("support-link");
  const modal = document.getElementById("support-modal");
  const closeModal = modal.querySelector(".close-modal");

  supportLink.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "block";

    modal.querySelector(".modal-content").focus();
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  const style = document.createElement("style");
  style.textContent = `
    .main-nav a:hover {
      border-color: var(--border-color);
    }
    .main-nav a:hover .nav-icon {
      color: var(--border-color);
    }
    .modal {
      position: fixed;
      z-index: 1000;
      left: 0; top: 0; width: 100vw; height: 100vh;
      /* No background, so page remains usable */
      pointer-events: none;
      display:none;
    }
    .modal[style*="display: block"] {
      pointer-events: none;
    }
    .modal-content {
      background: #fff;
      padding: 2rem;
      border-radius: 8px;
      min-width: 400px;
      min-height: 400px;
      max-width: 90vw;
      -moz-box-shadow: 0 4px 24px 0 rgba(44, 62, 80, 0.1);
      -webkit-box-shadow: 0 4px 24px 0 rgba(44, 62, 80, 0.1);
      box-shadow: 0 4px 24px 0 rgba(44, 62, 80, 0.1);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1001;
      pointer-events: auto;
      max-height: 80vh;
      overflow: hidden;
      cursor: pointer;
      scrollbar-width: none; /* Firefox */
    }
    .modal-content::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  `;
  document.head.appendChild(style);

  // Make modal draggable and keep it inside the viewport
  const modalContent = modal.querySelector(".modal-content");
  let isDragging = false,
    startX,
    startY,
    initialLeft,
    initialTop,
    modalWidth,
    modalHeight;

  modalContent.addEventListener("mousedown", function (e) {
    if (e.target.classList.contains("close-modal")) return;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    const rect = modalContent.getBoundingClientRect();
    initialLeft = rect.left;
    initialTop = rect.top;
    modalWidth = rect.width;
    modalHeight = rect.height;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", function (e) {
    if (!isDragging) return;
    let dx = e.clientX - startX;
    let dy = e.clientY - startY;
    let newLeft = initialLeft + dx;
    let newTop = initialTop + dy;

    // Limitar dentro del viewport
    const minLeft = 0;
    const minTop = 0;
    const maxLeft = window.innerWidth - modalWidth;
    const maxTop = window.innerHeight - modalHeight;

    newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
    newTop = Math.max(minTop, Math.min(newTop, maxTop));

    modalContent.style.left = newLeft + "px";
    modalContent.style.top = newTop + "px";
    modalContent.style.transform = "none";
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
    document.body.style.userSelect = "";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // ... tu código existente

  // Agregar comportamiento para text-label
  const textLabels = document.querySelectorAll(".text-label");

  textLabels.forEach((label) => {
    label.textContent = "Configuration";
    label.style.opacity = "0";
    label.style.maxWidth = "0";
    label.style.overflow = "hidden";
    label.style.whiteSpace = "nowrap";
    label.style.transition = "opacity 0.3s ease, max-width 0.3s ease";
    label.style.display = "inline-block";

    const parentLink = label.closest("a");

    const showLabel = () => {
      label.style.opacity = "1";
      label.style.maxWidth = "200px";
    };

    const hideLabel = () => {
      if (!parentLink.classList.contains("active")) {
        label.style.opacity = "0";
        label.style.maxWidth = "0";
      }
    };

    // Mostrar en hover
    parentLink.addEventListener("mouseenter", showLabel);
    parentLink.addEventListener("mouseleave", hideLabel);

    // Mostrar si ya tiene la clase active
    if (parentLink.classList.contains("active")) {
      showLabel();
    }
  });
});
// ... (resto del código igual)

/* Manejo de mostrar asistente */

// Mover el manejo del asistente dentro del DOMContentLoaded para asegurar que el elemento existe
document.addEventListener("DOMContentLoaded", function () {
  const asistenteContainer = document.getElementById("asistente-container");
  const mostrarAsistente = document.getElementById("mostrar-asistente");
  const faqList = document.getElementById("faq-list");
  const faqTitle = document.getElementById("faq-title");
  if (asistenteContainer && mostrarAsistente) {
    asistenteContainer.style.display = "none";
    mostrarAsistente.addEventListener("click", function (event) {
      event.preventDefault(); // Previene que salte al tope
      const isVisible = asistenteContainer.style.display === "block";
      if (isVisible) {
        asistenteContainer.style.display = "none";
        faqList.style.display = "block";
        faqTitle.style.display = "block";
      } else {
        asistenteContainer.style.display = "block";
        faqList.style.display = "none";
        faqTitle.style.display = "none";
      }
    });
  }
});

const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const query = `
      mutation {
        addPerson(name: "${name}", mail: "${email}", password: "${password}") {
          id
          name
        }
      }
    `;

    try {
      const response = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();
      if (result.data && result.data.addPerson) {
        alert("Usuario registrado correctamente");
        window.location.href = "index.html";
      } else {
        alert("Error al registrar: " + result.errors[0].message);
      }
    } catch (error) {
      alert("Error de red");
      console.error(error);
    }
  });
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const query = `
      query {
        login(mail: "${email}", password: "${password}") {
          id
          name
          mail
        }
      }
    `;

    try {
      const response = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();
      const user = result.data.login;

      if (user) {
        alert("Bienvenido, " + user.name);
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "feed.html"; // 👈 redirección corregida
      } else {
        alert("Credenciales inválidas");
      }
    } catch (error) {
      alert("Error de red");
      console.error(error);
    }
  });
}

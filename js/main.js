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
    <div id="support-modal" class="modal" style="display:none;">
      <div class="modal-content" tabindex="0">
        <span class="close-modal" style="cursor:pointer;float:right;font-size:24px;">&times;</span>
        <h2>Support</h2>
        <p>How can we help you?</p>
      </div>
    </div>
  `;

  navbarPlaceholder.innerHTML = navbarHTML;

  // Modal functionality
  const supportLink = document.getElementById("support-link");
  const modal = document.getElementById("support-modal");
  const closeModal = modal.querySelector(".close-modal");

  supportLink.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "block";
    // Focus for accessibility
    modal.querySelector(".modal-content").focus();
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Only close modal if click is outside modal-content
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Estilo CSS dinámico
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
    }
    .modal[style*="display: block"] {
      pointer-events: none;
    }
    .modal-content {
      background: #fff;
      padding: 2rem;
      border-radius: 8px;
      min-width: 300px;
      max-width: 90vw;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1001;
      pointer-events: auto;
      max-height: 80vh;
      overflow: auto;
      cursor: pointer;
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

// ...el resto de tu código permanece igual

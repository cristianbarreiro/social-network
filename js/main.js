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
            <li><a href="../support.html"><i class="fa fa-headset nav-icon"></i><span>Support</span></a></li>
            <li><a href="../config.html"><i class="fa fa-gear nav-icon"></i><span class="text-label" id="configuration"></span></a></li>
          </ul>
        </nav>
        <div class="menu-toggle">
          <div class="hamburger"></div>
        </div>
      </div>
    </header>
  `;

  navbarPlaceholder.innerHTML = navbarHTML;

  // Estilo CSS dinámico
  const style = document.createElement("style");
  style.textContent = `
    .main-nav a:hover {
      border-color: var(--border-color);
    }
    .main-nav a:hover .nav-icon {
      color: var(--border-color);
    }
  `;
  document.head.appendChild(style);
});

const faqsTitles = document.querySelectorAll(".faq .head");

faqsTitles.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.parentNode.classList.toggle("active");

    const faqContent = faq.nextElementSibling;

    if (faq.parentNode.classList.contains("active")) {
      faqContent.style.height = faqContent.scrollHeight + 30 + "px";
    } else {
      faqContent.style.height = "0px";
    }
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

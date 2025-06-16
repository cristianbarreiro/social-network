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
            <li><a href="../config.html"><i class="fa fa-gear nav-icon"></i><span class="text-label">Configuration</span></a></li>
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
      border-color: var(--border-color); /* Definí --border-color en tu CSS */
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

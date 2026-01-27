document.addEventListener("DOMContentLoaded", () => {

  /* ===== HAMBURGER MENU OPEN ===== */
  const menuButton = document.querySelector("header > button");
  const nav = document.querySelector("header nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      nav.classList.add("toonMenu");
    });
  }

  /* ===== MENU SLUITEN MET KRUISJE ===== */
  const sluitButton = document.querySelector("header nav > button");

  if (sluitButton && nav) {
    sluitButton.addEventListener("click", () => {
      nav.classList.remove("toonMenu");
    });
  }

  /* ===== SLUIT MET ESC ===== */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav) {
      nav.classList.remove("toonMenu");
    }
  });

  /* ===== SLUIT MENU ALS JE OP EEN LINK KLIKT ===== */
  if (nav) {
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("toonMenu");
      });
    });
  }

  /* ===== LEES MEER ===== */
  const btn = document.querySelector(".read-more-btn");
  const text = document.querySelector(".about-text p");

  if (btn && text) {
    btn.setAttribute("type", "button");

    btn.addEventListener("click", () => {
      const expanded = text.classList.toggle("expanded");
      btn.textContent = expanded ? "Read less" : "Read more";
      btn.setAttribute("aria-expanded", expanded);
    });
  }

});

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // animatie maar 1x
      }
    });
  },
  {
    threshold: 0.15, // hoeveel % zichtbaar voordat het start
  }
);

reveals.forEach(el => observer.observe(el));


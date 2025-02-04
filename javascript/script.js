// Interactive Navbar Toggle
const menuButton = document.createElement("button");
menuButton.classList.add("menu-button");
menuButton.innerHTML = "<i class='fas fa-bars'></i>";
document.querySelector(".navbar").prepend(menuButton);

menuButton.addEventListener("click", () => {
  document.querySelector(".navbar ul").classList.toggle("show-menu");
});

// Dynamic Typing Effect in Hero Section
const heroText = document.querySelector(".hero-content h1");
const textArray = ["Innovate.", "Design.", "Develop.", "Transform."];
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    heroText.innerHTML += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 150);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (charIndex > 0) {
    heroText.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 100);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeText, 500);
  }
}
typeText();

// Smooth Scroll to Sections
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Reveal Sections on Scroll
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((element) => revealObserver.observe(element));

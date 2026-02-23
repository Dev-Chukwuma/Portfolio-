const toggle = document.createElement("div");
toggle.classList.add("btn");
toggle.style.marginLeft = "15px";
toggle.innerText = "🌙";
document.querySelector("nav").appendChild(toggle);

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const textArray = [
    "Software Developer",
    "AI Enthusiast",
    "Django Builder",
    "Future AI Engineer"
];

let typingElement = document.getElementById("typing");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentText = textArray[textIndex];
    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex--);
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

const bars = document.querySelectorAll(".progress-bar");

function showProgress() {
    bars.forEach(bar => {
        const position = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if (position < screenPosition) {
            bar.style.width = bar.getAttribute("data-width");
        }
    });
}

window.addEventListener("scroll", showProgress);

window.onload = function() {
    particlesJS("particles-js", {
        particles: {
            number: { value: 60 },
            size: { value: 3 },
            move: { speed: 1 },
            line_linked: { enable: true },
            color: { value: "#6366f1" }
        }
    });
};
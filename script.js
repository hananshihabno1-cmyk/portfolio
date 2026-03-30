// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close nav when clicking a link
navLinks.forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Scroll Animations (Intersection Observer)
const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

// Select all fade-in elements
const faders = document.querySelectorAll(".fade-in");
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Immediately fade in the hero section on load
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector('#hero');
    if (hero) {
        hero.classList.add('appear');
    }
});

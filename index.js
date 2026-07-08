document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navbar = document.querySelector(".navbar");

    if (!navToggle || !navbar) return;

    navToggle.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("show");
        navToggle.classList.toggle("active", isOpen);
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
            navbar.classList.remove("show");
            navToggle.classList.remove("active");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            navbar.classList.remove("show");
            navToggle.classList.remove("active");
            navToggle.setAttribute("aria-expanded", "false");
        }
    });
});

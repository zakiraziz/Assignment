// JavaScript for interactive features

document.addEventListener("DOMContentLoaded", function () {
    // Welcome message
    alert("Welcome to Zakir Aziz's Portfolio!");

    // Smooth scrolling for links
    document.querySelectorAll("a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
   // Hover effect for project items
    document.querySelectorAll(".project-item").forEach(item => {
        item.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        });
        item.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        });
    });
});

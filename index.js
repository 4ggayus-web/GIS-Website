// Fade-in animation on scroll
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

var message = alert("Hello! Welcome FieldFlow where we turn geospatial data into visual and redeable format. But Currently we are focusing more on Map Digitization Service")
message.style = "color: blue; background-color: green"; 
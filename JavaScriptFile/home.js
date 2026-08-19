document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

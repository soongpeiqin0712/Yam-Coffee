document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {

        // Remove active from all other gallery items
        document.querySelectorAll(".gallery-item").forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }
        });

        // Show this item's text
        item.classList.add("active");

        // Automatically hide it after 2 seconds
        setTimeout(() => {
            item.classList.remove("active");
        }, 2000);
    });
});

//================BACT TO TOP===============
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=> {
    if(window.scrollY>300){
        topBtn.style.display="block";
    } else {
        topBtn.style.display="none";
    }
});

topBtn.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});

// =================MOBILE NAVIGATION=================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });

    // Mobile dropdowns: first tap opens the dropdown; second tap follows the main link.
    document.querySelectorAll(".dropdown > a").forEach(link => {
        link.addEventListener("click", event => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                const dropdown = link.parentElement;

                if (!dropdown.classList.contains("open")) {
                    event.preventDefault();
                    document.querySelectorAll(".dropdown.open").forEach(item => {
                        if (item !== dropdown) {
                            item.classList.remove("open");
                        }
                    });
                    dropdown.classList.add("open");
                }
            }
        });
    });

    // Close the mobile menu after choosing a normal link.
    navLinks.querySelectorAll("li:not(.dropdown) > a, .dropdown-list a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                navLinks.classList.remove("active");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
                document.querySelectorAll(".dropdown.open").forEach(item => item.classList.remove("open"));
            }
        });
    });

    // Reset mobile state when returning to desktop width.
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
            document.querySelectorAll(".dropdown.open").forEach(item => item.classList.remove("open"));
        }
    });
}

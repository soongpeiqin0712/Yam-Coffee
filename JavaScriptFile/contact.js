const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Malaysian Phone Number
    const phonePattern = /^(\+60|60|0)1[0-9]-?[0-9]{7,8}$/;

    // Name
    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    // Email
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Phone
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid Malaysian phone number.");
        return;
    }

    // Message
    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    // Success Message
    alert("Message Sent Successfully!\n\nThank you for contacting Yam Coffee. We will get back to you soon!");

    // Reset Form
    contactForm.reset();
});

// Smooth Scroll for Contact Button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade-in Animation on Scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});
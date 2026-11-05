
const profile = document.getElementById("profileImage");

profile.addEventListener("mousemove", (event) => {

    const rect = profile.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = ((centerY - y) / centerY) * 8;

    profile.style.transform =
        `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

});

profile.addEventListener("mouseleave", () => {
    profile.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
});



const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveLink() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);
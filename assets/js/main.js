// ==========================================
// Portfolio Tabs
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".tab-btn");
    const panels = document.querySelectorAll(".tab-panel");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const target = tab.dataset.tab;

            tabs.forEach(btn => {
                btn.classList.remove("active");
            });

            panels.forEach(panel => {
                panel.classList.remove("active");
            });

            tab.classList.add("active");

            const activePanel = document.querySelector(
                `.tab-panel[data-panel="${target}"]`
            );

            if (activePanel) {
                activePanel.classList.add("active");
            }

        });

    });

});

/*====================================================
ACTIVE NAVIGATION
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const id = entry.target.getAttribute("id");

            navLinks.forEach(link => {

                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === "#" + id
                );

            });

        });

    }, {

        threshold: 0.55

    });

    sections.forEach(section => observer.observe(section));

});

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("certificateModal");
    const modalImg = document.getElementById("certificateImage");
    const closeBtn = document.querySelector(".close-modal");

    document.querySelectorAll(".view-certificate").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            modalImg.src = this.dataset.image;
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        modalImg.src = "";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            modalImg.src = "";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.style.display = "none";
            modalImg.src = "";
        }
    });

});

/*====================================================
TESTIMONIALS
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* Read More / Read Less */

    document.querySelectorAll(".read-more-btn").forEach(button => {

        button.addEventListener("click", () => {

            const text = button.previousElementSibling;

            text.classList.toggle("expanded");

            button.textContent = text.classList.contains("expanded")
                ? "Read less"
                : "Read more";

        });

    });

    /* Auto-scroll carousel */

    const slider = document.querySelector(".testimonials-grid");

    if (!slider) return;

    const scrollAmount = 380;

    let autoScroll = setInterval(nextSlide, 5000);

    function nextSlide() {

        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {

            slider.scrollTo({
                left: 0,
                behavior: "smooth"
            });

        } else {

            slider.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });

        }
    }

    /* Pause when hovering */

    slider.addEventListener("mouseenter", () => {
        clearInterval(autoScroll);
    });

    slider.addEventListener("mouseleave", () => {
        autoScroll = setInterval(nextSlide, 5000);
    });

});

const prev = document.querySelector(".testimonial-prev");
const next = document.querySelector(".testimonial-next");

if (prev && next) {

    prev.addEventListener("click", () => {
        slider.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    next.addEventListener("click", () => {
        slider.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });

}
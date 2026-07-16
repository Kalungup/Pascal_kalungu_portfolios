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

    /*=========================================
      SWIPER
    =========================================*/

    const testimonialSwiper = new Swiper(".testimonialSwiper", {

        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        speed: 800,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },

        navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev"
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        keyboard: {
            enabled: true
        },

        breakpoints: {

            768: {
                slidesPerView: 2
            },

            1100: {
                slidesPerView: 3
            }

        }

    });

/*=========================================
READ MORE
=========================================*/

document.addEventListener("click", function (e) {

    const button = e.target.closest(".read-more-btn");

    if (!button) return;

    const text = button.previousElementSibling;

    if (!text || !text.classList.contains("testimonial-text")) return;

    text.classList.toggle("expanded");

    button.textContent = text.classList.contains("expanded")
        ? "Read less"
        : "Read more";

    testimonialSwiper.update();

});

});
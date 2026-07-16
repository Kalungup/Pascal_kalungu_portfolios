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

    const slider = document.querySelector(".testimonials-grid");
    const prevBtn = document.querySelector(".testimonial-prev");
    const nextBtn = document.querySelector(".testimonial-next");
    const readButtons = document.querySelectorAll(".read-more-btn");

    if (!slider) return;

    const scrollAmount = 360;
    let autoScroll;

    /*=========================================
      READ MORE
    =========================================*/

    readButtons.forEach(button => {

        button.addEventListener("click", () => {

            const text = button.previousElementSibling;

            text.classList.toggle("expanded");

            if (text.classList.contains("expanded")) {
                button.textContent = "Read less";
            } else {
                button.textContent = "Read more";
            }

        });

    });

    /*=========================================
      ARROWS
    =========================================*/

    prevBtn?.addEventListener("click", () => {

        slider.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });

    });

    nextBtn?.addEventListener("click", () => {

        slider.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });

    });

    /*=========================================
      AUTO SCROLL
    =========================================*/

    function startAutoScroll() {

        autoScroll = setInterval(() => {

            const reachedEnd =
                slider.scrollLeft + slider.clientWidth >=
                slider.scrollWidth - 10;

            if (reachedEnd) {

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

        }, 5000);

    }

    function stopAutoScroll() {

        clearInterval(autoScroll);

    }

    startAutoScroll();

    /*=========================================
      PAUSE ON HOVER
    =========================================*/

    slider.addEventListener("mouseenter", stopAutoScroll);
    slider.addEventListener("mouseleave", startAutoScroll);

});
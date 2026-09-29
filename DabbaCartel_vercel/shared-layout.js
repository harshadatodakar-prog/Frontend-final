document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const buttons = document.querySelectorAll(".menu-button, .menu-btn");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            if (!sidebar) return;
            if (window.innerWidth <= 700) {
                sidebar.classList.toggle("show");
            } else {
                sidebar.classList.toggle("sidebar-hidden");
            }
        });
    });
});

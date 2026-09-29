document.addEventListener("DOMContentLoaded", function () {

    /* ================= TAB SYSTEM ================= */

    const tabs = document.querySelectorAll(".tab");

    const upcomingCards =
        document.querySelectorAll(".booking-card.upcoming");

    const completedCards =
        document.querySelectorAll(".booking-card.completed");

    const cancelledCards =
        document.querySelectorAll(".booking-card.cancelled");


    tabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            /* Remove active class */

            tabs.forEach(function (item) {
                item.classList.remove("active");
            });

            /* Add active class */

            tab.classList.add("active");


            const selectedTab = tab.dataset.tab;


            /* Hide everything */

            upcomingCards.forEach(function (card) {
                card.classList.add("hidden");
            });

            completedCards.forEach(function (card) {
                card.classList.add("hidden");
            });

            cancelledCards.forEach(function (card) {
                card.classList.add("hidden");
            });


            /* Show selected cards */

            if (selectedTab === "upcoming") {

                upcomingCards.forEach(function (card) {
                    card.classList.remove("hidden");
                });

            }


            if (selectedTab === "completed") {

                completedCards.forEach(function (card) {
                    card.classList.remove("hidden");
                });

            }


            if (selectedTab === "cancelled") {

                cancelledCards.forEach(function (card) {
                    card.classList.remove("hidden");
                });

            }

        });

    });


    /* ================= MOBILE SIDEBAR ================= */

    const menuBtn = document.getElementById("menuBtn");

    const sidebar = document.querySelector(".sidebar");


    menuBtn.addEventListener("click", function () {

        sidebar.classList.toggle("show");

    });


    /* ================= CONTACT BUTTON ================= */

    const contactButtons =
        document.querySelectorAll(".contact-btn");


    contactButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert("Contact option selected.");

        });

    });


    /* ================= VIEW DETAILS ================= */

    const detailsButtons =
        document.querySelectorAll(".details-btn");


    detailsButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert("Booking details will be displayed here.");

        });

    });


    /* ================= THREE DOT MENU ================= */

    const moreButtons =
        document.querySelectorAll(".more-btn");


    moreButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert(
                "Booking Options\n\n" +
                "1. View Details\n" +
                "2. Cancel Booking"
            );

        });

    });

});
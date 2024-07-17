document.addEventListener("DOMContentLoaded", function() {
    const hamBurger = document.querySelector(".toggle-btn");
    const sidebar = document.querySelector("#sidebar");

    // Check if sidebar element exists before proceeding
    if (sidebar) {
        sidebar.classList.add("expand"); // Example: Ensure sidebar is expanded by default

        if (hamBurger) {
            hamBurger.addEventListener("click", function() {
                sidebar.classList.toggle("expand");
            });
        } else {
            console.error("Element with class 'toggle-btn' not found.");
        }
    } 
    // else {
    //     // Hide sidebar-related errors or logs when not found on login page
    //     console.log("Sidebar element not found. This script is not needed on this page.");
    // }
});

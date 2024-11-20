const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mainContent = document.querySelector("main"); // Select the main content

// Toggle the mobile menu visibility and shift the main content
menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    mainContent.classList.toggle("shifted"); // Add or remove 'shifted' class
    // Toggle the button icon between ☰ and X
    menuToggle.classList.toggle("active");
});

// Close the mobile menu when clicking outside
document.addEventListener("click", (event) => {
    if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.remove("active");
        mainContent.classList.remove("shifted"); // Remove 'shifted' class if clicking outside
        menuToggle.classList.remove("active"); // Reset the button to ☰
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) { // If the screen width is greater than 768px
        mainContent.classList.remove("shifted"); // Reset main content position
        mobileMenu.classList.remove("active"); // Ensure the mobile menu is closed
        menuToggle.classList.remove("active"); // Reset the button to ☰
    }
});
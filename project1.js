document.addEventListener("DOMContentLoaded", function () {
    // Get all navigation links in the header
    const navLinks = document.querySelectorAll("nav ul li a");

    // Add a click event listener to each navigation link
    navLinks.forEach((link) => {
        link.addEventListener("click", smoothScroll);
    });

    // Function to smoothly scroll to the target section
    function smoothScroll(event) {
        // Prevent the default behavior of anchor links
        event.preventDefault();

        // Extract the target section's ID from the link's href attribute
        const targetId = this.getAttribute("href").substring(1);

        // Find the target section by its ID
        const targetElement = document.getElementById(targetId);

        // Calculate the scroll position for smooth scrolling
        const offset = 20; // You can adjust this value as needed
        const targetOffset = targetElement.offsetTop - offset;

        // Use the scrollIntoView method with the behavior option set to "smooth"
        window.scrollTo({
            top: targetOffset,
            behavior: "smooth",
        });
    }
});

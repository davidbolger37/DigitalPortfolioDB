document.addEventListener('DOMContentLoaded', () => {
    // Get the navbar element
    const navbar = document.querySelector('.navbar');

    if (!navbar) {
        console.error('Navbar element not found.');
        return;
    }

    let lastScrollY = window.scrollY;
    let lastMouseY = 0;

    // Flag to check if the mouse is over the navbar
    let isHovering = false;

    // Function to handle scrolling behavior
    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && !isHovering) {
            // User scrolled down and is not hovering over the navbar, hide it
            navbar.style.top = `-${navbar.offsetHeight}px`;
        } else if (!isHovering) {
            // User scrolled up and is not hovering over the navbar, show it
            navbar.style.top = '0';
        }
        lastScrollY = window.scrollY;
    });

    // Function to show the navbar while the mouse is moving upwards
    document.addEventListener('mousemove', (event) => {
        // If the mouse is moving up and is not hovering over the navbar, show the navbar
        if (event.clientY < lastMouseY && !isHovering) {
            navbar.style.top = '0';
        } else if (window.scrollY > 0 && !isHovering) {
            // If the mouse is not moving up and is not hovering the navbar, hide it
            navbar.style.top = `-${navbar.offsetHeight}px`;
        }

        // Update the last mouse Y position
        lastMouseY = event.clientY;
    });

    // Keep the navbar visible when hovering over it
    navbar.addEventListener('mouseenter', () => {
        isHovering = true;
        navbar.style.top = '0'; // Show navbar when hovering over it
    });

    navbar.addEventListener('mouseleave', () => {
        isHovering = false;
        // Hide the navbar if the mouse leaves it and the page is scrolled down
        if (window.scrollY > 0) {
            navbar.style.top = `-${navbar.offsetHeight}px`;
        }
    });
});

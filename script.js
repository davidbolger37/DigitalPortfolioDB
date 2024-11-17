window.addEventListener('load', () => {
    const canvas = document.getElementById('background');
    const ctx = canvas.getContext('2d');

    // Set the canvas size to the full window size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas(); // Initial size setting

    let gradientOffset = 0;  // Controls the gradient movement
    let scrollOffset = 0;    // Tracks how much the user has scrolled

    // Function to create and draw a moving gradient
    function drawGradient() {
        const gradient = ctx.createLinearGradient(0, gradientOffset, canvas.width, canvas.height + gradientOffset);

        // Define gradient colors
        gradient.addColorStop(0, `rgba(0, 255, 255, 1)`);  // Cyan
        gradient.addColorStop(0.5, `rgba(255, 0, 255, 1)`); // Magenta
        gradient.addColorStop(1, `rgba(0, 0, 255, 1)`);     // Blue

        // Apply gradient fill
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Function to animate the background
    function animateBackground() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear canvas before each frame
        drawGradient();  // Draw the animated gradient
        gradientOffset += 0.5;  // Adjust speed of gradient movement

        if (gradientOffset > canvas.height) gradientOffset = 0;  // Reset gradient offset for continuous loop
        requestAnimationFrame(animateBackground);  // Recursively call the animation
    }

    // Start the animation loop
    animateBackground();

    // Update scroll effect on window scroll
    window.addEventListener('scroll', () => {
        scrollOffset = window.scrollY / window.innerHeight;  // Calculate scroll offset based on page scroll
        // Optionally, you can adjust the gradientOffset here based on scrollOffset for more complex effects
    });

    // Resize canvas when the window size changes
    window.addEventListener('resize', () => {
        resizeCanvas();
        drawGradient(); // Redraw the gradient after resizing
    });

    // DOMContentLoaded event for handling navbar toggle
    document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.querySelector('.navbar-toggle');
        const navbarLinks = document.querySelector('.navbar-links');

        if (toggleButton) {
            toggleButton.addEventListener('click', () => {
                navbarLinks.classList.toggle('active');
            });
        }
    });
});

window.addEventListener('load', function() {
    const canvas = document.getElementById('background');
    const ctx = canvas.getContext('2d');

    // Set canvas size to the full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let gradientOffset = 0;  // Controls the gradient movement
    let scrollOffset = 0;    // Tracks how much the user has scrolled

    // Function to create a moving gradient
    function drawGradient() {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

        // Define gradient colors
        gradient.addColorStop(0, `rgba(0, 255, 255, 1)`);  // Cyan
        gradient.addColorStop(0.5, `rgba(255, 0, 255, 1)`); // Magenta
        gradient.addColorStop(1, `rgba(0, 0, 255, 1)`);    // Blue

        // Apply gradient fill
        ctx.fillStyle = gradient;

        // Move the gradient based on scroll position
        const scrollSpeed = 0.5;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Animate gradient position with scroll offset
        gradientOffset += (0.1 + scrollOffset * scrollSpeed);  // Modify scroll effect speed
        if (gradientOffset > 1) gradientOffset = 0;  // Reset for continuous loop
    }

    // Function to animate the background
    function animateBackground() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear canvas before each new frame
        drawGradient();  // Draw the animated gradient
        requestAnimationFrame(animateBackground);  // Keep the animation running
    }

    // Start the animation loop
    animateBackground();

    // Update scroll effect on window scroll
    window.addEventListener('scroll', function() {
        scrollOffset = window.scrollY / window.innerHeight;  // Calculate scroll offset based on page scroll
        // Optionally, apply more effects to the background here based on scroll offset
    });

    // Resize canvas when the window size changes
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});

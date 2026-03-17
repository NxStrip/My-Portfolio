// Wait for the entire HTML document to load before running any scripts
document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 1. MOBILE MENU TOGGLE
    // =========================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-link'); // Grab all individual links

    if (hamburger && navLinks) {
        // Toggle menu open/close when hamburger is clicked
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Swap the icon between hamburger (bars) and close (times)
            const icon = hamburger.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // UX Fix: Close the mobile menu automatically when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Only trigger if the menu is actually open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                
                // Reset the icon back to the hamburger bars
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });


    // =========================================
    // 2. DARK/LIGHT MODE TOGGLE
    // =========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Safety check to ensure the button exists on the page
    if (themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector('i');

        // Step A: Check browser's local storage for a previously saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            htmlElement.setAttribute('data-theme', savedTheme);
            updateIcon(savedTheme, themeIcon);
        }

        // Step B: Listen for the user clicking the toggle button
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            
            // If it's dark, make it light. If it's light, make it dark.
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Apply the new theme to the HTML tag
            htmlElement.setAttribute('data-theme', newTheme);
            
            // Save the user's preference to their browser
            localStorage.setItem('theme', newTheme);
            
            // Update the icon visually
            updateIcon(newTheme, themeIcon);
        });
    }

    // Helper function to swap the sun/moon icon based on the active theme
    function updateIcon(theme, iconElement) {
        if (theme === 'light') {
            iconElement.classList.remove('fa-sun'); // Remove sun
            iconElement.classList.add('fa-moon');   // Add moon for light mode
        } else {
            iconElement.classList.remove('fa-moon'); // Remove moon
            iconElement.classList.add('fa-sun');     // Add sun for dark mode
        }
    }

});

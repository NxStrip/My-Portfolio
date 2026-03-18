// =========================================
// 1. DOM CONTENT LOADED WRAPPER
// =========================================
document.addEventListener('DOMContentLoaded', () => {

    // --- MOBILE MENU TOGGLE ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // --- DARK/LIGHT MODE TOGGLE ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    if (themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector('i');
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            htmlElement.setAttribute('data-theme', savedTheme);
            updateIcon(savedTheme, themeIcon);
        }

        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateIcon(newTheme, themeIcon);
        });
    }

    function updateIcon(theme, iconElement) {
        if (theme === 'light') {
            iconElement.classList.remove('fa-sun');
            iconElement.classList.add('fa-moon');
        } else {
            iconElement.classList.remove('fa-moon');
            iconElement.classList.add('fa-sun');
        }
    }

}); // <--- THIS IS THE END OF DOMCONTENTLOADED


// =========================================
// 2. GLOBAL CONTACT FUNCTIONS (Paste Here)
// =========================================

const pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEaTV56xYJKwYBBAHaRw8BAQdAzSYycbpQzakhkS/CqCJmPCB13VJxVrai
LiM8vnTOU7vNMU51bGxUcmFjZTY3NjdAcHJvdG9uLm1lIDxOdWxsVHJhY2U2
NzY3QHByb3Rvbi5tZT7CwBEEExYKAIMFgmk1eesDCwkHCRCo/uZgQiv4q0UU
AAAAAAAcACBzYWx0QG5vdGF0aW9ucy5vcGVucGdwanMub3Jn6HmziIwPrrjG
ErlGrbavQvkAlBx2obOsfIKlQkzDVj0DFQoIBBYAAgECGQECmwMCHgEWIQRG
HSLV0OCl9eLTPCOo/uZgQiv4qwAA2moBALldoLMBiDrwLFLkzoXWhZHIrt0D
C+CpOUk6XFkcA15SAP4ohbE9901jHYocDPQihfLEC3zOa7gy2SlVOD7kRwUJ
AM44BGk1eesSCisGAQQBl1UBBQEBB0Cv7ARDRmnf5+5iC7+0MdmJH7bBxNnW
iyKJLS1tmBXoHAMBCAfCvgQYFgoAcAWCaTV56wkQqP7mYEIr+KtFFAAAAAAA
HAAgc2FsdEBub3RhdGlvbnMub3BlbnBncGpzLm9yZ9DuekH8hkHgq/pY6QUO
sTSfy6M3hduJOmn69lYn8xXtApsMFiEERh0i1dDgpfXi0zwjqP7mYEIr+KsA
AD9pAP4ivPa8QwE+ofB1nnqB/cuqASk67m1gcrhucZvceHspmwD9FNdL/DkF
e1JZlDjdsQxYBBE4tgc+NDlquPtyz6fc9wo=
=b1XX
-----END PGP PUBLIC KEY BLOCK-----`;

function copyDiscord() {
    const username = "nxstrip_0";
    navigator.clipboard.writeText(username).then(() => {
        const el = document.getElementById("discord-copy");
        const originalHTML = el.innerHTML;
        
        el.innerHTML = 'Copied! <i class="fas fa-check"></i>';
        el.style.color = "#10b981"; 
        
        setTimeout(() => {
            el.innerHTML = originalHTML;
            el.style.color = ""; 
        }, 2000);
    });
}

function copyPGP() {
    navigator.clipboard.writeText(pgpKey).then(() => {
        const btn = document.getElementById("pgp-copy");
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<i class="fas fa-check"></i> Key Copied!';
        btn.style.borderColor = "#10b981";
        btn.style.color = "#10b981";
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.borderColor = "";
            btn.style.color = "";
        }, 3000);
    });
}

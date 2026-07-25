// Mobile Navbar Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');

mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    if (navbar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Routine Tab Switching functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const routineContents = document.querySelectorAll('.routine-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        routineContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

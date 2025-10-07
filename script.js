document.addEventListener('DOMContentLoaded', () => {

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Navbar scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 100) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // Formulaire
    const form = document.querySelector('form');
    if(form){
        form.addEventListener('submit', e => {
            e.preventDefault();
            alert('Merci pour votre message ! 🏃‍♂️');
            form.reset();
        });
    }

});

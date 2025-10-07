/* ==========================
   SCRIPT GRAND RAID
   ========================== */

/**
 * 1️⃣ Défilement fluide (smooth scroll)
 * Quand on clique sur un lien du menu, la page défile en douceur
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


/**
 * 2️⃣ Changement de couleur de la navbar au défilement
 * Quand on descend dans la page, la navbar devient colorée
 */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


/**
 * 3️⃣ Message de confirmation du formulaire
 */
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Merci pour votre message ! Nous vous répondrons bientôt. 🏃‍♂️');
        form.reset();
    });
}

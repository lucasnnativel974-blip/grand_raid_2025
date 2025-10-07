/* ==========================
   STYLE GRAND RAID
   ========================== */

/* Couleurs principales */
:root {
    --vert-raid: #5b8e2d;
    --jaune-raid: #f9d71c;
    --rouge-raid: #d71a28;
    --bleu-raid: #1b2c7a;
    --gris-clair: #f8f9fa;
    --texte-principal: #333;
}

/* ==========================
   BASE
   ========================== */
body {
    background-color: #ffffff;
    color: var(--texte-principal);
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
}

h2 {
    color: var(--vert-raid);
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
    transition: color 0.3s ease;
}

h2:hover {
    color: var(--rouge-raid);
}

/* ==========================
   NAVBAR
   ========================== */
.navbar {
    background-color: var(--vert-raid);
    border-bottom: 5px solid var(--rouge-raid);
    transition: all 0.3s ease;
}

.navbar-brand {
    color: var(--jaune-raid) !important;
    font-weight: bold;
    letter-spacing: 1px;
}

.nav-link {
    color: #fff !important;
    font-weight: 500;
    transition: all 0.3s ease;
}

.nav-link:hover {
    color: var(--jaune-raid) !important;
}

.navbar-toggler {
    border-color: var(--bleu-raid);
}

/* ==========================
   SECTIONS
   ========================== */
section {
    padding: 80px 0;
    transition: all 0.5s ease;
}

section.bg-light {
    background-color: var(--gris-clair);
}

section p {
    max-width: 700px;
    margin: 0 auto 1.5rem;
    font-size: 1.1rem;
}

/* ==========================
   BOUTONS
   ========================== */
.btn-raid {
    background-color: var(--rouge-raid);
    color: #fff;
    border: none;
    padding: 12px 30px;
    font-weight: 600;
    border-radius: 50px;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(215, 26, 40, 0.4);
}

.btn-raid:hover {
    background-color: var(--bleu-raid);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(27, 44, 122, 0.5);
}

/* ==========================
   FORMULAIRE
   ========================== */
form .form-control {
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 10px;
    transition: all 0.3s ease;
}

form .form-control:focus {
    border-color: var(--bleu-raid);
    box-shadow: 0 0 10px rgba(27, 44, 122, 0.2);
    outline: none;
}

/* ==========================
   IFRAME
   ========================== */
iframe {
    width: 100%;
    border-radius: 10px;
    border: 2px solid #ccc;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

iframe:hover {
    transform: scale(1.02);
}

/* ==========================
   FOOTER
   ========================== */
footer {
    background: linear-gradient(
        90deg,
        var(--vert-raid) 0%,
        var(--jaune-raid) 25%,
        var(--rouge-raid) 50%,
        var(--bleu-raid) 75%
    );
    color: #fff;
    padding: 40px 0;
    text-align: center;
    transition: all 0.5s ease;
}

footer p {
    margin: 0;
    font-weight: 500;
}

/* ==========================
   MEDIA QUERIES
   ========================== */

/* --- Petits écrans (mobile) --- */
@media (max-width: 576px) {
    h2 {
        font-size: 1.6rem;
    }

    section {
        padding: 60px 0;
    }

    .navbar-brand {
        font-size: 1.1rem;
    }

    .btn-raid {
        width: 100%;
    }

    iframe {
        height: 250px;
    }
}

/* --- Moyens écrans (tablettes) --- */
@media (min-width: 577px) and (max-width: 992px) {
    h2 {
        font-size: 1.8rem;
    }

    section {
        padding: 70px 0;
    }

    iframe {
        height: 350px;
    }
}

/* --- Grands écrans (ordinateurs) --- */
@media (min-width: 993px) {
    h2 {
        font-size: 2rem;
    }

    iframe {
        height: 500px;
    }
}

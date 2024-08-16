import datas from '@data';

// Fonction pour faire défiler le compteur
function startCounter(element) {
    const target = parseInt(element.textContent, 10);
    let count = 0;
    const duration = 2000; // Durée en millisecondes
    const delay = 10; // Délai entre les incréments en millisecondes
    const increment = target / (duration / delay);
    
    function updateCounter() {
        if (count < target) {
            count = Math.min(count + increment, target);
            element.textContent = Math.floor(count);
            setTimeout(updateCounter, delay);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working!');
    // Afficher les autres données dans les éléments respectifs
    document.getElementById('clients').textContent = datas.clients;
    document.getElementById('partenaires').textContent = datas.partenaires;
    document.getElementById('PrixGagner').textContent = datas.prixGagner;

    // Lancer le compteur pour les éléments avec data-toggle="counter-up"
    document.querySelectorAll('[data-toggle="counter-up"]').forEach(counter => {
        startCounter(counter);
    });
});

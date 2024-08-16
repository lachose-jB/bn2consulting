import { whatsappLink, sendEmail } from '@contactController'; // Ajustez le chemin selon votre structure de projet

document.addEventListener('DOMContentLoaded', () => {
 
    // Gestionnaire d'événement pour le bouton "Nous contacter"
    const contactButton = document.getElementById('contactNous'); 
    
    if (contactButton) {
        contactButton.addEventListener('click', (event) => {
            event.preventDefault(); 
            window.location.href = whatsappLink;
        });
    }

    // Gestionnaire d'événement pour le formulaire de contact
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Empêche le comportement par défaut du formulaire

            // Récupérer les données du formulaire
            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };

            // Envoyer l'e-mail via Elastic Email
            sendEmail(
                data.email, // Utilisez l'adresse de l'utilisateur comme expéditeur
                data.subject, // Sujet de l'e-mail
                `Message from ${data.name}: ${data.message}` // Corps de l'e-mail
            ).then(() => {
                // Réinitialiser seulement les champs du formulaire après un envoi réussi
                form.reset(); // Réinitialiser tous les champs du formulaire
                
                alert('Message sent successfully!');
            }).catch((error) => {
                console.error('Error sending email:', error);
                alert('Failed to send message. Please try again.');
            });
        });
    }

});

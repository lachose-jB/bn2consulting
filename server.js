const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;


// Configurer le répertoire pour les fichiers statiques
const animatePath = path.join(__dirname, 'src/lib/animate');
console.log(`Static files for /assets/animate will be served from: ${animatePath}`);
app.use('/assets/animate', express.static(animatePath));

const assetsPath = path.join(__dirname, 'public/assets');
console.log(`Static files for /assets will be served from: ${assetsPath}`);
app.use('/assets', express.static(assetsPath));

const cssPath = path.join(__dirname, 'public/assets/css');
console.log(`Static files for /assets/css will be served from: ${cssPath}`);
app.use('/assets/css', express.static(cssPath));

const frontJsPath = path.join(__dirname, 'public/assets/frontJs');
console.log(`Static files for /assets/frontJs will be served from: ${frontJsPath}`);
app.use('/assets/frontJs', express.static(frontJsPath));

const controleJsPath = path.join(__dirname, 'src/controlejs');
console.log(`Static files for /assets/frontJs will be served from: ${controleJsPath}`);
app.use('/assets/frontJs', express.static(controleJsPath));

const owlcarouselPath = path.join(__dirname, 'src/lib/owlcarousel');
console.log(`Static files for /assets/owlcarousel will be served from: ${owlcarouselPath}`);
app.use('/assets/owlcarousel', express.static(owlcarouselPath));

const counterupPath = path.join(__dirname, 'src/lib/counterup');
console.log(`Static files for /assets/counterup will be served from: ${counterupPath}`);
app.use('/assets/counterup', express.static(counterupPath));

const easingPath = path.join(__dirname, 'src/lib/easing');
console.log(`Static files for /assets/easing will be served from: ${easingPath}`);
app.use('/assets/easing', express.static(easingPath));

const wowPath = path.join(__dirname, 'src/lib/wow');
console.log(`Static files for /assets/wow will be served from: ${wowPath}`);
app.use('/assets/wow', express.static(wowPath));

const waypointsPath = path.join(__dirname, 'src/lib/waypoints');
console.log(`Static files for /assets/waypoints will be served from: ${waypointsPath}`);
app.use('/assets/waypoints', express.static(waypointsPath));

// Serve les fichiers HTML depuis le dossier 'public/pages'
const pagesPath = path.join(__dirname, 'public/pages');
console.log(`HTML files will be served from: ${pagesPath}`);
app.use('/pages', express.static(pagesPath));

// Route pour la page d'accueil
app.get('/index', (req, res) => {
    const indexPath = path.join(__dirname, 'public/index.html');
    console.log(`Serving index.html from: ${indexPath}`);
    res.sendFile(indexPath);
});

// Routes pour les pages spécifiques
app.get('/Apropos', (req, res) => {
    const aproposPath = path.join(__dirname, 'public/pages/Apropos.html');
    console.log(`Serving Apropos.html from: ${aproposPath}`);
    res.sendFile(aproposPath);
});

app.get('/blog', (req, res) => {
    const blogPath = path.join(__dirname, 'public/pages/blog.html');
    console.log(`Serving blog.html from: ${blogPath}`);
    res.sendFile(blogPath);
});

app.get('/contact', (req, res) => {
    const contactPath = path.join(__dirname, 'public/pages/contact.html');
    console.log(`Serving contact.html from: ${contactPath}`);
    res.sendFile(contactPath);
});

app.get('/Service', (req, res) => {
    const servicePath = path.join(__dirname, 'public/pages/Service.html');
    console.log(`Serving Service.html from: ${servicePath}`);
    res.sendFile(servicePath);
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

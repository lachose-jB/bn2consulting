const path = require('path');

module.exports = {
    mode: 'development', // Utilisez 'production' pour la version finale, 'development' pour le développement
    entry: {
        main: './public/assets/frontJs/main.js', // Point d'entrée principal
        apropos: './public/assets/frontJs/about/aproposMain.js', // Point d'entrée pour la page À propos
        blog: './public/assets/frontJs/blog/blogMain.js', // Point d'entrée pour le blog
        contact: './public/assets/frontJs/contact/contactMain.js', // Point d'entrée pour la page Contact
        service: './public/assets/frontJs/service/serviceMain.js' // Point d'entrée pour la page Service
    },
    output: {
        filename: '[name].bundle.js', // Utilise le nom du point d'entrée comme nom de fichier
        path: path.resolve(__dirname, 'public/assets/frontJs') // Répertoire de sortie
    },
    resolve: {
        alias: {
            '@data': path.resolve(__dirname, 'src/controleJs/data.js'), // Alias pour le fichier data.js
            '@contactController': path.resolve(__dirname, 'src/controleJs/contact/contactController.js') // Alias pour le contrôleur de contact
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Teste tous les fichiers JavaScript
                exclude: /node_modules/, // Ignore les fichiers dans node_modules
                use: {
                    loader: 'babel-loader', // Utilise Babel pour transpiler le JavaScript moderne
                    options: {
                        presets: ['@babel/preset-env'] // Utilise le preset pour la compatibilité ES6+
                    }
                }
            }
        ]
    },
    devtool: 'source-map' // Génère un fichier source map pour le débogage
};

# Charles Cantin photographe

Déploiement en local 
- créer un répertoire pour le projet
- ouvrir le terminal et executer la commande npm init -y dans le répertoire du projet pour initialiser un nouveau projet Node.js.
- exécuter la commande npm install @11ty/eleventy --save-dev pour installer le package en tant que dépendance de développement dans votre projet.

- dans le fichier package.json, vous pouvez ajouter les lignes suivantes dans scripts :
  "scripts": {
    "build": "npx @11ty/eleventy",
    "start": "npx @11ty/eleventy --serve",
    "watch": "npx @11ty/eleventy --watch"
  },
  ce qui permettra d'utiliser les lignes de commande npm run build et npm start


Pour construire votre site et produire le résultat dans le dossier _site, il faudra alors executer dans le terminal la commande npm run build

Pour démarrer un serveur local, il faudra executer la commande npm start

Dans le navigateur, accèder à l'adresse http://localhost:8080/ pour visualiser le site 


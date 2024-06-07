# Charles Cantin photographe

Déploiement en local 
- créer un répertoire pour le projet
- ouvrir le terminal et executer la commande npm init -y dans le répertoire du projet pour initialiser un nouveau projet Node.js.
- exécuter la commande npm install @11ty/eleventy --save-dev pour installer le package @11ty/eleventy en tant que dépendance de développement dans votre projet.

- dans le fichier package.json, on peut ajouter les lignes suivantes dans scripts :
  "scripts": {
    "build": "npx @11ty/eleventy",
    "start": "npx @11ty/eleventy --serve",
    "watch": "npx @11ty/eleventy --watch"
  },
  ce qui permettra d'utiliser les lignes de commande npm run build à la place de npx @11ty/eleventy et npm start à la place de npx @11ty/eleventy --serve


Pour construire le site et produire le résultat dans le dossier _site, il faudra alors executer dans le terminal la commande npm run build

Pour démarrer un serveur local, il faudra executer la commande npm start

Dans le navigateur, accéder à l'adresse http://localhost:8080/ pour visualiser le site.


Déposer le projet sur git.hub :
- créer un dépôt local git, ainsi qu'un dépôt distant. Lier ces deux dépôts git.
- "pousser" le dépôt local vers le dépôt github distant. 


Déploiement en production :
- créer un dossier admin à la racine du projet, dans lequel on crée deux fichiers index.html et config.yml

- le fichier index.html doit contenir le code suivant
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex" />
    <title>Content Manager</title>
  </head>
  <body>
    <!-- Include the script that builds the page and powers Decap CMS -->
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </body>
</html>  

- ouvrir le terminal et executer la commande npm install decap-cms-app --save pour installer le package decap-cms

- choisir un back-end. Nous avons choisi Netlify. 

- Dans Netlify, créer un nouveau site et l'associer au dépôt Git du projet

- configurer les paramètres sur Netlify 
Branch to deploy : main
Build command : npm run build
Publish directory : _site

- déployer sur Netlify

Sécurité : 
Authentification de l'utilisateur 
- Depuis le tableau de bord du site sur Netlify, 
-- accéder à Paramètres > Identité puis sélectionner Activer le service d'identité. Sous Préférence d'inscription, sélectionner inviter uniquement pour que seuls les utilisateurs invités accèdent au CMS
-- accéder à Services > Git Gateway puis cliquer sur Activer Git Gateway. cela permet de s'authentifier auprès de l'hôte Git et de générer un jeton d'accès à l'API. 
- Sur le dépôt local, 
-- ajouter le widget d'identité Netlify à deux endroits 
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script> dans Admin/index.html, ainsi que dans src/html
-- ajouter le code ci dessous dans la page Admin/index.html
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", (user) => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>

- configurer le fichier config.yml 
- "commiter" les modifications sur le dépôt distant. 

- le site en production est accessible à l'adresse 
https://charles-cantin-gaelle.netlify.app/

- l'administration du site est accessible à l'adresse https://charles-cantin-gaelle.netlify.app/admin


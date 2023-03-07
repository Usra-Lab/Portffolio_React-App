# PORTFOLIO avec ReactJs sous forme d'une Landing Page

Basée sur :

-Components & Props & map function
-UseState
-UseEffect



Architecture du projet:
La page est divisée en section (Components)
-NavBar.js
-Banner.js
-skills.js
-ProjectsP.js
-Contact.js
-Footer.js
Regroupés dans le Composant
-Home.js
Appelé par
App.js comme page racine





bibliothèques:
_react-bootstrap
_react-router
_emailjs-com




séparation de la partie data du code front-end 
=> Creation d'une JSON-server fake API et faire un fetch sur les données
-> Il faut démarrer le serveur JSON
cmd :: json-server --watch data/db.json --port 4000

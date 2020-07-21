var divQuestions;
var nbQstPosees=0,reponse,reponsesCorrectes=0,j,nbQuestions=10;
var numQuestion = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var frag=document.createDocumentFragment();
var time=1200000,mn=20,sec=0;
var tabQuestions = [ 
[ "Le port auxiliaire port auxiliaire de routeur Cisco permet un : ", "Accès de base pour configuration", "Accès pour configuration au travers d’une ligne analogique et modems interposés.", "Accès pour connection internet", "Accès pour maintenance", "1" ],
[ "L'interface LAN de routeur Cisco permet un : ", "Accès de base pour configuration", "Accès pour configuration au travers d’une ligne analogique et modems interposés.", "Accès pour connection internet", "Accès pour maintenance", "2" ],
[ "La ligne VTY permet un : ", "Accès primaire", "Accès à distance", "Accès via un client Telnet", "Accès utilisant le serveur HTTP", "3" ],
[ "La ligne console permet un : ", "Accès primaire", "Accès à distance", "Accès via un client Telnet", "Accès utilisant le serveur HTTP", "1" ],
[ "La Ligne auxiliaire permet un : ", "Accès primaire", "Accès à distance", "Accès via un client Telnet", "Accès utilisant le serveur HTTP", "2" ],
[ "L'explorateur Web permet un : ", "Accès primaire", "Accès à distance", "Accès via un client Telnet", "Accès utilisant le serveur HTTP", "4" ],
[ "Pour arrêter l’exécution d’une commande, il faut utiliser une des combinaisons de touches suivantes :", "CTRL+Z", "CTRL+ALT+6", "ALT+TAB", "CTRL+MAJ+6", "4" ],
[ "L'affichage qui designe le mode utilisateur est  ", "Router #", "Router >", "Router (config) #", "Router (config-if) #", "1" ],
[ "L'affichage qui designe le mode privilégié est  ", "Router #", "Router >", "Router (config) #", "Router (config-if) #", "2" ],
[ "L'affichage qui designe le mode configuration globale est  ", "Router #", "Router >", "Router (config) #", "Router (config-if) #", "3" ],
[ "L'affichage qui designe le mode interface est  ", "Router #", "Router >", "Router (config) #", "Router (config-if) #", "4" ],
[ "ID de dispositif : ", "Nom d’hôte et nom de domaine du voisin", "Une adresse pour chaque protocole routé du voisin", "Interface du voisin utilisée pour se connecter au routeur local", "Fonction du dispositif voisin (routeur, pont, commutateur, etc.)", "1" ],
[ "Liste d’adresses : ", "Nom d’hôte et nom de domaine du voisin", "Une adresse pour chaque protocole routé du voisin", "Interface du voisin utilisée pour se connecter au routeur local", "Fonction du dispositif voisin (routeur, pont, commutateur, etc.)", "2" ],
[ "Identifiant de port : ", "Nom d’hôte et nom de domaine du voisin", "Une adresse pour chaque protocole routé du voisin", "Interface du voisin utilisée pour se connecter au routeur local", "Fonction du dispositif voisin (routeur, pont, commutateur, etc.)", "3" ],
[ "Liste de capacités : ", "Nom d’hôte et nom de domaine du voisin", "Une adresse pour chaque protocole routé du voisin", "Interface du voisin utilisée pour se connecter au routeur local", "Fonction du dispositif voisin (routeur, pont, commutateur, etc.)", "4" ],
[ "La commande show cdp permet d'afficher : ", "les compteurs de temps pour CDP", "les interfaces sur lesquelles CDP est activé", "les informations d’un ou des voisins", "la liste des voisins CDP ainsi que les informations les concernant", "1" ],
[ "La commande show cdp interface [{type} {numéro}] permet d'afficher : ", "les compteurs de temps pour CDP", "les interfaces sur lesquelles CDP est activé", "les informations d’un ou des voisins", "la liste des voisins CDP ainsi que les informations les concernant", "2" ],
[ "La commande show cdp entry {nom | *} permet d'afficher : ", "les compteurs de temps pour CDP", "les interfaces sur lesquelles CDP est activé", "les informations d’un ou des voisins", "la liste des voisins CDP ainsi que les informations les concernant", "3" ],
[ "La commande show cdp neighbors [detail] permet d'afficher : ", "les compteurs de temps pour CDP", "les interfaces sur lesquelles CDP est activé", "les informations d’un ou des voisins", "la liste des voisins CDP ainsi que les informations les concernant", "4" ],
[ "La couche internet de modèle TCP/IP permet : ", "La sélection du chemin", "L'assurance de la qualité de transmission", "La transmession des données", "Le codage des données", "1" ],
];

window.addEventListener("load", poserQuestion, false);



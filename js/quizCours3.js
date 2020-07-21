var divQuestions;
var nbQstPosees=0,reponse,reponsesCorrectes=0,j,nbQuestions=10;
var numQuestion = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var frag=document.createDocumentFragment();
var time=1200000,mn=20,sec=0;
var tabQuestions = [ 
[ "L'une des caractéristiques de l'adresse unicast est : ", "une adresse physique identifiant une seule carte réseau", "avec cette adresse tous les noeuds du LAN doivent traiter la trame.", "elle permet à un ensemble de noeuds de communiquer entre eux.", "elle crée un bus unique entre la source et la destination.", "1" ],
[ "L'une des caractéristiques de l'adresse de broadcast est : ", "une adresse physique identifiant une seule carte réseau", "avec cette adresse tous les noeuds du LAN doivent traiter la trame.", "elle permet à un ensemble de noeuds de communiquer entre eux.", "elle crée un bus unique entre la source et la destination.", "2" ],
[ "Dans la communication store and forward : ", "Le commutateur attend d’avoir reçu toute la trame avant de la transmettre.", "Le commutateur attend d'avoir reçu les 64 premiers octets avant de commencer à transmettre la trame.", "Pas de vérification d’erreurs.", "Dès que l’adresse de destination est connue, la trame commence à être commutée.", "1" ],
[ "Dans la communication fragment free : ", "Le commutateur attend d’avoir reçu toute la trame avant de la transmettre.", "Le commutateur attend d'avoir reçu les 64 premiers octets avant de commencer à transmettre la trame.", "Pas de vérification d’erreurs.", "Dès que l’adresse de destination est connue, la trame commence à être commutée.", "2" ],
[ "Dans la communication fast forwardd : ", "Le commutateur attend d’avoir reçu toute la trame avant de la transmettre.", "Le commutateur attend d'avoir reçu les 64 premiers octets avant de commencer à transmettre la trame.", "Pas de vérification d’erreurs.", "Dès que l’adresse de destination est connue, la trame commence à être commutée.", "3" ],
[ "Dans la communication cut through : ", "Le commutateur attend d’avoir reçu toute la trame avant de la transmettre.", "Le commutateur attend d'avoir reçu les 64 premiers octets avant de commencer à transmettre la trame.", "Pas de vérification d’erreurs.", "Dès que l’adresse de destination est connue, la trame commence à être commutée.", "4" ],
[ "Lorsque le voyant système d'un commutateur est éteint, alors : ", "le système est hors tension", "le système est sous-tension", "y a un problème suite au POST", "l'alimentation de sécurité est utilisée", "1" ],
[ "Lorsque le voyant système d'un commutateur est éteint, alors : ", "le système est hors tension", "le système est sous-tension", "y a un problème suite au POST", "l'alimentation de sécurité est utilisée", "2" ],
[ "Lorsque le voyant système d'un commutateur est éteint, alors : ", "le système est hors tension", "le système est sous-tension", "y a un problème suite au POST", "l'alimentation de sécurité est utilisée", "3" ],
[ "Lorsque le voyant RPS d'un commutateur est éteint, alors : ", "le système est hors tension", "le système est sous-tension", "y a un problème suite au POST", "l'alimentation de sécurité est utilisée", "4" ],
[ "La comande enable permet de : ", "accéder au mode privilégié", "accéder au mode de configuration globale", "afficher le fichier de configuration actif", "passer dans le mode configuration de l'interface", "1" ],
[ "La comande configure terminal permet de : ", "accéder au mode privilégié", "accéder au mode de configuration globale", "afficher le fichier de configuration actif", "passer dans le mode configuration de l'interface", "2" ],
[ "La comande show running-config permet de : ", "accéder au mode privilégié", "accéder au mode de configuration globale", "afficher le fichier de configuration actif", "passer dans le mode configuration de l'interface", "3" ],
[ "La comande interface [type] [numéro/sous numéro] permet de : ", "accéder au mode privilégié", "accéder au mode de configuration globale", "afficher le fichier de configuration actif", "passer dans le mode configuration de l'interface", "4" ],
[ "Dans l'état de transmission, le port : ", "émet et reçoit les trames", "écoute les BPDU pour s'assurer qu'il n'y ait pas de boucle.", "écoute les BPDU pour découvrir les adresses MAC.", "ne peut ni émettre ni recevoir les trames", "1" ],
[ "Dans l'état d'ecoute, le port : ", "émet et reçoit les trames", "écoute les BPDU pour s'assurer qu'il n'y ait pas de boucle.", "écoute les BPDU pour découvrir les adresses MAC.", "ne peut ni émettre ni recevoir les trames", "2" ],
[ "Dans l'état d'apprentissage, le port : ", "émet et reçoit les trames", "écoute les BPDU pour s'assurer qu'il n'y ait pas de boucle.", "écoute les BPDU pour découvrir les adresses MAC.", "ne peut ni émettre ni recevoir les trames", "3" ],
[ "Dans l'état de blocage, le port : ", "émet et reçoit les trames", "écoute les BPDU pour s'assurer qu'il n'y ait pas de boucle.", "écoute les BPDU pour découvrir les adresses MAC.", "ne peut ni émettre ni recevoir les trames", "4" ],
[ "La deuxième étape de VLSM consiste à : ", "agréger les différents instances d’un niveau ", "identifier le besoin", "connaître le nombre d’utilisateurs pour chaque sous-réseau", "Déterminer la classe d’adresse ou l’agrégat d’adresses", "3" ],
[ "La troisième étape de VLSM consiste à : ", "agréger les différents instances d’un niveau ", "identifier le besoin", "connaître le nombre d’utilisateurs pour chaque sous-réseau", "Déterminer la classe d’adresse ou l’agrégat d’adresses", "4" ],
];
window.addEventListener("load", poserQuestion, false);



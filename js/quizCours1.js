var divQuestions;
var nbQstPosees=0,reponse,reponsesCorrectes=0,j,nbQuestions=10;
var numQuestion = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var frag=document.createDocumentFragment();
var time=1200000,mn=20,sec=0;
var tabQuestions = [ 
[ "La couche 4 de modèle OSI est : ", "Couche physique", "Couche réseau", "Couche session", "Couche transport", "4" ],
[ "La couche 3 de modèle OSI est : ", "Couche physique", "Couche réseau", "Couche session", "Couche transport", "2" ],
[ "La couche 5 de modèle OSI est : ", "Couche physique", "Couche réseau", "Couche session", "Couche transport", "3" ],
[ "La couche 1 de modèle OSI est : ", "Couche physique", "Couche réseau", "Couche session", "Couche transport", "1" ],
[ "La couche liaison de donnée est la _________ dans modèle OSI.", "Septième couche", "Cinquième couche", "Deuxième Couche", "Sixième Couche", "3" ],
[ "La couche application est la _________ dans modèle OSI.", "Septième couche", "Cinquième couche", "Deuxième Couche", "Sixième Couche", "1" ],
[ "La couche Présentation est la _________ dans modèle OSI.", "Septième couche", "Cinquième couche", "Deuxième Couche", "Sixième Couche", "4" ],
[ "Le terme OSI signifié : ", "Open Standards Interconnection", "Open Systems Interconnection", "Open Systems Intenational", "Open Standards Intenational", "2" ],
[ "Le modèle OSI a été proposer par : ", "Compagnie internationale pour l'informatique CII", "Digital Equipment Corporation DEC", "l'Organisation Internationale de Normalisation ISO", "International Business Machines Corporation IBM", "3" ],
[ "L'une des avantages de ce modèle est : ", "L’uniformisation des éléments afin de permettre le développement multi constructeur", "De ne pas modifier un aspect de la communication réseau sans modifier le reste", "De ne pas permettre le développement multi constructeur", "Une division de la communication réseau en éléments complexes pour chiffrer les données", "1" ],
[ "La couche application de modèle TCP/IP regroupe les couches : ______________ de modèle OSI. : ", "3, 4 et 5", "4, 5 et 6", "2, 3 et 4", "5, 6 et 7", "4" ],
[ "La couche accès réseau de modèle TCP/IP regroupe les couches : ______________ de modèle OSI. : ", "3 et 4", "5 et 6", "1 et 2", "6 et 7", "3" ],
[ "La couche internet de modèle TCP/IP regroupe les couches : ______________ de modèle OSI. : ", "3 et 4", "5 et 6", "1 et 2", "6 et 7", "1" ],
[ "La couche internet de modèle TCP/IP permet : ", "La sélection du chemin", "L'assurance de la qualité de transmission", "La transmession des données", "Le codage des données", "1" ],
[ "La couche transport de modèle TCP/IP permet : ", "La sélection du chemin", "L'assurance de la qualité de transmission", "La transmession des données", "Le codage des données", "2" ],
[ "L'une des caractéristique du signal analogique est : ", "il n'est pas oscille", "Son graphique de tension varie constamment en fonction du temps", "il serapproche d'une onde carrée", "tension passe quasi instantanément d’un état de basse tension à un état de haute tension", "2" ],
[ "La latence : ", "Se produit lorsque 2 ordinateurs utilisant le même segment de réseau émettent en même temps", "Est l'étalement des impulsions dans le temps", "Est le bruit ajouté au signal d’origine d’un conducteur par l’action du champ magnétique", "Est un retard de transmission du au déplacement du signal dans le média et à la présence de composants électroniques entre la source et la destination.", "4" ],
[ "Une collision : ", "Se produit lorsque 2 ordinateurs utilisant le même segment de réseau émettent en même temps", "Est l'étalement des impulsions dans le temps", "Est le bruit ajouté au signal d’origine d’un conducteur par l’action du champ magnétique", "Est un retard de transmission du au déplacement du signal dans le média et à la présence de composants électroniques entre la source et la destination.", "1" ],
[ "Le RJ-45 est un raccordement : ", "100 Base TX", "10 Base FL", "10 Base T", "10 Base 5", "3" ],
[ "Les 2 protocoles de couche 4 de la pile de protocoles TCP/IP sont : ", "TCP et UDP", "TCP et ICMP", "ARP et UDP", "UDP et ICMP", "1" ],
];

window.addEventListener("load", poserQuestion, false);



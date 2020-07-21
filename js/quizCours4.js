var divQuestions;
var nbQstPosees=0,reponse,reponsesCorrectes=0,j,nbQuestions=10;
var numQuestion = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var frag=document.createDocumentFragment();
var time=1200000,mn=20,sec=0;
var tabQuestions = [ 
[ "Inside local address est une adresse IP : ", "attribuée à un hôte dans le LAN.", "attribuée par le FAI reconnue par l’Internet pour représenter le LAN.", "d’un hôte du réseau externe telle qu’elle est connue par les utilisateurs du réseau interne. ", "Adresse IP attribuée à un hôte dans le réseau externe.", "1" ],
[ "Inside global address est une adresse IP : ", "attribuée à un hôte dans le LAN.", "attribuée par le FAI reconnue par l’Internet pour représenter le LAN.", "d’un hôte du réseau externe telle qu’elle est connue par les utilisateurs du réseau interne. ", "Adresse IP attribuée à un hôte dans le réseau externe.", "2" ],
[ "Outside local address est une adresse IP : ", "attribuée à un hôte dans le LAN.", "attribuée par le FAI reconnue par l’Internet pour représenter le LAN.", "d’un hôte du réseau externe telle qu’elle est connue par les utilisateurs du réseau interne. ", "Adresse IP attribuée à un hôte dans le réseau externe.", "3" ],
[ "Outside global address est une adresse IP : ", "attribuée à un hôte dans le LAN.", "attribuée par le FAI reconnue par l’Internet pour représenter le LAN.", "d’un hôte du réseau externe telle qu’elle est connue par les utilisateurs du réseau interne. ", "Adresse IP attribuée à un hôte dans le réseau externe.", "4" ],
[ "Le NAT statique translate : ", "une adresse privée avec une adresse IP publique appartenant à un pool d’adresses.", "plusieurs adresses de diffusion", "une adresse IP publique avec toujours la même adresse IP privée.", "une adresse IP privée avec toujours la même adresse IP public.", "4" ],
[ "Le NAT dynamique translate : ", "une adresse privée avec une adresse IP publique appartenant à un pool d’adresses.", "plusieurs adresses de diffusion", "une adresse IP publique avec toujours la même adresse IP privée.", "une adresse IP privée avec toujours la même adresse IP public.", "1" ],
[ "La plage d’adresses privées de la classe C est : ", "De 192.168.0.0 à 192.168.255.255", "De 10.0.0.0 à 10.255.255.255", "De 224.0.0.0 à 239.255.255.255", "De 172.16.0.0 à 172.31.255.255", "1" ],
[ "La plage d’adresses privées de la classe B est : ", "De 192.168.0.0 à 192.168.255.255", "De 10.0.0.0 à 10.255.255.255", "De 224.0.0.0 à 239.255.255.255", "De 172.16.0.0 à 172.31.255.255", "4" ],
[ "La plage d’adresses privées de la classe A est : ", "De 192.168.0.0 à 192.168.255.255", "De 10.0.0.0 à 10.255.255.255", "De 224.0.0.0 à 239.255.255.255", "De 172.16.0.0 à 172.31.255.255", "2" ],
[ "L'une des étapes suivantes n'est pas une étape de la configuration DHCP : ", "DHCP DISCOVER", "DHCP ARP", "DHCP REQUEST", "DHCP ACK", "2" ],
[ "Le mode de configuration de la commande ip dhcp pool {nom_groupe} est : ", "Globale", "DHCP", "Privilégié", "Interface", "1" ],
[ "Le mode de configuration de la commande default-router {prefix} est : ", "Globale", "DHCP", "Privilégié", "Interface", "2" ],
[ "Le mode de configuration de la commande helper-address {prefix} est : ", "Globale", "DHCP", "Privilégié", "Interface", "4" ],
[ "Le terme PAT signifie : ", "Protocole Address Translation", "Port Address Transmission", "Port Address Translation", "Protocole Address Transmission", "3" ],
[ "La commande qui permet de configurer le PAT sur l'interface Outside est : ", "clear ip nat translation", "access-list {numéro} permit {prefix} {wildcard_mask}", "ip nat outside", "ip nat inside", "1" ],
[ "L'une des commandes suivantes n'est pas une commande de vérification : ", "show ip nat translations", "show ip nat statistics", "debug ip nat", "[no] service dhcp", "4" ],
[ "Le CIDR correspondant à la classe A est : ", "10.0.0.0/8", "192.168.0.0/16", "172.16.0.0/12", "224.0.0.0/24", "1" ],
[ "Le CIDR correspondant à la classe C est : ", "10.0.0.0/8", "192.168.0.0/16", "172.16.0.0/12", "224.0.0.0/24", "2" ],
[ "Le CIDR correspondant à la classe B est : ", "10.0.0.0/8", "192.168.0.0/16", "172.16.0.0/12", "224.0.0.0/24", "3" ],
[ "L'un des services suivants n'est pas un service UDP : ", "ICMP", "TFTP", " NetBIOS", "BOOTP/DHCP", "1" ],
];

window.addEventListener("load", poserQuestion, false);



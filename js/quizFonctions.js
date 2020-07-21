// fonction pour poser une nouvelle question
function poserQuestion(){

  divQuestion = document.getElementById("divQuestion");
  if(nbQstPosees >= nbQuestions){ //cas fin des questions
    document.getElementById('div').parentNode.removeChild(document.getElementById('div'));
    divQuestion.style.height='736px';
    divQuestion.style.padding='1%';
    divQuestion.innerHTML = "<h1>Votre Score est de : "+(reponsesCorrectes/10)*100+"%</h1>"; //afficher le score
    divQuestion.innerHTML += "<button onclick='AfficherReponses()'>Voir les réponses</button>"; //afficher les réponse si l'user clique sur le bouton
    nbQstPosees = 0;
    correct = 0;
    clearInterval(interval);
    return 0;
  }
  //sinon poser une question
  document.getElementById("divEtat").innerHTML = "<lable id='left'>Question : "+(nbQstPosees+1)+" / "+nbQuestions+"</lable><lable id='right'>Temps restant : "+mn+":"+sec+"<label>";
  j = Math.floor((Math.random() * (numQuestion.length)));
  divQuestion.innerHTML = "<h3>"+tabQuestions[numQuestion[j]][0]+"</h3>";
  divQuestion.innerHTML += "<div id='radioId'><input type='radio' name='radio' value='1' id='radioId1'><label id='radioLabel' for='radioId1'>"+tabQuestions[numQuestion[j]][1]+"</label></div>";
  divQuestion.innerHTML += "<div id='radioId'><input type='radio' name='radio' value='2' id='radioId2'><label id='radioLabel' for='radioId2'> "+tabQuestions[numQuestion[j]][2]+"</label></div>";
  divQuestion.innerHTML += "<div id='radioId'><input type='radio' name='radio' value='3' id='radioId3'><label id='radioLabel' for='radioId3'> "+tabQuestions[numQuestion[j]][3]+"</label></div>";
  divQuestion.innerHTML += "<div id='radioId'><input type='radio' name='radio' value='4' id='radioId4'><label id='radioLabel' for='radioId4'> "+tabQuestions[numQuestion[j]][4]+"</label></div>";
  divQuestion.innerHTML += "<button onclick='VerifierReponse()'>Question Suivante</button>"; //appeler la fonction de vérification de la réponse après le clique sur le bouton
}

//fonction pour vérifier
function VerifierReponse(){
  reponse = document.getElementsByName("radio");
  var i=0; var aucuneRep=true;
  while(i<reponse.length && aucuneRep){ //si reponse juste nbRepCorrectes++ et stocker la question et la réponse dans le fragment
    if(reponse[i].checked){
      if (reponse[i].value==tabQuestions[numQuestion[j]][5]){
          reponsesCorrectes++;
          var dt=document.createElement("dt");
          var txt=document.createTextNode(tabQuestions[numQuestion[j]][0]);
          dt.appendChild(txt);
          frag.appendChild(dt);
          var dd=document.createElement("dd");
          txt=document.createTextNode("La réponse correcte : "+tabQuestions[numQuestion[j]][parseInt(tabQuestions[numQuestion[j]][5])]);
          dd.appendChild(txt);
          frag.appendChild(dd);
      }
      else{ //cas réponse fausse
          var dt=document.createElement("dt");
          var txt=document.createTextNode(tabQuestions[numQuestion[j]][0]);
          dt.appendChild(txt);
          frag.appendChild(dt);
          var dd=document.createElement("dd");
          txt=document.createTextNode("Votre Réponse : "+tabQuestions[numQuestion[j]][parseInt(reponse[i].value)]+" La réponse correcte : "+tabQuestions[numQuestion[j]][parseInt(tabQuestions[numQuestion[j]][5])]);
          dd.appendChild(txt);
          frag.appendChild(dd);
      }
      aucuneRep=false;
    }
    i++;
  }
  if (aucuneRep==true) //cas aucune réponse
  {
      var dt=document.createElement("dt");
      var txt=document.createTextNode(tabQuestions[numQuestion[j]][0]);
      dt.appendChild(txt);
      frag.appendChild(dt);
      var dd=document.createElement("dd");
      txt=document.createTextNode("Votre Réponse : aucune Réponse La réponse correcte : "+tabQuestions[numQuestion[j]][parseInt(tabQuestions[numQuestion[j]][5])]);
      dd.appendChild(txt);
      frag.appendChild(dd);
  }
  numQuestion.splice(numQuestion.indexOf(numQuestion[j]),1);
  nbQstPosees++;
  poserQuestion();
}

//fonction pour afficher les réponses à la fin
function AfficherReponses(){
    document.getElementById("divQuestion").innerHTML ="<h2>Réponses : </h2>";
    document.getElementById("divQuestion").appendChild(frag);
}

//fonction appelé par setInterval pour le temps de quiz
function timer(){
  time-=1000;
  if(time==0)
  {
    document.getElementById('div').parentNode.removeChild(document.getElementById('div'));
    divQuestion.innerHTML = "<h1>Votre Score est de : "+(reponsesCorrectes/nbQuestions)*100+"%</h1>";
    divQuestion.innerHTML += "<button onclick='AfficherReponses()'>Voir les réponses</button>";
    nbQstPosees = 0;
    correct = 0;
    clearInterval(interval);
  }
  else
  {
    var mn = Math.floor(time/60000);
    var sec = ((time % 60000) / 1000).toFixed(0);
    document.getElementById("divEtat").innerHTML = "<lable id='left'>Question : "+(nbQstPosees+1)+" / "+nbQuestions+"</lable><lable id='right'>Temps restant : "+mn+":"+sec+"<label>";
  }
  
}
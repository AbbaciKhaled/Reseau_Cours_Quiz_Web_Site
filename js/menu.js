var smTab=['sm0','sm1','sm2','sm3','sm4','sm5'];
var first=true;
//fonction pour afficher un sous menu et cacher les autres
function afficherCacherSousMenu(numSM)
{        	
	
			for (var i = 0; i<6; i++) 
        		{
        			if (smTab[i]!=numSM)
        			{
        				if (smTab[i]!='sm0' && smTab[i]!='sm5')
        					document.getElementById(smTab[i]).style.display='none';
        					document.getElementById(smTab[i]).parentNode.style.backgroundColor='rgb(218,66,44)';
        			}
        		}
			if(document.getElementById(numSM).style.display=='none' || first)
        		{
        			if (numSM!='sm0' && numSM!='sm5')
        				document.getElementById(numSM).style.display='inline';
        			document.getElementById(numSM).parentNode.style.backgroundColor='black';
                                first=0;
        		}
        	       else
        		{                                            
        			if (numSM!='sm0' && numSM!='sm5')
        			{
        				document.getElementById(numSM).style.display='none';
        				document.getElementById(numSM).parentNode.style.backgroundColor='rgb(218,66,44)';
        			}
        			else
        			{
        				document.getElementById(numSM).parentNode.style.backgroundColor='black';
        			}
        		}

}
//fonction pour cacher un sous menu
function CacherSousMenu(numSM)
{        	
	    document.getElementById(numSM).style.display='none';
}
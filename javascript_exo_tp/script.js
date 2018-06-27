
//rafarichit la page
var refresh=false;
var etat="";

function reload()
{
	location.reload();
}

function supprimer()
{
   modifierEtat("SUPPRIMER");
   var button_supprimer=document.getElementById("button_supprimer").style.color="green";
   document.getElementById("button_modifier").style.color="red";
}

function modifierEtat(message)
{
	if(message=="ETAT")
	var affichage_etat=document.getElementById("etat").innerHTML=message+" UNDEFINED";
	if(message=="SUPPRIMER" || message=="MODIFIER")
	var affichage_etat=document.getElementById("etat").innerHTML="ETAT "+message;

}

function ajouter()
{
  
  console.log("ajouter clicked");

  modifierEtat("AJOUTER");
 var data= document.getElementById("textAjout").value;
  localStorage.setItem(getCle().toString(),data);
  data.value="";
  refresh=true;
  reload();

  



}

function modifier()
{
 	modifierEtat("MODIFIER");
 	var button_supprimer=document.getElementById("button_modifier").style.color="green";
 	document.getElementById("button_supprimer").style.color="red";
}

function affichage()
{
    
    
	var max=localStorage.getItem("cle");
	var max_int=parseInt(max);
	for(var i=1;i<max_int+1;i++)
	{

	var button=document.createElement("input");
	button.type="button";
	button.value=localStorage.getItem(i.toString());
	button.id=localStorage.getItem(i.toString());
	var affichage=document.getElementById("affichage");

/*
	var button_modifier=document.createElement("input");
	button_modifier.type="button";
	button_modifier.value="modifier";

	*/

	affichage.innerHTML+="<br>";
	affichage.appendChild(button);
	//affichage.appendChild(button_modifier);


	

	
	}





	/*for(var i=0;i>getCle();i++)
		document.getElementById('affichage').innerHTML+=res;
		
*/
	
	console.log("gjithju");
}

function initGestionCle()
{
	var nb_cle=localStorage.getItem("cle");
	var init=localStorage.getItem("init")

	if(init==null)
	{
		localStorage.setItem("cle","0");
		localStorage.setItem("init","ok");
		console.log("cle init")
	}
	else
	{
		console.log("cle deja init")
	}

}

function getCle()
{
	var cle=localStorage.getItem("cle");
	var new_cle=parseInt(cle);
	new_cle+=1;
	localStorage.removeItem("cle");
	localStorage.setItem("cle",new_cle.toString())
	return(new_cle)

}

function resetCle()
{
	/*
	localStorage.removeItem("init");
	localStorage.removeItem("cle");
	//var nb_cle=getCle();
	//for(var i=0;i<nb_cle;i++)
		removeItem()
	*/
	localStorage.clear();
}




initGestionCle();
modifierEtat("ETAT");
affichage();

//

//affichage()
//resetCle()


//affichage();
//alert("debut");
//document.getElementById('click1').onclick=function(){alert("jufugh")}
//alert("fin");
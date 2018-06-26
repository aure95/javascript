

function supprimer()
{
   
}

function ajouter()
{
  console.log("clicked");

  


}

function modifier()
{

}

function affichage()
{
	var res="<br>totototo</br>";
	for(var i=0;i>getCle();i++)
		document.getElementById('affichage').innerHTML+=res;
		

	
	console.log(res);
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
	localStorage.removeItem("init");
	localStorage.removeItem("cle");
}



initGestionCle()
getCle()
getCle()
getCle()
getCle()
affichage()
//resetCle()


//affichage();
//alert("debut");
//document.getElementById('click1').onclick=function(){alert("jufugh")}
//alert("fin");
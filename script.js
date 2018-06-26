function exo1()
{
	for(var i=0;i<500;i++)
		console.log("hola!")
}

exo2=function(){
	const lim=15000;


	for(var i=0;i<lim;i++)
		if(i%2!=0)
			console.log(i)

}

function exo3()
{
	for(i=0;i<11;i++)
		console.log(i*13)
}

function exo4()
{
	var mot=prompt("entrer un mot");
	alert("le mot est composé de :"+mot.length+"lettre");
}

function exo5()
{
	var mot=prompt("entrer nombre");

	var chiffre =parseInt(mot,10);
	console.log("toto")
	if(chiffre%2==0)
	{
		alert("nombre pair");
	}
	else
	{
		alert("nombre impair");
	}
}

function exo6()
{
	min = Math.ceil(0);
  max = Math.floor(20);
  var chiffre= Math.floor(Math.random() * (max - min +1)) + min;
	var fin =0
	
    while(fin!=1)
    {
    	var nombre=prompt("entrer un nombre entre 10 et 20");
    	nombre=parseInt(nombre);


    	if(nombre>chiffre)
    		alert("plus petit"+chiffre);
    	if(nombre<chiffre)
    		alert("+ grand"+chiffre);
    	if(nombre==chiffre)
    	{ 
    		alert(bravo);
    		fin=1;
    	}


    }

}

function exo7()
{
	
  var result="";

  var chiffre=prompt("ecrire chiffre");
  var chiff=parseInt(chiffre,10);
  console.log("result ="+result);
  console.log("chiffre ="+chiff);
  for(var i=1;i<11;i++)
  {
  	
    res=chiff+i;
    console.log(res);
  	result+=" "+res.toString();
  
  	//result+=(chiffre+i);
  }
 
  console.log(result);
  alert(result);

}

function exo8()
{
	var toto=prompt("entrer nombre")
	var variable=parseInt(toto);
	var res=""

	for(var i=0;i<11;i++)
		res+=" "+(variable*i).toString();

	alert(res)
}

function exo9()
{
	var toto=prompt("entrer nombre");
	var variable=parseInt(toto);
	var res=0;
	
	var fin=0;
	var i=1;
	

	while(fin!=1)
	{
		if(i==variable+1)
		{
			fin=1
		}
		else
		{
	        res+=i;
			i++;
		}
	}
	
	

	alert(res);

}   

function exo10()
{
	var toto=prompt("entrer age");
	var variable=parseInt(toto);
	var res="";

	if(variable>=6 && variable<=7)
		res="Poussin";
	if(variable>=8 && variable<=9)
		res="Pupille";
	if(variable>=10 && variable<=11)
		res="Minime";
	if(variable>12)
		res="Cadet";

	
	alert(res)
}


exo10();
/*
exo1();
exo2();
exo3();
exo4();
exo5();
exo6();
exo7();
exo8();
exo9();


*/
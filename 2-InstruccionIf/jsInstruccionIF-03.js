function mostrar()
{
	//tomo la edad  

	//Declaro variables
	var vEdad;
	
	//Asigno valor a las variables
	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	
	if ( vEdad >= 18 ){//Controlo si es mayor de edad
	
		alert("Usted es mayor de edad.");

	}else{

		alert("Usted es menor de edad.");

	}

}//FIN DE LA FUNCIÓN
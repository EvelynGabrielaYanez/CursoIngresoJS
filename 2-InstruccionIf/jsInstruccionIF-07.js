function mostrar()
{

	var vEdad;
	var vEstCivil;
	
	//Asigno valor a las variables
	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	vEstCivil = document.getElementById("estadoCivil").value;

	if (vEdad < 18 && vEstCivil != "Soltero"){

		alert("Es muy pequeño para NO ser soltero.");

	}


}//FIN DE LA FUNCIÓN
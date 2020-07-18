function mostrar()
{

		//Declaro variables
		var vEdad;
	
		//Asigno valor a las variables
		vEdad = parseInt(document.getElementById("txtIdEdad").value);

		if (vEdad < 15 || vEdad > 17){

			alert("Usted no es adolescente.");

		}

}//FIN DE LA FUNCIÓN
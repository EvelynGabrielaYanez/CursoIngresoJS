function mostrar()
{

	//Declaro variables
	var vEdad;
	
	//Asigno valor a las variables
	vEdad = parseInt(document.getElementById("txtIdEdad").value);

	if (vEdad >=18){

		alert("Usted es mayor de edad.");

	}else if(vEdad >=13){

		alert("Usted es adolescente.");

	}else{

		alert("Usted es un niño.");

	}

}//FIN DE LA FUNCIÓN
function mostrar()
{
	var vEdad;
	var vEstCivil;

	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	vEstCivil = document.getElementById("estadoCivil").value;

	if( vEdad>= 18 && vEstCivil == "Soltero" ){
		alert("Es soltero y no es menor.");
	}

}//FIN DE LA FUNCIÓN
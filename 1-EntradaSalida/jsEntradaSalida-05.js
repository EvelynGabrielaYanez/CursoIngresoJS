/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var vNombreIngresado = document.getElementById("txtIdNombre").value;
	var vEdadIngresada = document.getElementById("txtIdEdad").value;
	alert("Usted se llama " + vNombreIngresado + " y tiene " + vEdadIngresada + " años" );	

	// por plantilla de cadenas
	/*alert(`Usted se llama ${vNombreIngresado} y tiene ${vEdadIngresada}`);*/
}


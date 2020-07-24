function mostrar()
{
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado){
	
		case "Mar del plata":
		case "Cataratas":
			alert("CALOR");
		break;
		case "Bariloche":
		case "Ushuaia":
			alert("FRIO");
		break;
	}

}//FIN DE LA FUNCIÓN
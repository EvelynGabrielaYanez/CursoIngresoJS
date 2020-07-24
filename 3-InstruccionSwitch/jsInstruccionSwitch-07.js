function mostrar()
{
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado){
	
		case "Bariloche":
			alert("Sur");
		break;
		case "Cataratas":
			alert("Norte");
		break;
		case "Mar del plata":
			alert("Oeste");
		break;
		case "Ushuaia":
			alert("Sur");
		break;
	}

}//FIN DE LA FUNCIÓN
function mostrar()
{

	let vEstacion = document.getElementById("txtIdEstacion").value;
	let vDestino = document.getElementById("txtIdDestino").value;
	let vPrecioFinal;
	const cEstadia = 15000;

	switch(true){
		case ( !(vEstacion == "Invierno" && vDestino == "Bariloche")):
		case (vEstacion == "Verano" && (vDestino == "Bariloche" || vDestino == "Mar del plata")):
		case (vEstacion == "Otoño"):
		case (vEstacion == "Primavera" && vDestino == "Bariloche"):

			alert("Se viaja");

		break;
		default:

			alert("No se viaja");

		break;

	}

}//FIN DE LA FUNCIÓN
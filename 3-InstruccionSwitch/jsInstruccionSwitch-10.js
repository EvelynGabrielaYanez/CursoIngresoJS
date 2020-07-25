function mostrar()
{

	let vEstacion = document.getElementById("txtIdEstacion").value;
	let vDestino = document.getElementById("txtIdDestino").value;
	let vPrecioFinal;
	const cEstadia = 15000;

	switch(vEstacion){
		case "Invierno":

			switch(vDestino){

				case "Bariloche":

					alert("Se viaja");

				break;
				default:
					
					alert("No se viaja");	

				break;
			}

		break;
		case "Verano":

			switch(vDestino){

				case "Cataratas":
				case "Mar del plata":

					alert("Se viaja");

				break;
				default:
					
					alert("No se viaja");	

				break;
			}			

		break;
		case "Otoño":

			alert("Se viaja");			

		break;
		case "Primavera":

			switch(vDestino){

				case "Bariloche":

					alert("No se viaja");	

				break;
				default:
					
					alert("Se viaja");

				break;
			}	
				

		break;

	}








	/*
	switch(true){
		case ( !(vEstacion == "Invierno" && vDestino == "Bariloche")):
		case (vEstacion == "Verano" && (vDestino == "Cataratas" || vDestino == "Mar del plata")):
		case (vEstacion == "Otoño"):
		case (vEstacion == "Primavera" && vDestino == "Bariloche"):

			alert("Se viaja");

		break;
		default:

			alert("No se viaja");

		break;

	}*/

}//FIN DE LA FUNCIÓN
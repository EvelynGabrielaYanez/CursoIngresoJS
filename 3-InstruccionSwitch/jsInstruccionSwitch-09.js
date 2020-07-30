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

				vPrecioFinal = cEstadia * (1 + 20/100);

			break;
			case "Mar del plata":

				vPrecioFinal = cEstadia * (1 - 20/100);

			break;
			default:

				vPrecioFinal = cEstadia * (1 - 10/100);

			break;
		}

	break;
	case "Verano":

		switch(vDestino){
			case "Bariloche":

				vPrecioFinal = cEstadia * (1 - 20/100);

			break;
			case "Mar del plata":

				vPrecioFinal = cEstadia * (1 + 20/100);

			break;
			default:

				vPrecioFinal = cEstadia * (1 + 10/100);

			break;
		}

	break;
	case "Otoño":
	case "Primavera":
		
		switch(vDestino){
			case "Cordoba":

				vPrecioFinal = cEstadia;

			break;
			default:

				vPrecioFinal = cEstadia * (1 + 10/100);

			break;
		}

	break;

}

	alert("Precio final a pagar: " + vPrecioFinal);

}//FIN DE LA FUNCIÓN
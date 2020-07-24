function mostrar()
{
	let vEstacion = document.getElementById("txtIdEstacion").value;
	let vDestino = document.getElementById("txtIdDestino").value;
	let vPrecioFinal;
	const cEstadia = 15000;
	
	switch(true){	
		case (vEstacion == "Invierno" && vDestino == "Bariloche" ):
			vPrecioFinal = cEstadia * (1 + 20/100);
		break;
		case (vEstacion == "Invierno" && (vDestino == "Cordoba" ||  vDestino == "Cataratas"  )):
			vPrecioFinal = cEstadia * (1 - 10/100);
		break;
		case (vEstacion == "Invierno" && vDestino == "Mar del plata" ):
			vPrecioFinal = cEstadia * (1 - 20/100);
		break;	
		case (vEstacion == "Verano" && vDestino == "Bariloche" ):
			vPrecioFinal = cEstadia * (1 - 20/100);
		break;
		case (vEstacion == "Verano" && (vDestino == "Cordoba" ||  vDestino == "Cataratas"  )):
			vPrecioFinal = cEstadia * (1 + 10/100);
		break;
		case (vEstacion == "Verano" && vDestino == "Mar del plata" ):
			vPrecioFinal = cEstadia * (1 + 20/100);
		break;			
		case ((vEstacion == "Otoño" || vEstacion == "Primavera" )  && vDestino == "Cordoba" ):
			vPrecioFinal = cEstadia;
		break;		
		default:
			vPrecioFinal = cEstadia * (1 + 10/100);
		break;
	}


	/// otra forma  es mas corta pero menos clara a la vista

/*
	switch(true){	
		case (vEstacion == "Invierno" && vDestino == "Bariloche" ):
		case (vEstacion == "Verano" && vDestino == "Mar del plata" ):
			vPrecioFinal = cEstadia * (1 + 20/100);
		break;
		case (vEstacion == "Invierno" && (vDestino == "Cordoba" ||  vDestino == "Cataratas"  )):
			vPrecioFinal = cEstadia * (1 - 10/100);
		break;
		case (vEstacion == "Invierno" && vDestino == "Mar del plata" ):
		case (vEstacion == "Verano" && vDestino == "Bariloche" ):
			vPrecioFinal = cEstadia * (1 - 20/100);
		break;	
		case ((vEstacion == "Otoño" || vEstacion == "Primavera" )  && vDestino == "Cordoba" ):
			vPrecioFinal = cEstadia;
		break;		
		default:
			vPrecioFinal = cEstadia * (1 + 10/100);
		break;
	}

	*/

	alert("Precio final a pagar: " + vPrecioFinal);

}//FIN DE LA FUNCIÓN
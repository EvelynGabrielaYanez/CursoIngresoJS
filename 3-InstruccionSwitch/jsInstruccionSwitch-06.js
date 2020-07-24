function mostrar()
{
	//tomo la hora
	var vHoraDelDia = parseint(document.getElementById("txtIdHora").value);
	// Se puede hacer así pero no tiene sentido escribir tantos casos

	/*
	switch(vHoraDelDia){

		case 7:
		case 8:	
		case 9:
		case 10:				
		case 11:

			alert("Es de mañana");

		break;
		case 12:
		case 13:	
		case 14:
		case 15:				
		case 16:
		case 17:
		case 18:	
		case 19:

			alert("Es de tarde");

		break;
		case 20:
		case 21:
		case 22:	
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:	
		case 3:
		case 4:
		case 5:
		case 6:

			alert("Es de noche");

		break;
		default: 

			alert("La hora ya no existe");

		break;
	}
		*/

		switch(true){

			case ( vHoraDelDia >=7 && vHora<=11):
	
				alert("Es de mañana");
	
			break;
			case ( vHoraDelDia >=12 && vHora<=19):
	
				alert("Es de tarde");
	
			break;
			case (( vHoraDelDia >=20 && vHora<=24) || (vHoraDelDia >=0 && vHora<=6)):

				alert("Es de noche");
	
			break;
			default: 
	
				alert("La hora ya no existe");
	
			break;

		}

		// Modo corto

}//FIN DE LA FUNCIÓN
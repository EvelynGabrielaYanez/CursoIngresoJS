/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let vBanderaDelPrimero;
	let vNumeroIngresado;
	let vNumeroMaximo;
	let vNumeroMinimo;
	let vRespuesta;
	//iniciar variables
	vBanderaDelPrimero="es el primero";

	do{
		
		vNumeroIngresado = prompt("Ingrese un número");		//Pido el ingreso del número.
		vNumeroIngresado = parseFloat(vNumeroIngresado);
		
		if(vBanderaDelPrimero == "es el primero"){		//Si es el primer número ingresado.

			//Como es el primero obligatoriamente es el máximo y el mínimo de los ingresados.
			vNumeroMaximo = vNumeroIngresado;
			vNumeroMinimo = vNumeroIngresado; 

			vBanderaDelPrimero = "";		//Bajo la bandera del primer número ingresado.

		}else{		//Si NO es el primer número ingresado.

			//Calculo en máximo y mínimo entre el nuevo número y el max o min anterior.
			vNumeroMaximo = Math.max(vNumeroIngresado,vNumeroMaximo);
			vNumeroMinimo = Math.min(vNumeroIngresado,vNumeroMinimo); 			

		}

		vRespuesta=prompt("¿Desea continuar?(si/no)");		//Pregunto si quiere ingresar otro número.

	}while(vRespuesta == "si")

	document.getElementById("txtIdMaximo").value=vNumeroMaximo;			//Devuelvo máximo por pantalla.

	document.getElementById("txtIdMinimo").value=vNumeroMinimo;		//Devuelvo mínimo por pantalla.


}//FIN DE LA FUNCIÓN
/*
function mostrar()
{	// declarar variables
	let vBanderaDelPrimero;
	let vNumeroIngresado;
	let vNumeroMaximo;
	let vNumeroMinimo;
	let vRespuesta;
	//iniciar variables
	vBanderaDelPrimero="es el primero";
	vRespuesta='si';

	while(vRespuesta == "si")
	{
		
		vNumeroIngresado = prompt("Ingrese un número");		//Pido el ingreso del número.
		vNumeroIngresado = parseFloat(vNumeroIngresado);
		
		if(vBanderaDelPrimero == "es el primero"){		//Si es el primer número ingresado.

			//Como es el primero obligatoriamente es el máximo y el mínimo de los ingresados.
			vNumeroMaximo = vNumeroIngresado;
			vNumeroMinimo = vNumeroIngresado; 

			vBanderaDelPrimero = "";		//Bajo la bandera del primer número ingresado.

		}else{		//Si NO es el primer número ingresado.

			//Calculo en máximo y mínimo entre el nuevo número y el max o min anterior.
			vNumeroMaximo = Math.max(vNumeroIngresado,vNumeroMaximo);
			vNumeroMinimo = Math.min(vNumeroIngresado,vNumeroMinimo); 			

		}

		vRespuesta=prompt("¿Desea continuar?(si/no)");		//Pregunto si quiere ingresar otro número.

	}

	document.getElementById("txtIdMaximo").value=vNumeroMaximo;			//Devuelvo máximo por pantalla.

	document.getElementById("txtIdMinimo").value=vNumeroMinimo;		//Devuelvo mínimo por pantalla.


}//FIN DE LA FUNCIÓN
*/
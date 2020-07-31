/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/function mostrar()
{
	// declaro variables
	let vContador;
	let vAcumulador;
	let vNumeroIngresado;
	let vRespuesta;

	// Inicializo variables
	vContador=0;
	vAcumulador=0;
	
	do{

		vContador ++;

		vNumeroIngresado = prompt("Ingrese un número");

		vAcumulador += parseFloat(vNumeroIngresado);

		vRespuesta =  prompt("¿Desea ingresar otro número? (si/no)");
		
	}while(vRespuesta == "si")

	document.getElementById("txtIdSuma").value = vAcumulador;

	document.getElementById("txtIdPromedio").value = vAcumulador/vContador;

}//FIN DE LA FUNCIÓN


/*function mostrar()
{
	// declaro variables
	let vContador;
	let vAcumulador;
	let vNumeroIngresado;
	let vRespuesta;

	// Inicializo variables
	vContador=0;
	vAcumulador=0;
	vRespuesta = "si";
	
	while(vRespuesta == "si"){

		vContador ++;

		vNumeroIngresado = prompt("Ingrese un número");

		vAcumulador += parseFloat(vNumeroIngresado);

		vRespuesta =  prompt("¿Desea ingresar otro número? (si/no)");
		
	}

	document.getElementById("txtIdSuma").value = vAcumulador;

	document.getElementById("txtIdPromedio").value = vAcumulador/vContador;

}
//FIN DE LA FUNCIÓN*/

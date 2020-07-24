/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let vRespuesta;
	let vSumaPositivos;
	let vMultiplicacionNegativos;
	let vNumeroIngresado;
	vSumaPositivos=0;
	vMultiplicacionNegativos=1;
	vRespuesta= "si";

	while(vRespuesta == "si"){


		vNumeroIngresado = prompt("Ingrese un número");
		vNumeroIngresado = parseFloat(vNumeroIngresado);

		if(vNumeroIngresado >=0 ){

			vSumaPositivos += vNumeroIngresado;

		}
		else{

			vMultiplicacionNegativos *= vNumeroIngresado;

		}

		vRespuesta =  prompt("¿Desea ingresar otro número? (si/no)");
		
		
	}

	document.getElementById("txtIdSuma").value = vSumaPositivos;

	document.getElementById("txtIdProducto").value = vMultiplicacionNegativos;

}
//FIN DE LA FUNCIÓN
/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);

}//FIN DE LA FUNCIÓN


function mostrar()
{
	let vRespuesta = "si";
	let vSumaPositivos = 0;
	let vSumaNegativos = 0;
	let vPromedioPosit = 0;
	let vPromedioNegat = 0;
	let vCantPositivos = 0;
	let vCantNegativos = 0;
	let vCantPares = 0;
	let vCantCeros = 0;
	let vNumeroIngresado;

	while(vRespuesta == "si"){


		vNumeroIngresado = prompt("Ingrese un número");
		vNumeroIngresado = parseFloat(vNumeroIngresado);

		if(vNumeroIngresado > 0 ){

			vSumaPositivos += vNumeroIngresado; 		//Sumo el número ingresado a la suma total de positivos;

			vCantPositivos++;  //Incremento en uno la cantidad de positivos ingresados


		}else if(vNumeroIngresado < 0){

			vCantNegativos++;  //Incremento en uno la cantidad de positivos ingresados 

			vSumaNegativos += vNumeroIngresado;

		}
		else{

			vCantCeros++;

		}

		if( vNumeroIngresado%2 == 0){ //Si el número es par

			vCantPares++;

		}

		vRespuesta =  prompt("¿Desea ingresar otro número? (si/no)");
	
	}

	// Calculo de los promedios (positivos y negativos)
	if (vCantNegativos == 0){

		vPromedioNegat = 0;	

	}else{

		vPromedioNegat = vSumaNegativos/vCantNegativos;

	}
	if(vCantPositivos == 0){

		vPromedioPosit = 0;

	}else{

		vPromedioPosit = vSumaPositivos/vCantPositivos;
	}

	
	alert("1-Suma de los negativos = " +  vSumaNegativos + 
	"\n2-Suma de los positivo = " + vSumaPositivos  + 
	"\n3-Cantidad de positivos = " + vCantPositivos + 
	"\n4-Cantidad de negativos " + vCantNegativos + 
	"\n5-Cantidad de ceros = " + vCantCeros + 
	"\n6-Cantidad de números pares = " + vCantPares + 
	"\n7-Promedio de positivos = " + vPromedioPosit + 
	"\n8-Promedios de negativos = " + vPromedioNegat + 
	"\n9-Diferencia entre suma de los positivos y negativos = " + (vSumaPositivos - vSumaNegativos) + 
	"\n10-Diferencia entre cantidad positivos y negativos = " + (vCantPositivos - vCantNegativos)	+ 
	"\n11-Diferencia entre promedio de positivos y negativos = " + (vPromedioPosit - vPromedioNegat));

}
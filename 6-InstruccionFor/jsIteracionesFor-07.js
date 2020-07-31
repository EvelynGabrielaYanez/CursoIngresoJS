function mostrar()
{


	let vNroFinal = prompt("Ingrese un número.");
	let vCadenaDivisores = "";
	let vCantDivisores = 1 ;

	vNroFinal = parseInt(vNroFinal);

	for(let i = 1 ;  i < vNroFinal ; i++ ){

		if( vNroFinal%i == 0 ){

			vCadenaDivisores =  vCadenaDivisores + i  + ", "  ; 
			vCantDivisores++;
		}

	}

	if(vNroFinal>1)
	alert ("Se encontraron " + vCantDivisores + " divisores de " + vNroFinal  + ". \n Estos son: " + vCadenaDivisores + vNroFinal);
	else{
	alert ("Se encontró " + vCantDivisores + " divisor de " + vNroFinal  + ". \n Este es: " + vCadenaDivisores + vNroFinal);		
	}



}//FIN DE LA FUNCIÓN
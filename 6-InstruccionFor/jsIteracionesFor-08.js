function mostrar()
{
	let vCantDivisores = 1 ;
	let vNroFinal = prompt("Ingrese un número.");
	vNroFinal = parseInt(vNroFinal);

	for(let i = 1 ;  i < vNroFinal ; i++ ){

		if( vNroFinal%i == 0 ){
			vCantDivisores++;
		}

	}

	if(vCantDivisores==2)
	alert (vNroFinal + " es primo.");
	else{
	alert (vNroFinal + " no es primo.");		
	}


}//FIN DE LA FUNCIÓN
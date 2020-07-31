function mostrar()
{

	let vNroFinal = prompt("Ingrese un número.");
	let vCadenaPares = "";
	let vCantPares = 1 ;

	vNroFinal = parseInt(vNroFinal);

	for(let i = vNroFinal ;  i > 2 ; i-- ){

		if( i%2 == 0 ){

			vCadenaPares = ", " + i  + vCadenaPares  ; 
			vCantPares ++;
		}

	}

	if(vNroFinal>1){
	alert ("Se encontraron " + vCantPares + " números pares entre 1 y " + vNroFinal + ". \n Estos son: 2 " + vCadenaPares);
	}else{
	alert("No hay números pares.")
	}

}//FIN DE LA FUNCIÓN
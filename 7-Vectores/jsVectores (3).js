function mostrar()
{

	let vVector = new Array;
	let vCantElementos;
	let vCadenaMostrar = "V = (";

	vCantElementos = parseInt(prompt("¿Cúantos elementos desea que tenga su vector?"));


	for(let i = 1; i <= vCantElementos ; i++ ){

		vVector[i] = parseInt(prompt("Ingrese el elemento " + i + " del vector."));

		if(i < vCantElementos){

			vCadenaMostrar += vVector[i] + ";"; 

		}else{

			vCadenaMostrar  += vVector[i] + ")"; 

		}

	}

	document.write(vCadenaMostrar);


}//FIN DE LA FUNCIÓN
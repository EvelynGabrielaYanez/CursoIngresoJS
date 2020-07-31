function mostrar()
{
	let vVector = new Array;
	let vCadenaMostrar = "Llamamos <strong>V</strong> al vector que creaste.<br/>V = (";
	let vCantElementos = 0;
	let vSumaElementos = 0;

	vCantElementos = parseInt(prompt("¿Cúantos elementos desea que tenga su vector?"));


	for(let i = 1; i <= vCantElementos ; i++ ){

		vVector[i] = parseInt(prompt("Ingrese el elemento " + i + " del vector."));

		vSumaElementos += vVector[i];

		if(i < vCantElementos){

			vCadenaMostrar += vVector[i] + ";"; 

		}else{

			vCadenaMostrar  += vVector[i] + ")"; 

		}

	}

document.write(vCadenaMostrar + "<br/>La <strong>suma</strong> de todos los elementos de tu vector es: <strong>" + vSumaElementos + "</strong>");

}//FIN DE LA FUNCIÓN
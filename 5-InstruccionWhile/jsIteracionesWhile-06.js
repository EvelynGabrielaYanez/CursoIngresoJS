function mostrar()
{
	let vContador;
	let vAcumulador;
	let vNumeroIngresado;

	vContador=0;
	vAcumulador=0;
	
	while(vContador < 5){

		vContador ++;

		vNumeroIngresado = prompt("Ingrese un número ("  + vContador + " de 5)");

		vAcumulador += parseFloat(vNumeroIngresado);
		
	}

	document.getElementById("txtIdSuma").value = vAcumulador;

	document.getElementById("txtIdPromedio").value = vAcumulador/5;

}//FIN DE LA FUNCIÓN
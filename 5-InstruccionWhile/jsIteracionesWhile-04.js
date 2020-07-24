/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let vNumeroIngresado;
	vNumeroIngresado = prompt("ingrese un número entre 0 y 9.");
	vNumeroIngresado = parseInt(vNumeroIngresado);
	while(vNumeroIngresado>9)
	{

		alert("Igresaste un número incorrecto.");
		vNumeroIngresado = prompt("ingrese un número entre 0 y 9.");		
		vNumeroIngresado = parseInt(vNumeroIngresado);
	}

	document.getElementById("txtIdNumero").value =  vNumeroIngresado ;
	
}//FIN DE LA FUNCIÓN
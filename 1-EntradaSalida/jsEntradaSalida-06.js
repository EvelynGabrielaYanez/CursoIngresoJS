/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var vNumeroUno;
	var vNumeroDos;
	vNumeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNumeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	alert("La suma es " + (vNumeroUno + vNumeroDos));
}


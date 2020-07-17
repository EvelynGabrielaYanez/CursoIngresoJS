/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var vNumeroUno;
	var vNumeroDos;
	vNumeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNumeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("La suma es " + (vNumeroUno + vNumeroDos));	
}

function restar()
{
	var vNumeroUno;
	var vNumeroDos;
	vNumeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNumeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("La resta es " + (vNumeroUno - vNumeroDos));	
	
}

function multiplicar()
{ 
	var vNumeroUno;
	var vNumeroDos;
	vNumeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNumeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("El producto es " + (vNumeroUno * vNumeroDos));	
	
}

function dividir()
{
	var vNumeroUno;
	var vNumeroDos;
	vNumeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNumeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("La división es " + (vNumeroUno / vNumeroDos));	
	
}


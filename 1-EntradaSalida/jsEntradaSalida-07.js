/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let vNumeroUno;
	let vNumeroDos;
	vNumeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNumeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("La suma es " + (vNumeroUno + vNumeroDos));	
}

function restar()
{
	let vNumeroUno;
	let vNumeroDos;
	vNumeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNumeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("La resta es " + (vNumeroUno - vNumeroDos));	
	
}

function multiplicar()
{ 
	let vNumeroUno;
	let vNumeroDos;
	vNumeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNumeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("El producto es " + (vNumeroUno * vNumeroDos));	
	
}

function dividir()
{
	let vNumeroUno;
	let vNumeroDos;
	vNumeroUno = parseFloat(document.getElementById("txtIdNumeroUno").value);
	vNumeroDos = parseFloat(document.getElementById("txtIdNumeroDos").value);
	alert("La división es " + (vNumeroUno / vNumeroDos).toFixed(2));	
	
}


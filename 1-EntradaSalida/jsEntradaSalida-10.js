/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var vSueldo;
	
	vSueldo = parseInt(document.getElementById("txtIdImporte").value);

	vSueldo = vSueldo - vSueldo*25/100;

	document.getElementById("txtIdResultado").value = vSueldo;
}

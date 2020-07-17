/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	// Declaro variables
	var vSueldo;
	
	vSueldo = parseInt(document.getElementById("txtIdSueldo").value);

	vSueldo = vSueldo + vSueldo*10/100;

	document.getElementById("txtIdResultado").value = vSueldo;

}

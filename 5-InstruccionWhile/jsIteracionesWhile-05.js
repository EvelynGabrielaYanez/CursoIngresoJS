/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let vSexoIngresado;
	vSexoIngresado = prompt("ingrese f ó m .");

	while(vSexoIngresado != "f" && vSexoIngresado != "m")
	{
		alert("Sexo incorrecto.");
		vSexoIngresado = prompt("ingrese f ó m .");	
	}

	if(vSexoIngresado == "f"){

		document.getElementById("txtIdSexo").value = "Femenino";

	}
	else{

		document.getElementById("txtIdSexo").value = "Masculino";
	}



}
//FIN DE LA FUNCIÓN
function mostrar()
{
	//tomo el mes
	let mesDelAño =document.getElementById("txtIdMes").value;
	
	switch(mesDelAño){
		case "Abril":
		case "Junio":	
		case "Septiembre":
		case "Noviembre":

			alert(mesDelAño + " tiene 30 días.");
			
		break;
		case "Febrero":			
		
		alert(mesDelAño + " tiene 28 días.");			

		break;
		default:		
		
		alert(mesDelAño + " tiene 31 días.");			

		break;
	}
	


}//FIN DE LA FUNCIÓN
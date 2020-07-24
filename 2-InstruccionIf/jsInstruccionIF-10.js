function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var vNotaRan;
	vNotaRan = Math.round(Math.random() * (10-1) + 1);
	
	if( vNotaRan >=9 ){
		alert(vNotaRan + " EXCELENTE");
	} else if( vNotaRan >= 4 ){
		alert(vNotaRan + " APROBÓ");		
	} else{
		alert(vNotaRan + " Vamos, la proxima se puede");			
	}

}//FIN DE LA FUNCIÓN
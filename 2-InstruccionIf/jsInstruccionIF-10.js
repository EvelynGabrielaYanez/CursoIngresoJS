function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var vNotaRan;
	vNotaRan = Math.floor(Math.random() * 11) + 1;
	
	if( vNotaRan >=9 ){
		alert("EXCELENTE");
	} else if( vNotaRan >= 4 ){
		alert("APROBÓ");		
	} else{
		alert("Vamos, la proxima se puede");			
	}

}//FIN DE LA FUNCIÓN
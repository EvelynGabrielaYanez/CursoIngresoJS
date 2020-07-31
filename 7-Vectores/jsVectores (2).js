function mostrar()
{
	let vVector = new Array();
	let vContenidoVector = "";

	vVector[0]="Juan";
	vVector[1]="Luis";
	vVector[2]="Maria";
	vVector[3]="Nahuel";
	vVector[4]="Yolanda";

	for(let i=0; i<5; i++){

		vContenidoVector  = vContenidoVector +  "\nPosición " + i + "-->" +  vVector[i] ;
		
	}

alert("El contenido del vector es:" + vContenidoVector);


}//FIN DE LA FUNCIÓN
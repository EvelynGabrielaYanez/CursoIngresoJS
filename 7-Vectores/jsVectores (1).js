function mostrar()
{

	let vVector = new Array();
	let vContenidoVector = "";

	vVector[0]=5;
	vVector[1]=74;
	vVector[2]=8;
	vVector[3]=94;
	vVector[4]=5;
	vVector[5]=0;
	vVector[6]=80;
	vVector[7]=789;
	vVector[8]=5;
	vVector[9]=7;

	for(let i=0; i<10; i++)
	{
		vContenidoVector  = vContenidoVector +  "\nPosición " + i + "-->" +  vVector[i] ;
	}

alert("El contenido del vector es:" + vContenidoVector);

}//FIN DE LA FUNCIÓN
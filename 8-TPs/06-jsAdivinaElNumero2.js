/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var vNumSecreto; 
var vCantIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100

    vNumSecreto = Math.round(Math.random() * 99 + 1);
    vCantIntentos = 0;
    document.getElementById("txtIdIntentos").value = vCantIntentos ;	 
	

}

function verificar()
{
	  // Declaro variables
	  let vNumIngresado;
	  // Asigno valor a las variables.
	  vNumIngresado = parseInt(document.getElementById("txtIdNumero").value);
	
	  //Sumo uno a los intentos
	  vCantIntentos = vCantIntentos  + 1;
	 
	  document.getElementById("txtIdIntentos").value = vCantIntentos ;


	  if( vNumIngresado == vNumSecreto){
	
		switch(vCantIntentos){
			case 1:
			
				alert("Usted es un Psíquico. \n Ganó en " + vCantIntentos + " inteto.");

			break;
			case 2:

				alert("Excelente percepción \n Ganó en " + vCantIntentos + " intetos.");

			break;
			case 3:

				alert("Esto es suerte \n Ganó en " + vCantIntentos + " intetos.");

			break;
			case 4:

				alert("Excelente técnica \n Ganó en " + vCantIntentos + " intetos.");

			break;

			case 5:

				alert("Usted está en la media \n Ganó en " + vCantIntentos + " intetos.");

			break;
			default:
				if(vCantIntentos<=10){

					alert("Falta técnica \n Ganó en " + vCantIntentos + " intetos.");

				}
				else{

					alert("Afortunado en el amor!! \n Ganó en " + vCantIntentos + " intetos.");

				}
			break;

		}

	}else if( vNumIngresado < vNumSecreto){

	    alert("falta…");

  	}else{

	    alert("se pasó…");

  	}
	
	

}
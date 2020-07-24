/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
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

    alert("Usted es un ganador!!! y en solo " + vCantIntentos + " intentos");

  }else if( vNumIngresado < vNumSecreto){

    alert("falta…");

  }else{

    alert("se pasó…");

  }



}
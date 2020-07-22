/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let vLargo;
    let vAncho;

    vLargo = parseFloat(document.getElementById("txtIdLargo").value);
    vAncho = parseFloat(document.getElementById("txtIdAncho").value); 

    alert("Se necesitan " + ( 3*2*(vLargo+vAncho)) + "mts de alambre.");

}
function Circulo () 
{
    let vRadio;
    
    vRadio = parseFloat(document.getElementById("txtIdRadio").value);

    alert("Se necesitan " + ( 2*vRadio*Math.PI).toFixed(2) + "mts de alambre.");   

}
function Materiales () 
{
    let vLargo;
    let vAncho;

    vLargo = parseFloat(document.getElementById("txtIdLargo").value);
    vAncho = parseFloat(document.getElementById("txtIdAncho").value); 

    alert("Se necesitan " + ( 2*(vLargo*vAncho)) + " bolsas de cemento y " + ( 3*(vLargo*vAncho)) + " de alambre.");   

}
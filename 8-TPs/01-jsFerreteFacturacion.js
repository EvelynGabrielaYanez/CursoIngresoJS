/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

    let vPrecio1;
    let vPrecio2;
    let vPrecio3;  
    
    vPrecio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    vPrecio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    vPrecio3 = parseFloat(document.getElementById("txtIdPrecioTres").value); 
    
    alert(" La suma de los precios es de " + (vPrecio1 + vPrecio2 + vPrecio3));
}
function Promedio () 
{
    let vPrecio1;
    let vPrecio2;
    let vPrecio3;  
    
    vPrecio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    vPrecio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    vPrecio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);   
    
    alert("El promedio es de " + ((vPrecio1 + vPrecio2 + vPrecio3) /3).toFixed(2));  

}
function PrecioFinal () 
{
    let vPrecio1;
    let vPrecio2;
    let vPrecio3;  
    
    vPrecio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    vPrecio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    vPrecio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);   
    
    alert("El promedio es de " + ((vPrecio1 + vPrecio2 + vPrecio3) +  (vPrecio1 + vPrecio2 + vPrecio3) *21/100));  

}
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var vTempFaran;
    var vTempCent;
    
    vTempFaran = parseFloat(document.getElementById("txtIdTemperatura").value);
    vTempCent = (vTempFaran-32)*5/9;

    alert(vTempFaran + " Fahrenheit son " + vTempCent.toFixed(3)  + " centígrados.");

}

function CentigradosFahrenheit () 
{
    var vTempFaran;
    var vTempCent;
    
    vTempCent = parseFloat(document.getElementById("txtIdTemperatura").value);
    vTempFaran = vTempCent*9/5 + 32;

    alert(vTempCent + " centígrados son " + vTempFaran.toFixed(3)  + " Fahrenheit.");
	
}

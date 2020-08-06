function mostrar() {
	let vNombre;
	let vEdad;
	let vSexo;
	let vEstadoCivil;
	let vTempCorp;
	let vRespuesta;
	let vMaxTempCorp = 0; ///Inicializo en 0 el máximo pues se que un ser humano puede tener una temperatura corporal negativa (al menos no uno con vida)
	let vPersonaMaxTemp;
	let vContadorMayorViudo = 0;
	let vContHomSoltViud = 0;
	let vCantTerceraEdad;
	let vCantHSolteros;
	let vSumaEdadHSolteros;
	let vPromedioEdadHSolt;

	do {

		vNombre = prompt("Ingrese el nombre del pasarjero.");

		do {
			vEdad = parseInt(prompt("Ingrese la edad del pasajero."));
		} while (vEdad <= 0)
		do {
			vSexo = prompt("Ingresar sexo(f/m)");
		} while (vSexo != "f" && vSexo != "m")
		do {
			vEstadoCivil = prompt("Ingresar estado civil(casado/viudo)");
		} while (vEstadoCivil != "casado" && vEstadoCivil != "viudo")
		vTempCorp = parseInt(prompt("Ingrese la temperatura corporal."));

		if (vMaxTempCorp < vTempCorp) {

			vMaxTempCorp = vTempCorp;

			vPersonaMaxTemp = vNombre;

		}

		if (vEdad >= 18 && vEstadoCivil == "viudo") {
			vContadorMayorViudo++;
		}

		if (vSexo == "m" && (vEstadoCivil == "viudo" || vEstadoCivil == "soltero")) {
			vContHomSoltViud++;
		}

		if (vEstadoCivil > 60 && vTempCorp > 38) {
			vCantTerceraEdad++;
		}

		if (vSexo == "m" && vEstadoCivil == "soltero") {

			vCantHSolteros++;
			vSumaEdadHSolteros += vEdad;

		}

		vRespuesta = prompt("¿Desea ingresar otro pasajero?");


	} while (vRespuesta == "si")

	if (vCantHSolteros == 0) {
		vPromedioEdadHSolt = "No hay hombres solteros";
	} else {
		vPromedioEdadHSolt = (vSumaEdadHSolteros / vCantHSolteros).toFixed();
	}



	alert("a)La persona con mas temperatura es: " + vPersonaMaxTemp + ".\nb)Hay " + vContadorMayorViudo + " mayores viudos.\nc)La cantidad de hombres solteros y viudos es : " + vContHomSoltViud +
		".\nd)La cantidad de personas de la tercera edad con temperatura mayor a 38º es: " + vCantTerceraEdad + ".\ne)El promedio de edad entre los hombres solteros es: " + vPromedioEdadHSolt + ".");

}

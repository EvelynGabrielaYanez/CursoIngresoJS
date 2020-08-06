
function mostrar() {
	let vTipo;
	let vPrecio = 0;
	let vCantProd = 0;
	let vMarca = "";
	let vFabricante = "";
	const cCant_A_Ingresar = 5;
	let vMinAlcohol = 0;
	let vCantAlcholBarato = 0;
	let vFabriAlcholBarato ;
	let vMaxUnidades = 0;
	let vTipoMaxUnidades;
	let vPromPorCompra = 0;
	let vCantTotalJAbones = 0;


	for (let i = 1; i <= cCant_A_Ingresar; i++) {

		vTipo = prompt("Ingrese el tipo de producto.(barbijo/jabón/alcohol)");
		while (vTipo != "barbijo" && vTipo != "jabón" && vTipo != "alcohol") {

			alert("Producto ingrese el tipo de producto. (barbijo/jabón/alcohol)");
			vTipo = prompt("Ingrese el tipo de producto.(barbijo/jabón/alcohol)");

		}

		vPrecio = prompt("Ingrese el precio del producto.(Entre 100 y 300)");
		while(vPrecio < 100 || vPrecio > 300 ){

			alert("El precio ingresado tiene que estar entre 100 y 300");
			vPrecio = prompt("Ingrese el precio del producto");

		}

		vCantProd = prompt("Ingrese la cantidad de productos.(Entre 1 y 1000)");
		while(vCantProd <= 0  || vCantProd > 1000 ){

			alert("No es posible ingresar una cantidad de unidades negativa, nula ni mayor a 1000.");
			vPrecio = prompt("Ingrese la cantidad de productos.");

		}

		vMarca = prompt("Ingrese la marca del producto");
		vFabricante = prompt("Ingrese el fabricante del producto");

		if(vTipo == "alcohol" && vPrecio < vMinAlcohol){

			vMinAlcohol =vPrecio;

			vCantAlcholBarato = vCantProd;
			
			vFabriAlcholBarato = vFabricante;

		}


		if( vCantProd > vMaxUnidades){

			vMaxUnidades =vCantProd;


			vPromPorCompra = vPrecio/vCantProd;
	
		}

		if(vTipo == "jabón"){
			vCantTotalJAbones++;
		}

	
	}

	alert("a) El alcohol mas barato cuesta " + vMinAlcohol + " por " + vCantAlcholBarato + " unidad/es. Su fabricante es " + vFabriAlcholBarato + 
		 "\nb)El tipo de producto con mas unidades es " + vTipoMaxUnidades + " el promedio por compra es de " + vPromPorCompra +
		 "\nc)Hay " + vCantTotalJAbones + " unidades de jabón en total.");
		 

}

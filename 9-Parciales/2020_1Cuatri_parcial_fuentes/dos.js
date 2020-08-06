function mostrar() {
  let vTipoProd;
  let vCantBolsas = 0;
  let vPrecioPorBolsa;
  let vRespuesta;
  let vTotalBolsas = 0;
  let vPrecioTotal = 0;
  let vDescuento = 0;
  let vMaxCantBolsas = 0;
  let vProdMaxBolsas;
  let vPrecioMasCaro = 0;
  let vProdMasCaro;

  do {

    do {
      vTipoProd = prompt("Ingresar el tipo de producto.(arena/cal/cemento)");
    } while (vTipoProd != "arena" && vTipoProd != "cal" && vTipoProd != "cemento")

    do{
    vCantBolsas = parseInt(prompt("Ingrese la cantidad de bolsas."));
    } while(vCantBolsas<=0)

    do {

      vPrecioPorBolsa = parseFloat(prompt("Ingrese el precio por bolsa."));

    } while (vPrecioPorBolsa <= 0)

    vTotalBolsas += vCantBolsas;
    vPrecioTotal += vPrecioPorBolsa*vCantBolsas;

    if (vMaxCantBolsas < vCantBolsas) {

      vProdMaxBolsas = vTipoProd;
      vMaxCantBolsas = vCantBolsas;

    }

    if (vPrecioMasCaro < vPrecioPorBolsa) {
      vPrecioMasCaro = vPrecioPorBolsa;
      vProdMasCaro = vTipoProd;
    }

    vRespuesta = prompt("¿Desea comprar otro producto?(si/no)");

  } while (vRespuesta == "si")





  if (vTotalBolsas > 10 && vTotalBolsas <= 30) {

    vDescuento = 15 / 100;

  } else if (vTotalBolsas > 30) {

    vDescuento = 25 / 100;

  }

  if (vDescuento == 0) {

    alert("Importe total es " + vPrecioTotal + ".\nEl producto " + vProdMaxBolsas + " tiene la mayor cantidad de bolsas. (Cantidad = " + vMaxCantBolsas +
      ").\nEl producto " + vProdMasCaro + " es el mas caro.(Precio = " + vPrecioMasCaro + ")");

  } else {
    alert("Importe total es " + vPrecioTotal + ".\nEl precio final con descuento es de: " + (vPrecioTotal * (1 - vDescuento)) +
      ".\nEl producto " + vProdMaxBolsas + " tiene la mayor cantidad de bolsas. (Cantidad = " + vMaxCantBolsas +
      ").\nEl producto " + vProdMasCaro + " es el mas caro.(PrecioPorUnidad = " + vPrecioMasCaro + ")");

  }



}

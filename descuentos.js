const precioOriginal =120;
const descuento = 18;


function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

const priceConDiscount = function(precio, descuento) {
    const porcentajeDiscountPrice = 100 - discountValue;
    const precioConDescuento = (precio * porcentakePrecioConDescuento) / 100;

    let PrecioDiscount = precio, discount;
    return valorDiscount
}

const verificationCupon = funtion () {
    const cupons = [ 10, 25, 50];
    const cupon = document.getElementById("cupons")
    const valueCupon = parseInt(cupon.value);
    if (valueCupon === cupons [0]) {
        return cupons[0];
        } else if (valueCupon === cupons[1]){
            return cupons [1];
        } else if (valueCupon === cupons[2]) {
            return cupons[2];
        } else {
            return 0
        }
}

function onClickButtonPriceDiscount = function () {
    const originalPrice = document.getElementById("inputPrice")
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento, 
}); */



const PI = Math.PI;

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

function  perimetroTriangulo (lado1, lado2,  base){
    return lado1 + lado2 + base;
}

function  areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function diametroCirculo(radio) {
    return radio *2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio); 
    return diametro * PI;
}

function areaCirculo(radio)  {
    return (radio * radio) * PI;
}

function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    if(value!=0){
        const perimetro = perimetroCuadrado(value);
        document.getElementById("ResultadoCuadrado").innerHTML = perimetro;
        } else {
            alert("INGRESE TODOS LOS CAMPOS PARA REALIZAR EL CALCULO");
        }
}

function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    if(value!=0){
        const area = areaCuadrado(value);
        document.getElementById("ResultadoCuadrado").innerHTML = cuadrado;
        } else {
            alert("INGRESE TODOS LOS CAMPOS PARA REALIZAR EL CALCULO");
        }
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputBaseTriangulo"); 
    const base = parseFloat(input1.value);
    const input2 = document.getElementById("ladortriangulo1");
    const lado1 = parseFloat(input2.value);
    const input3 = document.getElementById("ladotriangulo2");
    const lado2 = parseFloat(input3.value);   


if(isNaN(base) || isNaN (lado1) || isNaN(lado2)){
    alert("INGRESE TODOS LOS CAMPOS PARA REALIZAR EL CALCULO");
    }
    else{
        const perimetro = perimetroTriangulo(lado1,lado2,base);
        document.getElementById("ResultadoTriangulo").innerHTML =perimetro;
    }    
}

function CalcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = input.value;
    if(radio!=0){
        const area = areaCirculo(radio);
        document.getElementById("ResultadoCirculo").innerHTML = area;
        }else{
           alert("INGRESE TODOS LOS CAMPOS PARA REALIZAR EL CALCULO"); 
        }
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = input.value;
    if(radio!= 0){
        const perimetro = perimetroCirculo(radio);
        document.getElementById("ResultadoCirculo").innerHTML = perimetro;
    } 
    else{
        alert("INGRESE TODOS LOS CAMPOS PARA REALIZAR EL CALCULO");
    }
}

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}
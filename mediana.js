function calcularMediaAritmetica(lista) {
           const sumaLista = lista.reduce( 
            function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;        
            }
        );
           
        const promedioLista = sumaLista / lista.length; 
        return promedioLista;
    }
  
    function ordenar(listaD) {
        let listaO = listaD;
        let paso = 0;
        for (let i = 0; i <= listaO.length; i++) {
          for (let j = 0; j < listaO.length; j++) {
            if (listaO[j] > listaO[j + 1]) {
              paso = listaO[j];
              listaO[j] = listaO[j + 1];
              listaO[j + 1] = paso;
            }
          }
        }
        return listaO;
      }

const lista1 = [
300, 
200,
500,
400000000,
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

let mediana;
 
if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);
        mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1];
    // posicion mitadlista1 dentro de lista 1
    //mediana
}

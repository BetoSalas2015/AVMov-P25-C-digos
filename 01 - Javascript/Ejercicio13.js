// Programación funcional

function mapForEach(arr, fn) {
    var arr2 = [];
    for(var i = 0; i < arr.length; i++) {
        arr2.push( fn( arr[i]) );
    }
    return arr2;
}

var arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var arreglo2 = mapForEach(arreglo, function(valor) {
    return valor * 2;
} );

var arreglo3 = mapForEach(arreglo, function(valor) {
    return ( (valor % 2) === 0 )
} );

var arreglo4 = mapForEach (arreglo, function(valor) { 
        for(var i = valor - 1; i > 1; --i ) {
            if( valor % i === 0)
                return false; 
            }
        return true
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);




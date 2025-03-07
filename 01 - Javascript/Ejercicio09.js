// Closures

function saludo(mensaje) {
    return function(nombre) {
        console.log(mensaje + " " + nombre);
        
    }
}

var hola = saludo("Hola");
hola("Roberto");

// ! -------------------------------------------

function construyeFunciones() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push( function() { console.log(i) } );
    }
    return arr;
}

var arreglo = construyeFunciones();

arreglo[0](); 
arreglo[1](); 
arreglo[2]();
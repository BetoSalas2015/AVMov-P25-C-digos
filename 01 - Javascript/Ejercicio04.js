//  Funciones 
//  Modo java
function square(x) {
    return x * x;
}

// Modo ECMAScript
var cube = function(x) {
    return x* x * x;
}

console.log(square(5));
console.log(square(5.5));
console.log(cube(5));

//  Funciones inmediatamente invocadas (IIF)
var funsaludo = function(nombre) {
    console.log("Hola " + nombre);
}

funsaludo("Roberto");

// IIF
var saludo = function(nombre) {
    console.log("Hola " + nombre);
}

console.log(saludo("sally"));

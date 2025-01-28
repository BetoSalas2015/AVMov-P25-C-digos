//  Objetos
// Sintaxis
var NombreObjeto = {
    atributo: "valor",
    funcion: function() {},
    objetos: {}
}

console.log(NombreObjeto);
console.log(NombreObjeto.atributo);
console.log(NombreObjeto.funcion);
console.log(NombreObjeto.objetos);

// operador []
persona = new Object();
persona["nombre"] = "Roberto"
persona["apellido"] = "Salazar"

var campo = "nombre"

console.log(persona);
console.log(persona[campo]);

// Operador .
persona2 = new Object();
persona2.nombre = "Roberto";
persona2.apellido = "Salazar";
persona2.direccion = new Object();
persona2.direccion.calle = "2 sur 2";

console.log(persona2);
console.log(persona2.nombre);
console.log(persona2.direccion.calle);

// Objetos Literles
persona3 ={
    nombre: "Roberto",
    apellido: "Salazar",
    direccion: {
        calle: "2 sur 2"
    }
}

console.log(persona3);
console.log(persona3.nombre);
console.log(persona3.direccion.calle);

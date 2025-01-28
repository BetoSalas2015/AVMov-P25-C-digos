//  Funciones como Objetos

function saludo() {
    console.log("Saludos Programas!!!!");
}

saludo.idioma = "Español";
saludo();

console.log("El idioma es: " + saludo.idioma);

// * ---------

console.log(this);

function b() {
    console.log(this);
    
}
var objeto = {
    nombre: "Roberto", 
    fun: function() {
        console.log(this);
        console.log(this.nombre);
        
    }
}

b();
objeto.fun();
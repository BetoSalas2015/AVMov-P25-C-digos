//  call(), bind() y apply()

// * apply()
var persona = {
    nombre: "Juan",
    apellido: "Pérez",
    getNombre: function(lang) {
        
        var nombreCompleto = this.nombre + " " + this.apellido + "(" + lang + ")";
        return nombreCompleto;
    }
};

var logNombre = function(lang) {
    console.log('Logged: ' + this.getNombre(lang));
};

logNombre.apply(persona,["español"]);

const { v4: uuidv4} = require('uuid');

class Tarea {
    id = '';
    descripcion = '';
    completado = null;

    constructor(desc) {
        this.id = uuidv4();
        this.descripcion = desc;
        this.completado = null;
    } 
}

module.exports = Tarea;
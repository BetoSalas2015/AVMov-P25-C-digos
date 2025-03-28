const Tarea = require('./tarea');

class Tareas {
    constructor() {   
        this.listado = {};
    }

    crearTarea = (desc) => {
        const tarea = new Tarea(desc);
        this.listado[tarea.id] = tarea;
    };

    get listadoArr() {      // convertir {{}} -> [{}]
        const listadoArr = [];
        Object.keys(this.listado).forEach( (key) => {
            const tarea = this.listado[key];
            listadoArr.push(tarea);
        } );
        return listadoArr;
    }
}

module.exports = Tareas;
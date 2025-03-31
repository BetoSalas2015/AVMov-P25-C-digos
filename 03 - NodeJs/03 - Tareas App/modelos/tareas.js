const Tarea = require('./tarea');
const colors = require('colors');

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

    cargaListado = (arreglo) => {        // convertir [{}] -> {{}} 
        arreglo.forEach( (tarea) => {
            this.listado[tarea.id] = tarea;
        });
    } 

    imprimeTareas = () => {
        let salida = '';
        let contador = 1;
        this. listadoArr.forEach((tarea) => {
            salida = `${contador.toString().green} ${tarea.descripcion.gray} :: `;
            if (tarea.completado) {
                salida += `${'Completado.'.green}`;
            } else {
                salida += `${'Pendiente.'.red}`;
            }
            console.log(salida);
            contador++;
        });
    }

    imprimePendientesCompletadas = (tipo) => {};

}



module.exports = Tareas;
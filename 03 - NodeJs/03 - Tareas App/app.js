const colors = require('colors');
const { inquirerMenu, pausa, capturaEntrada } = require('./js/inquirer');
const Tareas = require('./modelos/tareas');
const Tarea = require('./modelos/tarea');

const main = async () => {
    console.clear();
    tareas = new Tareas();
    let opc = '';
    do {
        opc = await inquirerMenu();

        switch (opc) {
            case 1: const resp = await capturaEntrada('Descripción: ');
                    tareas.crearTarea(resp); break;
            case 2: console.log(tareas.listadoArr); break;
            
                
                break;
        
            default:
                break;
        }

        if(opc !== 0)
            await pausa()
        
    } while (opc !== 0);

    tarea = new Tarea('Leer Libro');
    console.log(tarea);
    
    
};

main()
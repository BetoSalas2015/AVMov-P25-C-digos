const colors = require('colors');
const { inquirerMenu, pausa, capturaEntrada } = require('./js/inquirer');
const Tareas = require('./modelos/tareas');
const Tarea = require('./modelos/tarea');
const { guardaBase, cargaBase } = require('./js/gardabase');

const main = async () => {
    console.clear();
    tareas = new Tareas();
    let opc = '';
    do {
        opc = await inquirerMenu();
        const tareasdb = await cargaBase();
        if (tareasdb) {
            await tareas.cargaListado(tareasdb);
        }

        switch (opc) {
            case 1: const resp = await capturaEntrada('Descripción: ');
                    tareas.crearTarea(resp); break;
            case 2: tareas.imprimeTareas(); break;
  
        }

        guardaBase(tareas.listadoArr);

        if(opc !== 0)
            await pausa()
        
    } while (opc !== 0);
    
    
};

main()
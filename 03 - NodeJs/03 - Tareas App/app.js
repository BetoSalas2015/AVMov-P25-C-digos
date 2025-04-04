const colors = require('colors');
const { inquirerMenu, pausa, capturaEntrada, listadoTareasBorrar, confirmar, listadoSeleccionar } = require('./js/inquirer');
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
            case 3: tareas.imprimePendientesCompletadas(true); break;
            case 4: tareas.imprimePendientesCompletadas(false); break;
            case 5: const comp = await listadoSeleccionar(tareas.listadoArr);
                    tareas.cambiaTareas(comp); break;
                    
            case 6: const id = await listadoTareasBorrar(tareas.listadoArr); 
                    const ok = await confirmar("¿Desea borrar la taarea?");
                    if(ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada.'.green);
                    }
                    break;
        }

        guardaBase(tareas.listadoArr);

        if(opc !== 0)
            await pausa()
        
    } while (opc !== 0);
    
    
};

main()
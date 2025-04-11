const inquirer = require('inquirer');
const colors = require('colors');

const menu = [{
    type: 'list',
    name: 'menuOpt',
    message: 'Seleccione una opcion',
    choices: [{
        value: 1,
        name: `${'1.'.green} Buscar Ciudad.`
    },
    {
        value: 2,
        name: `${'2.'.green} Historial.`
    },
    {
        value: 0,
        name: `${'0.'.green} Salir.`
    }
]
}];

const inquirerMenu = async() => {
    console.clear();
    console.log('==========================='.green);
    console.log('=          Menu           ='.green);
    console.log('==========================='.green);

    const {menuOpt} = await inquirer.prompt(menu);
    return menuOpt;
};

const pausa = async() => {
    await inquirer.prompt([{
        type: 'input',
        name: 'pausaOpt',
        message: 'Presione una tecla para continuar'.green
    }]);
};

const capturaEntrada = async(message) => {
    respuesta = await inquirer.prompt([{
        type: 'input',
        name: 'resp',
        message,
        validate: (entada) => {
            if( entada.length === 0)
                return 'Entrada Inválida. Reintente';
            else 
                return true;
        }
    }]);
    return respuesta.resp;
};

const listadoCiudades = async( listaCiudad = []) => {
    let contador = 0;
    const choices = listaCiudad.map( (ciudad) => {
        contador++;
        return {
            value: ciudad.id,
            name: `${contador.toString().green}. ${ciudad.lugar.white}`,
            lat: ciudad.lat,
            lon: ciudad.lon
        }
    });
    choices.unshift({
        value: 0,
        name: `${'0'.green}. ${'Cancelar'.yellow}`
    })
    const respuesta = await inquirer.prompt( [{
        type: 'list',
        name: 'resp',
        message: '¿Que ciudad desea buscar?',
        choices
    }] )
    return respuesta.resp;
};

const confirmar = async(message) => {
    const { ok } = await inquirer.prompt([{
        type: 'confirm',
        name: 'ok',
        message 
    }]);
    return ok;
}

const listadoSeleccionar = async(listado) => {
    const choices = listado.map( (tarea) => {
        return {
                value: tarea.id,
                name: tarea.descripcion,
                checked: (tarea.completado) ? true : false
            }
    } );
    const respuesta = await inquirer.prompt([{
        type: 'checkbox',
        name: 'resp',
        message: 'Marque las tareas completadas: ',
        choices
    }]);
    return respuesta.resp;
}


module.exports = {
    inquirerMenu,
    pausa,
    capturaEntrada,
    listadoCiudades,
    confirmar,
    listadoSeleccionar
}
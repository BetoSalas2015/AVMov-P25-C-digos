const inquirer = require('inquirer');
const colors = require('colors');
const { validate } = require('uuid');

const menu = [{
    type: 'list',
    name: 'menuOpt',
    message: 'Seleccione una opcion',
    choices: [{
        value: 1,
        name: `${'1.'.green} Crear Tarea.`
    },
    {
        value: 2,
        name: '2. Listar Tareas'
    },
    {
        value: 3,
        name: '3. Listar tareas terminadas'
    },
    {
        value: 4,
        name: '4. Listar Tareas Pendientes'
    },
    {
        value: 5,
        name: '5. Completar tarea'
    },
    {
        value: 6,
        name: '6. Borrar tarea.'
    },
    {
        value: 0,
        name: '0. Salir'
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


module.exports = {
    inquirerMenu,
    pausa,
    capturaEntrada
}
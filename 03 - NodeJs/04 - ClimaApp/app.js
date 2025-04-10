const colors = require('colors');
const { inquirerMenu, capturaEntrada, pausa } = require('./js/inquirer');
const Busquedas = require('./modelos/busquedas');
require('dotenv').config();

const main = async() => {
    let resp;
    const busqueda = new Busquedas();
    do {
        resp = await inquirerMenu();
        switch (resp) {
            case 1: const lugar = await capturaEntrada('Ciudad: ');
                    const lugares = await busqueda.ciudad(lugar);
                    console.log(lugares);
                    
                    busqueda.ciudad(lugar); 
            break;
            case 2: break;
            
        }
        if (resp === 0) {
            await pausa();
        }
    } while (resp !== 0);
};

main();
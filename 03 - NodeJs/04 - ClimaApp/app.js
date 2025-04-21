const colors = require('colors');
const { inquirerMenu, capturaEntrada, pausa, listadoCiudades } = require('./js/inquirer');
const Busquedas = require('./modelos/busquedas');
require('dotenv').config();

const main = async() => {
    let resp;
    const busqueda = new Busquedas();
    busqueda.cargaBase();
    do {
        resp = await inquirerMenu();
        switch (resp) {
            case 1: const lugar = await capturaEntrada('Ciudad: ');
                    const lugares = await busqueda.ciudad(lugar);
                    const id = await listadoCiudades(lugares);
                    const lugarSeleccionado = lugares.find( ciudad => ciudad.id === id );
                    busqueda.guardaBúsquedas(lugarSeleccionado.lugar);
                    const clima = await busqueda.climaCiudad(lugarSeleccionado.lat,lugarSeleccionado.lon);
                    console.log(`\n${'Ciudad: '.yellow}: ${lugarSeleccionado.lugar}`);
                    console.log(`${'Latitud: '.yellow}: ${lugarSeleccionado.lat}`);
                    console.log(`${'Longitud: '.yellow}: ${lugarSeleccionado.lon}`);
                    console.log(`${'Clima: '.yellow}: ${clima.desc}`);
                    console.log(`${'Temperatura: '.yellow}: ${clima.temp} Centigrados`);
                    console.log(`${'Temperatura mínima: '.yellow}: ${clima.min}`);
                    console.log(`${'Temperatura máxima: '.yellow}: ${clima.max}`);
                    console.log(`${'Sensación térmica: '.yellow}: ${clima.real}`);
                    
                    await pausa();
                    

                    break;
            case 2: let cont = 1;
                    busqueda.historial.forEach((lugar) => {
                        console.log(`${cont.toString().green}. ${lugar}`);
                        cont++;
                    });
                    await pausa();
                    break;
            
        }
        busqueda.guardaBase();
        if (resp === 0) {
            await pausa();
        }
    } while (resp !== 0);
};

main();
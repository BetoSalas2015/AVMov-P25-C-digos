const colors = require('colors');
const { inquirerMenu, pausa } = require('./js/inquirer');

const main = async () => {
    console.clear();
    let opc = '';
    do {
        opc = await inquirerMenu();
        if(opc !== 0)
            await pausa()
        
    } while (opc !== 0);

    
};

main()
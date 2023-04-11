#!/usr/bin/env node

const {mdLinks} = require('./index')
const option = require('./options')


const process = require('process');
var colors = require('colors')

//process.argv es una propiedad del objeto process en Node.js que devuelve un array que contiene los argumentos de línea de comandos 
const args = process.argv
const path = process.argv[2] //option, el path que ingresa el usuario 

function cli(){
    const validate = args.includes('--validate') || args.includes('--v')
    const stats = args.includes('--stats') || args.includes('--s')
    const help = args.includes('--help') || args.includes('--h')

    if (path === undefined || path === '--help'|| path === '--h'){

        console.log(('\n-------------------------------- WELCOME ------------------------------------------------------------- '.green.bold));
        console.log("\nInstructions\n".white.bold);
        console.log('1. '+ 'Insert a path right after'+ ' start-md-links'.blue)
        console.log('2. ' + 'to validate paths status type' + '--validate'.blue)
        console.log('3. ' + 'to validate statistics type after your path ' + '--stats'.blue)
        console.log('4. ' + 'to see broken links number type after your path ' + ' --stats --validate'.blue)
        console.log('5. ' + 'to see again the instructions type ' + '--help'.blue)

        console.log(('\n-------------------------------------------------------------------------------------------------------------- '.green));
    

        process.exit(0);

    }

    else if (path + '--help' || path + '--h') {

        console.log(('\n-------------------------------- WELCOME ------------------------------------------------------------- '.green.bold));
        console.log("\nInstructions\n".white.bold);
        console.log('1. '+ 'Insert a path right after'+ ' start-md-links'.blue)
        console.log('2. ' + 'to validate paths status type' + '--validate'.blue)
        console.log('3. ' + 'to validate statistics type after your path ' + '--stats'.blue)
        console.log('4. ' + 'to see broken links number type after your path ' + ' --stats --validate'.blue)
        console.log('5. ' + 'to see again the instructions type ' + '--help'.blue)

        console.log(('\n-------------------------------------------------------------------------------------------------------------- '.green));
    

        process.exit(0);

    }

    else if (!validate && !stats) {
        mdLinks(path, { validate: false }).then((arrObjects) => {
            for (let i = 0; i < arrObjects.length; i++) {
                console.log(('---------------------------------------------------------------------------------------------------------'.green));
                console.log(colors.blue.bold('href:', arrObjects[i].href));
                console.log('text:'.blue, arrObjects[i].text);
                console.log('file:'.blue,  arrObjects[i].file);
            }
            process.exit(0);
        })
            .catch(console.error)
    }

    else if (validate && !stats) {
        mdLinks(path, { validate: true }).then((arrObjects) => {
            for (let i = 0; i < arrObjects.length; i++) {
                console.log(('-----------------------------------------------------------------------------------------------------------'.green));
                console.log(colors.blue.bold('href:', arrObjects[i].href));
                console.log('text:'.blue, arrObjects[i].text);
                console.log('file:'.blue, arrObjects[i].file);
                console.log('status:'.blue, colors.white(arrObjects[i].status));
                console.log('message:'.blue, arrObjects[i].statusText);
            }
            process.exit(0);
        })
            .catch(console.error)
    }
    else if (stats) {
        mdLinks(path, { validate: true }).then((arrObjects) => {
            const totalLinks = option.sumLinks(arrObjects);
            const uniqueLinks = option.uniqueLinks(arrObjects);
            console.log(('Total: '.blue +totalLinks));
            console.log('Unique : '.blue +(uniqueLinks));
            if (validate) {
                const brokenLinks = option.brokenLinks(arrObjects);
                console.log(('Broken: '.blue + brokenLinks));
            }
            process.exit(0);
        })
            .catch(console.error)
    }
};

cli()
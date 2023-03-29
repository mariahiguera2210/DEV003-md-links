const { rejects } = require("assert");
const fs = require("fs"); // file system module
const { resolve } = require("path");
const path = require("path");
const fsPromises = fs.promises;

//check a file path's existence
const validatePath = (userPath) => fs.existsSync(userPath);

//validar si la ruta es absoluta si no convertirla a absoluta
const validateAbsolute = (userPath) => {
  if (path.isAbsolute(userPath)) {
    return true;
  } else {
    return path.resolve(userPath)}

};

// console.log(validateAbsolute("Usersfff\maria\OneDrive\Escritorio\programar\github\DEV003-md-links\dataPrueba\first.txt"))


const validateDiR = (userPath) => fs.statSync(userPath).isDirectory()// validar si el path es directorio/carpeta
const validateFile = (userPath) => fs.statSync(userPath).isFile() //validar si es un archivo
const infoDir = (userPath) => fs.readdirSync(userPath) //lee lo que hay en el directorio
console.log('infoDir: ', infoDir('dataPrueba'));
const infoFile = (userPath) => fs.readFileSync(userPath, 'UTF-8') // lee lo que hay en el archivo
// console.log("holaaaaaa",infoFile('./dataPrueba/readmePrueba.md'))
//   .then((data) => console.log('esta es la info del archivo', data))
//   .catch((err) => console.log('este es el error', err));

//extraer la extension de los archivos
const extentionFiles = (userPath) => path.extname(userPath)
// console.log('extentionFiles: ', extentionFiles('README.md'));



const getLinks =  (userPath) => {
    
        const data = infoFile(userPath)
        console.log('data: ', data);
        const regex = /\[[^\[\]]*\]\((https?):\/\/[^\(\)]+\)/gi;

        const matches = data.match(regex);
        console.log('matches: ', matches);

        const linksObj= []

        for (let i = 0; i < matches.length; i++){
            linksObj.push(
                {
                    href: matches[i].slice(matches[i].indexOf('](h') + 2, -1),
                    text: matches[i].slice(1, matches[i].indexOf(']')),
                    file: validateAbsolute(userPath),

                }
            )
        }
        

    console.log("linksObj", linksObj)
    return linksObj


    }


getLinks('./dataPrueba/readmePrueba.md')
// getLinks('README.md')

    





    // return todosLosLinks = []

//una funcion que idetifique en una carpeta con archivos extencion md  y extraiga los links
// una funcion que busque dentro de los archivos mas capertas y extraiga los links 




// si es un directorio, entrar al directorio y buscar los archivos
// si la extension es .md crear una funcion que lea y extraiga los links y retorne un objeto booleano 









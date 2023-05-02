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
    return userPath;
  } else {
    return path.resolve(userPath)}
};

// console.log('aca convierte******', validateAbsolute('dataPrueba\readmePrueba.md'))

// console.log(validateAbsolute("Usersfff\maria\OneDrive\Escritorio\programar\github\DEV003-md-links\dataPrueba\first.txt"))
const validateDiR = (userPath) => fs.statSync(userPath).isDirectory()// validar si el path es directorio/carpeta
const validateFile = (userPath) => fs.statSync(userPath).isFile() //validar si es un archivo
const infoFile = (userPath) => fs.readFileSync(userPath, 'UTF-8') // lee lo que hay en el archivo

const extentionFiles = (userPath) => path.extname(userPath) //extraer la extension de los archivos
// console.log('extentionFiles: ', extentionFiles('README.md'));



const getLinks =  (userPath) => {
    
        const data = infoFile(userPath)
        const regex = /\[[^\[\]]*\]\((https?):\/\/[^\(\)]+\)/gi;
        const linksArray = data.match(regex);

        const linksObj= []

        for (let i = 0; i < linksArray.length; i++){
            linksObj.push(
                {
                    href: linksArray[i].slice(linksArray[i].indexOf('](h') + 2, -1),
                    text: linksArray[i].slice(1, linksArray[i].indexOf(']')),
                    file: userPath,

                }
            )
        }
        

    // console.log("linksObj", linksObj)
    return linksObj
    }

// getLinks('./dataPrueba/readmePrueba.md')
// getLinks('README.md')

const getLinksStatus = (linksObj) => {
  return new Promise((resolve) => {
    let validatedLinks = [];
    for (let i = 0; i < linksObj.length; i++) {
      fetch(linksObj[i].href)
        .then(res => {
          validatedLinks.push({
            href: linksObj[i].href,
            text: linksObj[i].text,
            file: linksObj[i].file,
            status: res.status,
            statusText: res.statusText,
          });
          if (validatedLinks.length === linksObj.length) {
            resolve(validatedLinks);
        }
        })
        .catch(error => {
          validatedLinks.push({
            href: linksObj[i].href,
            text: linksObj[i].text,
            file: linksObj[i].file,
            status: error.status || 400,
            statusText: "fail",
          });
          if (validatedLinks.length === linksObj.length) {
            resolve(validatedLinks);
           }
        });
    }
  });
};


// const resultado = getLinks("C:\\Users\\maria\\OneDrive\\Escritorio\\programar\\github\\DEV003-md-links\\dataPrueba\\readmePrueba.md");
// getLinksStatus(resultado)
// .then((res) => console.log(res))
// .catch((error) => console.log(error))

function mdFiles(filePath) {
    const extName = path.extname(filePath);//devuelve la extensión de la ruta de archivo despues del .
    if (extName === ".md") { 
        return true;
    } else {
        return false;
    }
  };


// function readAllFiles(userPath) {
//     let absPath = validateAbsolute(userPath)
//     const arrayOfLinks = []

//     if (validateFile(userPath) && mdFiles(userPath).length > 0){
//         arrayOfLinks.push(userPath)
//     } else {

//     throw new Error("No se encontraron archivos MD en el directorio") }

//     return arrayOfLinks
// }

// console.log(readAllFiles('dataPrueba'))
   
    //verificar si es un archivo y si es md.
    //si cumple, leer la informacion y extraer los links
    // guardarlos en un array 

   

module.exports= {
    validatePath,
    validateAbsolute,
    validateDiR,
    validateFile,
    infoFile,
    extentionFiles,
    getLinks,
    getLinksStatus, 
    mdFiles, 
}





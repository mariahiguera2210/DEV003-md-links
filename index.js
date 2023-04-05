
const api = require('./api.js')

const mdLinks = (userPath, options) => {
  return new Promise((resolve, reject) => {//validar si es un path existente
    if (!api.validatePath(userPath)){
      reject(new Error('El path no es valido'))
    }
    const absolutePath = api.validateAbsolute(userPath); // volver path absoluto si no lo es
    if (api.validateFile(absolutePath)){ //valida si es un archivo
      if(!api.mdFiles(absolutePath)) { // buscar los .md 
        reject(new Error('el archivo no es .md'))
      }
    }
   
    if(options.validate){
      const validateLinksStatus = api.getLinksStatus(api.getLinks(absolutePath))
      validateLinksStatus.then((object) => {
        if(object.length) {
        resolve (object)
        }
        reject(new Error ('no hay links en el archivo'))
      })
    }
      else if (!options.validate){
        const links = api.getLinks(absolutePath)
        if (links.length) {
          resolve(links)
        }
        reject(new Error ('No hay links en el archivo'))

      } 
    } ) 
    .catch((Error) => {
      console.log(Error)
    })
  
  }
  

mdLinks('C:/Users/maria/OneDrive/Escritorio/programar/github/DEV003-md-links/README.md', {validate: false}).then((resolve) => {
  console.log(resolve);

})
  .catch((Error) => {
    console.log(Error)
  })






 

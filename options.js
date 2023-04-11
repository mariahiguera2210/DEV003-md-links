const links = [
    {
      href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ',
      text: 'Píldora recursión - YouTube Laboratoria Developers',
      file: 'C:\\Users\\maria\\OneDrive\\Escritorio\\programar\\github\\DEV003-md-links\\dataPrueba\\readmePrueba.md',
      status: 200,
      statusText: 'OK'
    },
    {
        href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ',
        text: 'Píldora recursión - YouTube Laboratoria Developers',
        file: 'C:\\Users\\maria\\OneDrive\\Escritorio\\programar\\github\\DEV003-md-links\\dataPrueba\\readmePrueba.md',
        status: 200,
        statusText: 'OK'
      },
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'C:\\Users\\maria\\OneDrive\\Escritorio\\programar\\github\\DEV003-md-links\\dataPrueba\\readmePrueba.md',
      status: 200,
      statusText: 'OK'
    },

    {
        href: "http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175",
        text: "Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?",
        file: "C:/Users/maria/OneDrive/Escritorio/programar/github/DEV003-md-links/dataPrueba/readmePrueba.md",
        status: 400,
        statusText: "fail",
      },
  ]

const sumLinks = (links) => {
    const total = links.length;
    return total;
};

// console.log(sumLinks(links))

//contar el total de linsk quitando los repetidos 
const uniqueLinks = (links) => {
    const unique = [...new Set(links.map((link)=> link.href))];
    return unique.length
}

// console.log(uniqueLinks(links))

const brokenLinks = (links) => {
    const broken = links.filter((link) => link.status !==200);
    return broken.length;
}

// console.log(brokenLinks(links))


module.exports = {
    sumLinks,
    uniqueLinks,
    brokenLinks,
}
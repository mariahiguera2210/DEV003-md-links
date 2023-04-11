const { mdLinks } = require("../index.js");

describe("mdLinks", () => {
  it("Debería ser una función", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it("Deberia devolver una promesa", () => {
    return mdLinks()
      .then(() => {
        expect(mdLinks).toBe(typeof "promise");
      })
      .catch((error) => {
        error;
      });
  });

  it("Deberia devolver los enlaces del archivo", async () => {
    const userPath =
      "C:/Users/maria/OneDrive/Escritorio/programar/github/DEV003-md-links/dataPrueba/readmePrueba.md";
    const array = [
      {
        href: "https://es.wikipedia.org/wiki/Markdown",
        text: "Markdown",
        file: "C:/Users/maria/OneDrive/Escritorio/programar/github/DEV003-md-links/dataPrueba/readmePrueba.md",
      },
      {
        href: "https://www.youtube.com/watch?v=lPPgY3HLlhQ",
        text: "Píldora recursión - YouTube Laboratoria Developers",
        file: "C:/Users/maria/OneDrive/Escritorio/programar/github/DEV003-md-links/dataPrueba/readmePrueba.md",
      },
      {
        href: "https://nodejs.org/",
        text: "Node.js",
        file: "C:/Users/maria/OneDrive/Escritorio/programar/github/DEV003-md-links/dataPrueba/readmePrueba.md",
      },
   
      {
        href: "http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175",
        text: "Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?",
        file: "C:/Users/maria/OneDrive/Escritorio/programar/github/DEV003-md-links/dataPrueba/readmePrueba.md",
      },
    ];

    const result = await mdLinks(userPath, { validate: false });
    expect(result).toEqual(array);
  });

  it("Debería devolver los enlaces del archivo con status", async () => {
    const userPath = "C:\\Users\\maria\\OneDrive\\Escritorio\\programar\\github\\DEV003-md-links\\dataPrueba\\readmePrueba.md";
      // "C:/Users/maria/OneDrive/Escritorio/programar/github/DEV003-md-links/dataPrueba/readmePrueba.md";
    const arrayStatus = [
      {
        href: "https://www.youtube.com/watch?v=lPPgY3HLlhQ",
        text: "Píldora recursión - YouTube Laboratoria Developers",
        file: "C:\\Users\\maria\\OneDrive\\Escritorio\\programar\\github\\DEV003-md-links\\dataPrueba\\readmePrueba.md",
        status: 200,
        statusText: "OK"
      },
      {
        href: "https://es.wikipedia.org/wiki/Markdown",
        text: "Markdown",
        file: "C:\\Users\\maria\\OneDrive\\Escritorio\\programar\\github\\DEV003-md-links\\dataPrueba\\readmePrueba.md",
        status: 200,
        statusText: "OK"
      },
      {
        href: "http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175",
        text: "Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?",
        file: "C:\\Users\\maria\\OneDrive\\Escritorio\\programar\\github\\DEV003-md-links\\dataPrueba\\readmePrueba.md",
        status: 400,
        statusText: "fail"
      },
      
      {
        href: "https://nodejs.org/",
        text: "Node.js",
        file: "C:\\Users\\maria\\OneDrive\\Escritorio\\programar\\github\\DEV003-md-links\\dataPrueba\\readmePrueba.md",
        status: 200,
        statusText: "OK"
      }
     
    ];

    const result = await mdLinks(userPath, { validate: true });
    expect(result).toEqual(arrayStatus);
  });


});

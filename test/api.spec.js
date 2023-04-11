const {validatePath,
    validateAbsolute,
    validateDiR,
    validateFile,
    infoFile,
    extentionFiles,
    getLinks,
    getLinksStatus, 
    mdFiles,
    sumLinks,
    uniqueLinks,
    brokenLinks,
} = require ('../api')

const route = 'C:\\Users\\maria\\OneDrive\\Escritorio\\programar\\github\\DEV003-md-links\\dataPrueba\\readmePrueba.md';

describe('path exists?', () => {

    it('should be a function', () => {
        expect(typeof validatePath).toBe('function');
    });

    it('should return true', () => {
        expect(validatePath('README.md')).toBeTruthy();
    });
    describe('is absolute path?', () => {

        it('should be a function', () => {
            expect(typeof validateAbsolute).toBe('function');
        });
    
        it('should return true if the path is absolute', () => {
            expect(validateAbsolute('README.md')).toBeTruthy();
        });

        it('should return the same path if is absolute', () => {
            expect(validateAbsolute('C:\\Users\\maria\\OneDrive\\Escritorio\\programar\\github\\DEV003-md-links\\README.md')).toBe('C:\\Users\\maria\\OneDrive\\Escritorio\\programar\\github\\DEV003-md-links\\README.md');
        });

        describe('convert path to absolute', () => {

            it('should be a function', () => {
                expect(typeof validateAbsolute).toBe('function');
            });
        
            it('should return absolute path', () => {
                expect(validateAbsolute('README.md')).toBe('C:\\Users\\maria\\OneDrive\\Escritorio\\programar\\github\\DEV003-md-links\\README.md');
            });
        });
        
        describe('read info file', () => {

            it('should be a function', () => {
                expect(typeof infoFile).toBe('function');
            });
        
            it('should show info file', () => {
                const expected = "Hello Maria ";
                const result = infoFile("./dataPrueba/second.txt");
                expect(result).toEqual(expected);
            });
        });


    });
    describe('is file?', () => {

        it('should be a function', () => {
            expect(typeof validateFile).toBe('function');
        });
    
        it('should return true if path is a file', () => {
            expect(validateFile('README.md')).toBeTruthy();
        });
    });
    
    describe('is MD?', () => {

        it('should be a function', () => {
            expect(typeof mdFiles).toBe('function');
        });
    
        it('should return true if file is md', () => {
            expect(mdFiles('README.md')).toBeTruthy();
        });
        it('should return false if file is not md', () => {
            expect(mdFiles('README.txt')).toBeFalsy();
        });

        
    });

    describe('get Links', () => {

        const data = '[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado [Github](https://github.com/kenruizinoue/tt-node-fetch-ejemplo/blob/app.js)';
        
    
        it('should be a function', () => {
            expect(typeof getLinks).toBe('function');
        });
    
        it('should return an array', () => {
            const newLinksArray = [
                {
                    href: "https://es.wikipedia.org/wiki/Markdown",
                    text: "Markdown",
                    file: "C:\\Users\\maria\\OneDrive\\Escritorio\\programar\\github\\DEV003-md-links\\dataPrueba\\readmePrueba.md"
                },
                
            ]

                const result = getLinks(data);
                expect(result).toEqual(newLinksArray);
        });

        describe( "getLinksStatus" , () => {

            it('should be a function', () => {
                expect(typeof getLinks).toBe('function');
            }); 
            
            const linksObj =  [{
                    href: 'https://es.wikipedia.org/wiki/Markdown',
                    text: 'Markdown',
                    file: 'C:/Users/maria/OneDrive/Escritorio/programar/github/DEV003-md-links/dataPrueba/readmePrueba.md',
                    }
                  ];

                  it('should return links status', async () => {
                    const expected =  [
                        {
                            href: 'https://es.wikipedia.org/wiki/Markdown',
                            text: 'Markdown',
                            file: 'C:/Users/maria/OneDrive/Escritorio/programar/github/DEV003-md-links/dataPrueba/readmePrueba.md',
                            status: 200,
                            statusText: 'OK'
                            }
                          ];
                          const result = await getLinksStatus(linksObj);
                          expect(result).toEqual(expected);
                });

        } ) 
    
    });


    


    

});
let frase = "hola mundo en javascript"

function convertirACamelCase(frase) {
    let palabras = frase.toLowerCase().split(' ')
    let camelCaseFrase = palabras[0]; // primera palabra se mantiene en minúsculas

    for (let i = 1; i < palabras.length; i++) {
        // la primera letra de cada palabra a mayúsculas
        let palabraConvertida = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1)
        camelCaseFrase += palabraConvertida 
    }

    console.log(camelCaseFrase)
}


convertirACamelCase(frase)

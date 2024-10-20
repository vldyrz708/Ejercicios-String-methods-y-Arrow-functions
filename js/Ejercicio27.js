let frase = "Hola Mundo"

function convertirASnakeCase(cadena) {
    // reemplazar espacios con "_"
    let snakeCase = cadena.toLowerCase().replace(/ /g, '_')
    console.log(snakeCase)
}


convertirASnakeCase(frase)

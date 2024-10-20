let cadena = "hola hola"

function reemplazarOcurrencias(cadena, palabraAReemplazar, nuevaPalabra) {
    let resultado = cadena.replaceAll(palabraAReemplazar, nuevaPalabra)
    console.log(resultado)
}

reemplazarOcurrencias(cadena, "hola", "adiós")
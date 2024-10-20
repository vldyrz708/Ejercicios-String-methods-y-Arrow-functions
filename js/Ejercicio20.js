let cadena = "JavaScript es genial"

function verificarInicio (cadena, palabra){
    let verificar = cadena.endsWith(palabra)
    console.log(verificar)
}

verificarInicio(cadena, "genial")
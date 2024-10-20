let cadena = "JavaScript es genial"

function verificarInicio (cadena, palabra){
    let verificar = cadena.startsWith(palabra)
    console.log(verificar)
}

verificarInicio(cadena, "JavaScript")
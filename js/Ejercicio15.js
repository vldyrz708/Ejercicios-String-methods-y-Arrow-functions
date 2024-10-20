let frase = "Hola"

function obtener (frase,id){
    let encontro = frase.substr(id)
    console.log(encontro)
}

obtener(frase,-1)
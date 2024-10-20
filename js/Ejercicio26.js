let frase = "Aprender JavaScript es emocionante"

function palabraLarga(cadena) {
    let palabras = cadena.split(' ')
    let palabraMasLarga = palabras[0]

    for (let i = 1; i < palabras.length; i++) {
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i]
        }
    }

    console.log(palabraMasLarga)
}

palabraLarga(frase)

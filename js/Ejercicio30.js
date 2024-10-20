let cadena = "abbccc"

function frecuenciaCaracteres(cadena) {
    let frecuencia = {}

    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i]
        if (frecuencia[caracter]) {
            frecuencia[caracter]++
        } else {
            frecuencia[caracter] = 1
        }
    }

    console.log(frecuencia)
}


frecuenciaCaracteres(cadena)

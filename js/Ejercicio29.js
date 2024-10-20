let repetidas = "aabbccdde"

function eliminarRepetidasConsecutivas(cadena) {
    let resultado = cadena[0]
    for (let i = 1; i < cadena.length; i++) {
        if (cadena[i] !== cadena[i - 1]) {
            resultado += cadena[i]
        }
    }
    console.log(resultado)
}


eliminarRepetidasConsecutivas(repetidas)

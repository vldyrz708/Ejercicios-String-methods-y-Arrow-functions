let frase = "javascript es divertido"

function convertirPrimeraLetraMayuscula(cadena) {
    let palabras = cadena.split(' ')
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1)
    }
    let resultado = palabras.join(' ')
    console.log(resultado)
}

convertirPrimeraLetraMayuscula(frase)
let frase = "javascript"

function sinVocales(frase){
    let quitar = frase.replace(/[aeiou]/gi,'')
    console.log(quitar)
}
sinVocales(frase)
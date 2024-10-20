let texto = "Hola@Mundo"

function sinCaracteres(texto){
    let quitar = texto.replace(/[^a-zA-Z0-9 ]/g, '')
    console.log(quitar)
}

sinCaracteres(texto)
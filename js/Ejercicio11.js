let palabra = "hola"

function invertir (palabra){
    let separar = palabra.split("") //separa la cadena en cadenas 
    let invertirSeparacion = separar.reverse() //esto invierte el orden de las cadenas 
    let juntar = invertirSeparacion.join("")
    console.log(juntar)
}
invertir(palabra)


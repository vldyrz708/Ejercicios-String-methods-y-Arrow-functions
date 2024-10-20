let palabra = "ana"

function palindromo (palabra){
    let palabraInvertida = palabra.split("").reverse().join("")
    
    console.log(palabra === palabraInvertida)
}

palindromo(palabra)
let cadena1 = 12345
let cadena2 = "12345a"


function esSoloNumeros(cadena) {
    let esNumerica = !isNaN(cadena); // isNaN retorna false si es un número válido
    console.log(esNumerica); 
}

esSoloNumeros(cadena1)  
esSoloNumeros(cadena2)  



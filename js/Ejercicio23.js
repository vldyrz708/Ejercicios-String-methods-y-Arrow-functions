let frase = "JavaScript es genial";

function truncar(cadena, longitud) {
    let resultado;
    
    if (cadena.length > longitud) {
        
        resultado = cadena.slice(0, longitud - 3) + '...';
    } else {
        resultado = cadena;  
    }

    console.log(resultado); 
}


truncar(frase, 10);

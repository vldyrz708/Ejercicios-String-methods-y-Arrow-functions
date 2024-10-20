let texto = "Javascript"

function contar(texto,valor){
    let conto = texto.split("").reduce((a,v)=>(v===valor ? a + 1: a), 0)
    console.log(conto)

}

 contar(texto,"a")
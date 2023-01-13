"strict mode"


//lo mas parecido a trabajar con un objeto arguments 

//parametro res - spred operator

const suma = (...num) =>{

    let resultado = 0;

    for (let i = 0; i < num.length;  i++ ) {
    resultado += num[i]



    }

    console.log (resultado);

}

suma(4,4) 

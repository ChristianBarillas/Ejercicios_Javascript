//promesas

let nombre = 'pedro';


const promesa = new Promise ((resolve, reject) => {

    if (nombre !== 'pedro') reject ('el nombre no es pedro');
    else resolve(nombre)


});

// then es un meto que nos accede al valor de resolve or reject se puede acceder con then
// then es un metodo que devuelve un call back

promesa.then((resultado)=> {
    console.log(resultado)
}).catch( ( e)  =>{
    console.log(e)
} )


// arrays of object?


//create a simple game on javascript?





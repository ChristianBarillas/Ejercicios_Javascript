let nombre = 'pedro';


const promesa = new Promise ((resolve, reject) => {

    if (nombre !== 'pedro') reject ('el nombre no es pedro');
    else resolve(nombre)


});

// then es un metodo que recibe un call back
promesa.then((resultado)=> {
    console.log(resultado)
})

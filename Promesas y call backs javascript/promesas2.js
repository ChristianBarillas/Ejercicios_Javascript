class Persona {

    constructor(nombre, instagram){

        this.nombre = nombre;
        this.instagram = instagram;

    }


}

const data = [

    ['christian', '@eduard'],
    ['eduardo', '@barillas']
];



const personas = [];

for (let i = 0; i < data.length; i++){

    personas[i] = new Persona(data[i][0], data[i][1]);


}

const obtenerpersona = (id) => {

  return new Promise ((resolve, reject) => {

    if (Persona[id] == undefined){
        reject('no se encontro la persona')
    }
    else { resolve (personas[id])}
  })

};


obtenerpersona(0).then ((Persona) =>{

    console.log (Persona.nombre);

   

})


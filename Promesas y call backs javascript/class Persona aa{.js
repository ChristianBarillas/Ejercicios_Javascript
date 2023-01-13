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

    personas[i] = new Persona([i][0], data[i][1]);
}

console.log (personas[0])

// promise example python ?
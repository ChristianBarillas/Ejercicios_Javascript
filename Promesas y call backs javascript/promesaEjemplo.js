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
    
    
    }
    
    const obtenerpersona =(id) => {
    
      return new Promise ((resolve, reject) => {

        if (personas[id] == undefined){
            reject('no se encontro la persona')
        }
        else { resolve (personas[id])}
      })
    
    };
    
    
    obtenerpersona().then ((Persona) =>{

        console.log (persona.nombre);

    })
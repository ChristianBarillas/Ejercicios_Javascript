// class Persona {

//     constructor(nombre, instagram){

//         this.nombre = nombre;
//         this.instagram = instagram;

//     }


// }

// const data = [

//     ['christian', '@eduard'],
//     ['eduardo', '@barillas']
// ];



// const personas = [];

// for (let i = 0; i < data.length; i++){


// }

// const obtenerpersona =(id,cb) => {

//     if (personas[id] == undefined){

//         cb('nose ha encontrado la persona')
//     } else{
//         cb(null, personas[id])
//     }

// };


// obtenerpersona (0,(err, persona) =>{

//     if (err) {

//         console.log (err);
//     }

//     else{

//         console.log(persona.nombre);
//         console.log(persona.instagram);
//     }

// })

// const obtnerinstagram =(id,cb)=>{

//     if (personas[id].instagram == undefined){
//         cb('no se ha encontrado el instagram')
//     }

//     else {

//         cb(null, personas[id].instagram);
//     }

// }


// obtenerpersona (2,(err, persona, id) =>{

//     if (err) {

//         console.log (err);
//     }

//     else{

//         console.log(persona.nombre);
//         obtenerinstagram (id,(err, instagram) =>{

//             if (err) {
//                 console.log(err)
//             }
//             else{
//                 console.log(instagram)if (err){

//                     console.log(err)
//                 }

//                 else{
//                     console.log(instagram)
//                 }
//             }
        
//     }

//         )}
// }
// )






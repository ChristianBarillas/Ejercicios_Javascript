"use strict";
 
// const obj = {};


// Object.defineProperty(obj, 'nombre', { value: "pedro", writable: false});

// obj.nombre = "roberto"

// console.log(Object.name)



 const obj = { nombre : "lucas"};

 Object.preventExtensions (obj);

obj.apellido = "dalto"

 console.log (obj.apellido)
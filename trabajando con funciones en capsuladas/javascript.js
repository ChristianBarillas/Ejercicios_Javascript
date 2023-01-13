
"strict mode"



// document.querySelector ('.btn1').addEventListener('click', ()=> modificartexto (12));
// document.querySelector ('.btn2').addEventListener('click', () => modificartexto (20));
// document.querySelector ('.btn3').addEventListener('click', () => modificartexto (30));



// function modificartexto (tamano) {
// document.querySelector(".parrafo").style.fontSize = `${tamano}px`;
// }


// modificartexto()









const modificartexto = tamano => {

    return ()=> {
        document.querySelector('.parrafo').style.fontSize = `${tamano}px`
    }
} 

px12 = modificartexto(12);
px20 = modificartexto(20);
px30 = modificartexto (30);

document.querySelector ('.btn1').addEventListener('click', px12);
document.querySelector ('.btn2').addEventListener('click', px20);
document.querySelector ('.btn3').addEventListener('click', px30);



modificartexto()
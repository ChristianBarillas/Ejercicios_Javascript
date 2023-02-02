const video = "https://www.youtube.com/watch?v=2HwgXcPaFm8&list=RDGMEMMib4QpREwENw3_jAc0YgNw&index=16&ab_channel=DariannGonz%C3%A1lez"


const url = new URL(video);

const resultado = url.hostname;
const resultado2 = url.searchParams.get("gonzales");


console.log(resultado2)



const m = new Map();

m.set(10, 100);
m.set('apple', 200);
m.delete(10)

console.log(m.size)

for (t of m.values()){
    console.log(t)
}


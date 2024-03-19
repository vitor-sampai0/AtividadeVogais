let consoante = ["b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "e", "z"]
let vogais = ['a', 'e', 'i', 'o', 'u'];
let texto = "vitor sampaio e super daora";

let arrayletras = texto.split("");



let arrayvogais = [];

let arrayconsoante = []

for(let i = 0; i < arrayletras.length; i++){
    if(vogais.includes(arrayletras[i])){
        arrayvogais.push(arrayletras[i]);
        }
        if(consoante.includes(arrayletras[i])){
            arrayconsoante.push(arrayletras[i])
        };
}


console.log("texto original:", texto)
console.log("vogais encontradas:", arrayvogais.toString());
console.log("total de vogais:" + arrayvogais.length)
console.log("consoantes encontradas:", arrayconsoante.toString());
console.log("total de consoantes:" + arrayconsoante.length)

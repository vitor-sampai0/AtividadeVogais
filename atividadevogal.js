//declarando um array de consoantes
let consoante = ["b", "c", "d", "f", "g",
 "j", "k", "l", "m", "n", "p", "q", "r",
  "s", "t", "v", "w", "x", "y", "z"]
//declarand um array de vogais
let vogais = ['a', 'e', 'i', 'o', 'u'];
//declarando o texto de entrada
let texto = "o rato roeu a roupa do rei de roma";
// Dividindo o texto em um array de caracteres individuais
let arrayletras = texto.split("");
//declarando arrays para armazenar vogais, consoantes e espaços
let arrayvogais = [];
let arrayconsoante = []
let arrayespaco = [];
// Iterando sobre cada caractere no array de letras
for(let i = 0; i < arrayletras.length; i++){
    if(vogais.includes(arrayletras[i])){
        arrayvogais.push(arrayletras[i]);
        }
        if(consoante.includes(arrayletras[i])){
            arrayconsoante.push(arrayletras[i])
        }
        if(arrayletras[i] === ' ') {
            arrayespaco++;
        }
}
// Exibindo os resultados
console.log("texto original:", texto)
console.log("vogais encontradas:", arrayvogais.toString());
console.log("total de vogais:" + arrayvogais.length)
console.log("consoantes encontradas:", arrayconsoante.toString());
console.log("total de consoantes:" + arrayconsoante.length)
console.log("total de espaços:" + arrayespaco)
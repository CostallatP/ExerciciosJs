const notas = [6.7,7.9,8.1,7.7,3.4];

for(i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: `Ana`,
    sobrenome: 'silva',
    idade:29,
    peso:64
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
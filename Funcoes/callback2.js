const notas = [7,6,9,3,7,9]

const notasBaixas = []
    for(let i in notas){
        if (notas[i]<7)
        notasBaixas.push(notas[i])
    }
console.log(notasBaixas)

const notasBaixas2 = notas.filter(function(nota){
    return nota<7
})
console.log(notasBaixas2)

const notasBaixas3 =notas.filter(nota=>nota<7)
console.log(notasBaixas3)


const nB = n=>n<7



const baixaNotas =notas.filter(nB)
console.log(baixaNotas) 
/*const notasBaixas = []
    for(let i in notas){
        if (notas[i]<7)
        notasBaixas.push(notas[i])
    }
console.log(notasBaixas)*/
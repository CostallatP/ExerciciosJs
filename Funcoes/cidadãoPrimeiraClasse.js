function fun1() {
}

const func2 = function (){
}

const array = [function (a,b){return a + b}, fun1, func2]
console.log(array[0](10,10))
const obj = {}
obj.falar=function(){return'opa'}
console.log(obj.falar())

function run(fun){
    fun()
}
run(function(){ console.log('executando.......')})

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)
const mSoma = soma(2,3)
mSoma(4)
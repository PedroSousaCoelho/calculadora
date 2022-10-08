function insert(num){
    var numero = document.getElementById('p-teste').innerHTML
    var numero1 = document.getElementById('p-teste').innerHTML = numero + num
}
function clean(){
    document.getElementById('p-teste').innerHTML = ""
}
function back(){ 
    var resultado = document.getElementById('p-teste').innerHTML
    document.getElementById('p-teste').innerHTML = resultado.substring(0, resultado.length -1)
}
function calcular(){
    var resultado = document.getElementById('p-teste').innerHTML

    if(resultado){
        document.getElementById('p-teste').innerHTML = eval(resultado)
    }
}
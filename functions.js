function sumar(a, b){
    return a + b
}

function restar(num1, num2){
    return num1 - num2
}

function mayorTresNumeros(a, b, c){
    if(a > b && a > c){
        return "El mayor es A"
    } else if (b > c){
        return "El mayor es B"
    } else {
        return "El mayor es C"
    }
}

module.exports = {
    sumar,
    restar,
    mayorTresNumeros
}
var valor;
var resultado;

function btn(num){
    valor = document.calculadora.visor.value += num;
}

function calcula(){
    resultado = eval(valor);
    document.calculadora.visor.value = resultado;
}
let operacaoAtual ='';
let operador ='';
let resultado = 0;


function adicionarNumero (numero){
    operacaoAtual += numero;
    atualizarTela (operacaoAtual);
}

function adicionarOperacao(operacao){
if (operacaoAtual !== '' && !/[\+\-\*\/]$/.test(operacaoAtual)){
    operador = operacao;
    operadorAtual += operacao;
    atualizarTela(operacaoAtual);
    }      
}

function calcular(){
try {
    resultado = eval(operacaoAtual);
    atualizarTela(resultado);
    operacaoAtual = resultado.toString();
} catch (e) {
    atualizarTela('ERRO');
    operacaoAtual ='';
    }
}

function limpar(){
    operacaoAtual='';
    operador='';
    resultado= 0;
    atualizarTela(0);
}

function atualizarTela(valor){
    document.getElementById('resultado').innerHTML = valor;
}
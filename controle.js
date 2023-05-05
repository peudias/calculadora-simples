let tela = document.getElementById('tela');

function addTela(valor) {
    tela.value += valor;
}

function limparTela() {
    tela.value = "";
}

function calcular() {
    let result = eval(tela.value);
    tela.value = result;
}

function backspace() {
    tela.value = tela.value.slice(0, -1);
}
let listaCompras = prompt("digite sua lista de compras seprando itens por virgula");

let estoque = 5;

let loginPredefinido = "a";
let senhaPreDefinida = 123;
let login = prompt("digite o login");
let senha = Number(prompt("digite a senha númerica"));

let idade = Number(prompt("Qual sua idade?"));

let peso = Number(prompt("qual seu peso em kg ?"));
let altura = Number(prompt("qual sua altura em metros ?"));

let real = Number(prompt("insira o valor em reais"));

let prova1 = Number(prompt("qual o valor de sua primeira prova ?"))
let peso1 = Number(prompt("qual o peso de sua primeira prova ?"))
let prova2 = Number(prompt("qual o valor de sua segunda prova ?"))
let peso2 = Number(prompt("qual o peso de sua segunda prova ?"))
let prova3 = Number(prompt("qual o valor de sua terceira prova ?"))
let peso3 = Number(prompt("qual o peso de sua terceira prova ?"))

let valorProduto = Number(prompt("qual o valor do produto desejado"));
let porcentagemDesconto = Number(prompt("qual a porcentagem de desconto do produto ?"));

    if (idade > 17) {
        alert(`entrada liberada`);
    }
    else {
        alert(`entrada negada`);
    }
    
 function calculoImc() {

    let imc = (peso / (altura * altura));
    alert(`seu imc é de ${imc}`);
}

function conversãoMoeda() {
    let cambio = real / 5.15 //cotação de 6/10

    alert(`seu suado dinheiro valerá ${cambio} neste maldito pais imperialista `);
}

function pegarDoEstoque() {
    estoque - 1;
    if (estoque > 0) {
        alert(`produto pego com sucesso`);
    }
    if (estoque <= 0) {
        alert(`produto indisponivel`);
    }
}

function médiaPonderada() {
alert(`a sua média é de ${((prova1*peso1) + (prova2*peso2) + (peso3*prova3)) / (peso1*peso2*peso3)}`)
}
function exibirLista() {
alert(`sua lista de compras é ${listaCompras}`);
}
function verificarLogin() {
    if (loginPredefinido != login && senha != senhaPreDefinida) {
    alert(`acesso negado;`)
    } else {
    alert(`acesso liberado`)
    }
}
function calcularDesconto() {
    
    let desconto = (porcentagemDesconto/100)*valorProduto;
    alert(`o valor do produto agora é de ${valorProduto-desconto} sendo o desconto de ${desconto}`)
}

alert(calculoImc());
alert(conversãoMoeda());
alert(pegarDoEstoque());
alert(médiaPonderada());
alert(exibirLista());
alert(verificarLogin());
alert(calcularDesconto());
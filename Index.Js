let listaCompras = prompt("digite sua lista de compras seprando itens por virgula");
let estoque = 5;
let loginPredefinido = a;
let senhaPreDefinida = 123;
let login = prompt("digite o login");
let senha = Number(prompt("digite a senha númerica"));
let idade = Number(prompt("Qual sua idade?"));
let peso = Number(prompt("qual seu peso em kg ?"));
let altura = Number(prompt("qual sua altura em metros ?"));
let real = Number(prompt("insira o valor em reais"));
let prova1 = Number(prompt("qual o peso de sua primeira prova ?"))
let prova2 = Number(prompt("qual o peso de sua segunda prova ?"))
let prova3 = Number(prompt("qual o peso de sua terceira prova ?"))
let valorProduto = number(prompt("qual o valor do produto desejado"));
let porcentagemDesconto = number(prompt("qual a porcentagem de desconto do produto ?"));

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return alert(`entrada liberada`);
    }
    else {
        return alert(`entrada negada`);
    }
    
} function calculoImc(peso,altura) {

    let imc = peso / (altura * altura);
    return alert(`seu imc é de ${imc}`);
}

function conversãoMoeda() {
    let cambio = real / 5.15 //cotação de 6/10

    return alert(`seu suado dinheiro valerá ${cambio} neste maldito pais imperialista `);
}

function pegarDoEstoque(estoque) {
    estoque - 1;
    if (estoque > 0) {
        return alert(`produto pego com sucesso`);
    }
    if (estoque <= 0) {
        return alert(`produto indisponivel`);
    }
}

function médiaPonderada(prova1,prova2,prova3) {
    alert(`a sua média é de ${(prova1 + prova2 + prova3) / 3}`)
}
function exibirLista(listaCompras) {
    alert(`sua lista de compras é ${listaCompras}`);
}
function verificarLogin(login,loginPredefinido,senha,senhaPreDefinida) {
    if (loginPredefinido != login && senha != senhaPreDefinida) {
        alert(`acesso negado;`)
    } else {
        alert(`acesso liberado`)
    }
}
function calcularDesconto(valorProduto,porcentagemDesconto) {
    
    let desconto = (porcentagemDesconto/100)*valorProduto;
    alert(`o valor do produto agora é de ${valorProduto+desconto} sendo o desconto de ${desconto}`)
}

maiorDeIdade(18);
calculoImc(70 , 1.80);
conversãoMoeda(10.00);
pegarDoEstoque();
médiaPonderada(5,10,8);
exibirLista(listaCompras);
verificarLogin(login,loginPredefinido,senha,senhaPreDefinida);
calcularDesconto(valorProduto,porcentagemDesconto);

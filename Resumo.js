let idade = prompt("qual sua idade ");
if(idade < 18){
    console.log("entrada negada")
}else{
    console.log("entrada liberada");
}

let peso = prompt("qual seu peso em kg ?");
let altura = prompt("qual sua altura em metros ?");
let imc = peso / (altura*altura);
console.log("seu imc é de "+imc);

let real = prompt("insira o valor em reais");
let cambio = real*
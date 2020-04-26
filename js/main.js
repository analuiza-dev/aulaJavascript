
function funcaoChange(elemento){
    console.log(elemento.value)
}

function load(){
    alert("Página carregada");
}

function clicou(){
    document.getElementById("agradecimento").innerHTML =
     "<i>Obrigado por clicar</i>";
    //alert("Obrigado por clicar!!");
}

function redirecionar(){
    window.open("https://www.google.com.br/");
}

function trocar(){
    document.getElementById("mousemove").innerHTML =
    "<b>Obrigado por passar o mouse</b>";
}

function voltar(){
    document.getElementById("mousemove").innerHTML =
    "Passe o mouse aqui";
}

function trocar2(elemento){
    elemento.innerHTML =
    "<b>Obrigado por passar o mouse 2</b>";
}

function voltar2(elemento){
    elemento.innerHTML =
    "Passe o mouse aqui 2";
}

/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    if (idade >= 18){
        return "Maior de idade";
    }else{
        return "Menor de idade";
    }
}
var idade = prompt("Qual sua idade?");
alert(validaIdade(idade));
alert(soma(5, 10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão", "Japão", "Brasil" ));
*/
// DATA
/*
var d = new Date();
alert(d);
alert(d.getMonth() + 1);
alert(d.getMinutes());
*/
// FOR
/*
var count = 0
for (count; count <= 5; count++) {
    alert(count);
}
*/
// WHILE
/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}
*/
// IF ELSE
/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/
// ARRAY
/*
var frutas = [{ nome:"maça", cor:"vermelha"},
{ nome:"uva", cor:"roxa"}];
console.log(frutas);
console.log(frutas[1].nome)
*/
// VETOR
/*
var fruta = { nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
console.log(fruta.cor);
*/

// var nome = "Ana Luiza";
// var idade = 18;
// var idade2 = 10;
// alert(nome + " tem " + idade + " anos.");
// alert(idade + idade2);
// var lista = ["maça", "pêra", "laranja"];
// lista.pop();
// lista.push("uva");
// lista.length();
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(" - "));
/*
//alert("Meu Primeiro JS")
var nome1 = "José";
var nome2 = "Maria";
var idade1 = 29;
var idade2 = 10;
var soma = (idade1 + idade2);
var frase = "Brasil é melhor time do mundo";

/*Criação de variáveis e uso do alert
	alert(nome1 + " "+ nome2+" " +(idade1+idade2));
	console.log(nome1);
	console.log(soma);
	console.log(frase);
	console.log(frase.toUpperCase());/

//Ações com lista
var lista = ["macã", "pêra", "laranja"];
lista.push("banana");
console.log(lista);

//Datas
nome1 = prompt("Digite seu nome: ");

alert("Homem = 1" + "\n" + "e Mulher = 2");
sexo = prompt("Digite seu sexo: ");

//alert(typeof sexo);

/*if(sexo==1){
	alert("Seja bem vindo "+nome1);
}else{
	alert("Seja bem vinda "+nome1);}/

switch (sexo) {
	case "1": alert("Seja bem vindo " + nome1);
		break;
	case "2": alert("Seja bem vinda " + nome1);
		break;
	default: alert("Escolha uma opção: ")
}
var tempo = new Date();
alert("Hoje é dia: " + tempo.getDate() + " / " + (tempo.getMonth() + 1) + " / " + (tempo.getYear() + 1900));
*/

//funções
function soma(n1, n2) {
	return n1 + n2;
}

alert("n1 é: " + typeof n1);
alert("n1 é: " + typeof n2);
alert("1 + 9 = " + soma(1, 19));
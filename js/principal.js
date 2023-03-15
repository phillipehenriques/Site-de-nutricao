var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.getElementById("#primeiro-paciente"); // Acessando '#primeiro paciente' e atribuindo a variavel

var tdPeso = paciente.querySelector(".info-peso");  // Acessando '.info-peso' e atribuindo a variavel
var peso = tdPeso.textContent // Acessando o conteúdo de 'td peso' e atribuindo a variavel

var tdAltura = paciente.querySelector(".info-altura"); // Acessando '.info-altura' e atribuindo a variavel
var altura = tdAltura.textContent // Acessando o conteúdo de 'td altura' e atribuindo a variavel

var tdIMC = paciente.querySelector(".info-imc") // Acessando '.info-imc' e atribuindo a variavel
var IMC = peso / (altura * altura) // Definindo a varáivel 'IMC' com base no cálculo de IMC

tdIMC.textContent = IMC // Acessando o conteúdo de 'tdIMC' e definindo que o conteúdo deve ser a variável IMC




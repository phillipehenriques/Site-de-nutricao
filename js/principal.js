var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente"); // Seleção do paciente

console.log(paciente)

var tdPeso = paciente.querySelector(".info-peso");  // Seleção do peso
var peso = tdPeso.textContent // Seleção do conteúdo do TD peso

var tdAltura = paciente.querySelector(".info-altura"); // Seleção da altura
var altura = tdAltura.textContent // Seleção do conteúdo do TD altura

var IMC = peso / altura * altura

// console.log(IMC)
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); // Acessando '.paciente' e atribuindo a variavel

for(var i = 0; i < pacientes.length ; i++) {
        var paciente = pacientes[i] // atribuindo a lista de pacientes a variável 'paciente'

        var tdPeso = paciente.querySelector(".info-peso");  // Acessando '.info-peso' e atribuindo a variavel
        var peso = tdPeso.textContent // Acessando o conteúdo de 'td peso' e atribuindo a variavel

        var tdAltura = paciente.querySelector(".info-altura"); // Acessando '.info-altura' e atribuindo a variavel
        var altura = tdAltura.textContent // Acessando o conteúdo de 'td altura' e atribuindo a variavel

        var tdIMC = paciente.querySelector(".info-imc") // Acessando '.info-imc' e atribuindo a variavel

        // --- Validação ---

        var pesoValido = true //  variavel é verdadeira
        var alturaValida = true //  variavel é verdadeira

        if (peso <= 0  || peso >= 400) { // <<-- VALIDANDO PESO

            alert("Tem certeza que isso está certo?")
            pesoValido = false  // a variavel se torna falsa
            tdIMC.textContent = "Peso Inválido"
            paciente.style.color = "white"
            paciente.classList.add("paciente-invalido")
        }

        if (altura <= 0  || altura >= 2.50) { // <<-- VALIDANDO ALTURA

            alert("Tem certeza que isso está certo?")
            alturaValida = false  // a variavel se torna falsa
            tdIMC.textContent = "Altura Inválida"
            paciente.style.color = "white"
            paciente.classList.add("paciente-invalido")
        }

        // --- Definindo o cálculo de IMC e passando ele para tdIMC ---

        if (alturaValida && pesoValido) { // se os dois valores forem 'true' o bloco é executado

            var IMC = peso / (altura * altura) // Definindo a varáivel 'IMC' com base no cálculo de IMC
        tdIMC.textContent = IMC.toFixed(2) // Acessando o conteúdo de 'tdIMC' e definindo que o conteúdo deve ser a variável IMC

        }
}

// adicionando pacientes por evento de clique

var botao = document.getElementById("adicionar-paciente") //atribuindo ID do botão à variável 'botao'

botao.addEventListener("click", adicionarPaciente) // aguardando clique para chamar função 'adicionar paciente'

function adicionarPaciente() {
    alert("funcionou")
}



// adicionando pacientes por evento de clique


var botaoAdicionar = document.getElementById("adicionar-paciente") //atribuindo ID do botão à variável 'botao'
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault()
    
    var form = document.querySelector("#form-adiciona") // atribuindo o id do form (form-adiciona), para a variável form
    
    var paciente = obtemPaciente(form) // atribuindo a função 'obtemPaciente' para a variável paciente

    var pacienteTr = montaTr(paciente)

    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)

})

// criando função 'obtem paciente' que recebe form

function obtemPaciente(form) {

    // criando um objeto chamado 'paciente' e atribuindo suas características

    var paciente = { 
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcular(form.peso.value, form.altura.value)
    }
    console.log(paciente)
    return paciente // função 'obtemPaciente' retorna o valor 'paciente' com todas as suas características 
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr") // criando tr do paciente
    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")

    nomeTd.textContent = paciente.nome
    pesoTd.textContent = paciente.peso
    alturaTd.textContent = paciente.altura
    gorduraTd.textContent = paciente.gordura
    imcTd.textContent = paciente.imc

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr
}


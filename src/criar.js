function choose(){
    alert('aaa')  
}


function criar(){
    let avisoCampo = document.getElementById('avisoCampo')
    avisoCampo.innerText = "** Na area campo preencha com o nome das colunas de seu Banco de dados e escolha com qual dado ira preencher"
    var buttonCriar = document.getElementById('criar')
    buttonCriar.style.display = 'none'
    let enviar = document.getElementById('enviar')
    enviar.style.display = 'inline'
    
    let campos = document.getElementById('nCampos').value
    let criaCampos = document.getElementById('criaCampos')
    //window.alert('Serão Criados  '+campos+'  Campos')
    
    for(let i=1;i <= campos;i++){
        var newLabel = document.createElement('label')
        newLabel.innerText = `Campo ${i}`
        //CRIA INPUT TEXT
            var newInput = document.createElement('input') //CRIA CAMPOS
            newInput.type = 'text' //SETA COMO TEXT OS CAMPOS
            newInput.className = 'text'
            newInput.id = 'i'+i //ID DOS INPUTS
        //INSERE INPUT SELECT COM AS OPTIONS
            var newSelect = document.createElement('select')

            newSelect.innerHTML = '<option disabled="disabled" class="title">NOMES</option>'
            newSelect.innerHTML += '<option class="optionName">Nome</option>'
            newSelect.innerHTML += '<option class="optionlastName">Nome do Meio</option>'
            newSelect.innerHTML += '<option class="optionfindName">Ultimo Nome</option>'
            newSelect.innerHTML += '<option class="optionSobrenome">Sobrenome</option>'
            newSelect.innerHTML += '<option class="optionNMulher">Nome Mulher</option>'
            newSelect.innerHTML += '<option class="optionNHomen">Nome Homen</option>'
            newSelect.innerHTML += "<option disabled='disabled' class='title'>DADOS</option>"
            newSelect.innerHTML += '<option class="optionNascimento">Nascimento</option>'
            newSelect.innerHTML += '<option class="optionRG">RG</option>'
            newSelect.innerHTML += '<option class="optionCPF">CPF</option>'
            newSelect.innerHTML += '<option class="optionEmail">E-mail</option>'
            newSelect.innerHTML += '<option class="optionEndereco">Endereco</option>'
            newSelect.innerHTML += '<option class="optionCidade">Cidade</option>'
            newSelect.innerHTML += '<option class="optionPais">Pais</option>'
            newSelect.innerHTML += '<option class="optionCep">CEP</option>'
            newSelect.innerHTML += '<option class="optionTelefone">Telefone</option>'
            newSelect.innerHTML += "<option disabled='disabled' class='title'>IDs</option>"
            newSelect.innerHTML += '<option class="randomID">ID randomico</option>'
            newSelect.innerHTML += "<option disabled='disabled' class='title'>Trabalho</option>"
            newSelect.innerHTML += '<option class="optionFuncao">Funcao</option>'
            newSelect.innerHTML += '<option class="optionJobTitle">JobTitle</option>'
            newSelect.innerHTML += '<option class="optionjobArea">jobArea</option>'
            newSelect.innerHTML += '<option class="optionSalario">salario</option>'
            newSelect.id = 's'+i
        //INSERINDO DENTRO DA DIV
            criaCampos.appendChild(newLabel) //INSERE DENTRO DA DIV
            criaCampos.appendChild(newInput) //INSERE DENTRO DA DIV
            newSelect.className = 'select' //DEFINE UMA CLASSE AO SELECT
            newSelect.onchange = "choose()"
            criaCampos.appendChild(newSelect) //INSERE DENTRO DA DIV
        }
        //botaoTabela()    
}



module.exports = criar
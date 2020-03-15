function criar(){
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
        //INSERE INPUT SELECT
            var newSelect = document.createElement('select')
            newSelect.innerHTML = '<option>Nome</option>'
            newSelect.innerHTML += '<option>Nome Mulher</option>'
            newSelect.innerHTML += '<option>Nome Homen</option>'
            newSelect.innerHTML += '<option>Sobrenome</option>'
            newSelect.innerHTML += '<option>E-mail</option>'
            newSelect.innerHTML += '<option>Endereco</option>'
            newSelect.innerHTML += '<option>Cidade</option>'
            newSelect.innerHTML += '<option>Pais</option>'
            newSelect.innerHTML += '<option>Telefone</option>'
            newSelect.id = 's'+i
        //INSERINDO DENTRO DA DIV
            criaCampos.appendChild(newLabel) //INSERE DENTRO DA DIV
            criaCampos.appendChild(newInput) //INSERE DENTRO DA DIV
            criaCampos.appendChild(newSelect) //INSERE DENTRO DA DIV
        }
        botaoTabela()    
}

//INSERIR BOTÃO PARA REALIZAR CONSULTA
    function botaoTabela(){
        var newButton = document.createElement('button')
        newButton.style.backgroundColor = '#090'
        newButton.style.color = '#fff'
        newButton.style.padding = '10px'
        newButton.style.borderColor = '#090'
        newButton.id = 'btnTabela'
        criaCampos.appendChild(newButton)
        newButton.innerText = 'TABELA'
        document.getElementById('btnTabela').addEventListener("click", tabela); //CHAMA FUNCAO
    }

//CRIA TABELAS COM OS DADOS FAKES PARA MOSTRAR AO USUARIO ANTES DE INSERIR NO BANCo
    function tabela(){
        var newTable = document.createElement('table') //CRIADO TABELA
                            
        for(let r =0; r <= 4; r++){
            var row = document.createElement("tr");
            var cell = document.createElement("td");
            var cellText = document.createTextNode("A");
                
                for(let c=0; c <= 4; c++){
                    var cell = document.createElement("td");
                    var cellText = document.createTextNode("CELULA");
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
            newTable.appendChild(row);
        }
        criaCampos.appendChild(newTable);
        newTable.setAttribute("border", "2");
    }
var mysql = require('mysql');
const faker = require('faker')

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
            newSelect.innerHTML = '<option class="optionNome">Nome</option>'
            newSelect.innerHTML += '<option class="optionNMulher">Nome Mulher</option>'
            newSelect.innerHTML += '<option class="optionNHomen">Nome Homen</option>'
            newSelect.innerHTML += '<option class="optionSobrenome">Sobrenome</option>'
            newSelect.innerHTML += '<option class="optionEmail">E-mail</option>'
            newSelect.innerHTML += '<option class="optionEndereco">Endereco</option>'
            newSelect.innerHTML += '<option class="optionCidade">Cidade</option>'
            newSelect.innerHTML += '<option class="optionPais">Pais</option>'
            newSelect.innerHTML += '<option class="optionTelefone">Telefone</option>'
            newSelect.id = 's'+i
        //INSERINDO DENTRO DA DIV
            criaCampos.appendChild(newLabel) //INSERE DENTRO DA DIV
            criaCampos.appendChild(newInput) //INSERE DENTRO DA DIV
            criaCampos.appendChild(newSelect) //INSERE DENTRO DA DIV
        }
        //botaoTabela()    
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
        var nC = document.getElementById('nCampos').value
        var nL = document.getElementById('nLinhas').value
        

        for(let r =0; r < nL; r++){
            var row = document.createElement("tr");
            var cell = document.createElement("td");
            var cellText = document.createTextNode("A");
                
                for(let c=0; c < nC; c++){
                    var cell = document.createElement("td");
                    var cellText = document.createTextNode("");
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
            newTable.appendChild(row);
        }
        criaCampos.appendChild(newTable);
        newTable.setAttribute("border", "2");
    }
//CONFIGURAÇÃO DE CONEXAO
function conectar(){
    // Add the credentials to access your database
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : null, // or the original password : 'apaswword'
        database : 'test'
    });
    
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }else{
            console.log('Ok')
        }
    });
}

function insertFaker(){
    //botaoTabela()
    //var randomName = faker.name.findName(); // Rowan Nikolaus
    //var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    //var randomCard = faker.helpers.createCard(); // random contact card containing many properties

    var s1 = document.getElementById('s1').value    
        
    let opcao = s1

    for(let i=0;i<2;i++){
        if (s1 == 'Nome') {
            console.log('nome')
        }else if (opcao == 'Nome Mulher'){
            console.log('Nome Mulher')
        }else if (opcao == 'Nome Homen'){
            console.log('Nome Homen')
        }else if (opcao == 'Sobrenome'){
            console.log('Sobrenome')
        }else if (opcao == 'E-mail'){
            console.log('E-mail')
        }else if (opcao == 'Endereco'){
            console.log('Endereco')
        }else if (opcao == 'Cidade'){
            console.log('Cidade')
        }else if (opcao == 'Pais'){
            console.log('Pais')
        }else if (opcao == 'Telefone'){
            console.log('Telefone')
        }
    }
}
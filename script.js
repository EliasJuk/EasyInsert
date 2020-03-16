var mysql = require('mysql');
const faker = require('faker/locale/pt_BR')

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
            newSelect.innerHTML += '<option class="optionlastName">lastName</option>'
            newSelect.innerHTML += '<option class="optionfindName">findName</option>'
            newSelect.innerHTML += '<option class="optionSobrenome">Sobrenome</option>'
            newSelect.innerHTML += '<option class="optionNMulher">Nome Mulher</option>'
            newSelect.innerHTML += '<option class="optionNHomen">Nome Homen</option>'
            newSelect.innerHTML += '<option class="optionNascimento">Nascimento</option>'
            newSelect.innerHTML += '<option class="optionRG">RG</option>'
            newSelect.innerHTML += '<option class="optionCPF">CPF</option>'
            newSelect.innerHTML += '<option class="optionEmail">E-mail</option>'
            newSelect.innerHTML += '<option class="optionEndereco">Endereco</option>'
            newSelect.innerHTML += '<option class="optionCidade">Cidade</option>'
            newSelect.innerHTML += '<option class="optionPais">Pais</option>'
            newSelect.innerHTML += '<option class="optionCep">CEP</option>'
            newSelect.innerHTML += '<option class="optionTelefone">Telefone</option>'
            newSelect.innerHTML += '<option class="optionFuncao">Funcao</option>'
            newSelect.innerHTML += '<option class="optionJobTitle">JobTitle</option>'
            newSelect.innerHTML += '<option class="optionjobArea">jobArea</option>'
            newSelect.innerHTML += '<option class="optionSalario">salario</option>'
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

    var select = 's1' //POSIÇÃO INICIAL DA BUSCA
    var buscar = document.getElementById(select).value  //CONSULTA INICIAL 
    var opcao = buscar //ATRIBUI O VALOR DO PRIMEIRO CAMPO A OPCAO
    var max = document.getElementById('nCampos').value //NUMERO MAXIMO DE REPETICOES
    var cont = 0
    let arrayCad = []

    for(let i=0;i<max;i++){
        cont++
        var select = ('s'+cont)
        console.log(select)
        var opcao = document.getElementById(select).value
        console.log(opcao)

        if (opcao == 'Nome') {
            var randomName = faker.name.firstName();
            console.log('Nome:'+ randomName)
            arrayCad.push(randomName)

        }else if (opcao == 'lastName'){
            var randomLastName = faker.name.lastName();
            console.log('Nome do Meio: ' + randomLastName)
            arrayCad.push(randomLastName)

        }else if (opcao == 'findName'){
            var randomSobrenome = faker.name.findName();
            console.log('Ultimo Nome' + randomSobrenome)   
            arrayCad.push(randomSobrenome)           
    
        }else if (opcao == 'Sobrenome'){
            var randomSobrenome = faker.name.findName();
            console.log('Sobrenome' + randomSobrenome)   
            arrayCad.push(randomSobrenome)           

        }else if (opcao == 'Nome Mulher'){
            var randomNameFemale = faker.name.findName();
            console.log('nome:' + randomNameFemale)
            arrayCad.push(randomNameFemale)

        }else if (opcao == 'Nome Homen'){
            var randomNameMan = faker.name.findName();
            console.log('Nome Homen:' + randomNameMan)
            arrayCad.push(randomNameMan)

        }else if (opcao == 'Nascimento'){
            var Nascimento = faker.date.month();            
            console.log('Nascimento:' + Nascimento)
            arrayCad.push(Nascimento)

        }else if (opcao == 'CPF'){
            var CPF = faker.address.zipCode();
            console.log('CPF:' + CPF)
            arrayCad.push(CPF)

        }else if (opcao == 'RG'){
            var RG = faker.address.zipCode();
            console.log('RG:' + RG) 
            arrayCad.push(RG)   
    
        }else if (opcao == 'E-mail'){
            var randomEmail = faker.internet.email();
            console.log(randomEmail)
            arrayCad.push(randomEmail)

        }else if (opcao == 'Endereco'){
            var address = faker.address.streetName()
            console.log('Endereco:' + address)
            arrayCad.push(address)

        }else if (opcao == 'Cidade'){
            var cidade = faker.address.city()
            console.log('Cidade:' + cidade)
            arrayCad.push(cidade)

        }else if (opcao == 'Pais'){
            var pais = faker.address.country()
            console.log('Cidade:' + pais)
            arrayCad.push(pais)

        }else if (opcao == 'Telefone'){
            var telefone = faker.phone.phoneNumber()
            console.log('Telefone: ' + telefone)
            arrayCad.push(telefone)

        }else if (opcao == 'Funcao'){
            var Funcao = faker.name.jobType()
            console.log('Funcao: ' + Funcao)
            arrayCad.push(Funcao)

        }else if (opcao == 'JobTitle'){
            var JobTitle = faker.name.jobTitle()
            console.log('JobTitle: ' + JobTitle)
            arrayCad.push(JobTitle)

        }else if (opcao == 'jobArea'){
            var jobArea = faker.name.jobArea()
            console.log('jobArea: ' + jobArea)
            arrayCad.push(jobArea)

        }else if (opcao == 'CEP'){
            var CEP = faker.address.zipCode()
            console.log('CEP: ' + CEP)
            arrayCad.push(CEP)

        }else if (opcao == 'salario'){
            var salario = faker.finance.amount()
            console.log('salario: ' + salario)
            arrayCad.push(salario)
        }
    }
    console.log(arrayCad)

}

//console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));

function cadBanco(){




}
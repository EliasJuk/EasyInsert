const faker = require('faker/locale/pt_BR') //IMPORTA A BLIBLIOTECA FAKER
var arrayCad = [] //VARIAVEL GLOBAL PARA PASSAR OS VALORES DO FAKER

//IMPORTA O ARQUIVO QUE CRIA OS INPUTS E SELECTS/OPTIONS
const criar = require('./src/criar')

//IMPORT O ARQUIVO DE CONEXÃO COM O BANCO DE DADOS
const connection = require('./src/connection')

function limpar(){
    console.log('Antes: '+arrayCad)
    var arrayCad = 0
    var arrayCad = []
    window.alert('LIMPO')
    console.log('Depos: '+arrayCad)
}


function insertFaker(){
    var buttonEnviar = document.getElementById('enviar')
    //buttonEnviar.style.display = 'none'
    var select = 's1' //POSIÇÃO INICIAL DA BUSCA
    var buscar = document.getElementById(select).value  //CONSULTA INICIAL 
    var opcao = buscar //ATRIBUI O VALOR DO PRIMEIRO CAMPO A OPCAO
    var max = document.getElementById('nCampos').value //NUMERO MAXIMO DE REPETICOES
    var cont = 0
    for(let i=0;i<max;i++){
        cont++
        var select = ('s'+cont)
        console.log(select)
        var opcao = document.getElementById(select).value
        console.log(opcao)

        if (opcao == 'Nome') {
            var randomName = faker.name.firstName();
            console.log('Nome:'+ randomName)
            arrayCad.push(`'${randomName}'`)

        }else if (opcao == 'lastName'){
            var randomLastName = faker.name.lastName();
            console.log('Nome do Meio: ' + randomLastName)
            arrayCad.push(`'${randomLastName}'`)

        }else if (opcao == 'findName'){
            var randomSobrenome = faker.name.findName();
            console.log('Ultimo Nome' + randomSobrenome)   
            arrayCad.push(`'${randomSobrenome}'`)           
    
        }else if (opcao == 'Sobrenome'){
            var randomSobrenome = faker.name.findName();
            console.log('Sobrenome' + randomSobrenome)   
            arrayCad.push(`'${randomSobrenome}'`)           

        }else if (opcao == 'Nome Mulher'){
            var randomNameFemale = faker.name.findName();
            console.log('nome:' + randomNameFemale)
            arrayCad.push(`'${randomNameFemale}'`)

        }else if (opcao == 'Nome Homen'){
            var randomNameMan = faker.name.findName();
            console.log('Nome Homen:' + randomNameMan)
            arrayCad.push(`'${randomNameMan}'`)

        }else if (opcao == 'Nascimento'){        
            let mesNasc = Math.floor(Math.random() * 13);
            let diaNasc = Math.floor(Math.random() * 30);
            let anoNasc = Math.floor(Math.random() * 2005);    
            let Nascimento = (`${anoNasc}-${mesNasc}-${diaNasc}`)  
            console.log('Nascimento:' + Nascimento)      
            arrayCad.push(`'${Nascimento}'`)

        }else if (opcao == 'CPF'){
            var CPF = faker.address.zipCode();
            console.log('CPF:' + CPF)
            arrayCad.push(`'${CPF}'`)

        }else if (opcao == 'RG'){
            var RG = faker.address.zipCode();
            console.log('RG:' + RG) 
            arrayCad.push(`'${RG}'`)   
    
        }else if (opcao == 'E-mail'){
            var randomEmail = faker.internet.email();
            console.log(randomEmail)
            arrayCad.push(`'${randomEmail}'`)

        }else if (opcao == 'Endereco'){
            var address = faker.address.streetName()
            console.log('Endereco:' + address)
            arrayCad.push(`'${address}'`)

        }else if (opcao == 'Cidade'){
            var cidade = faker.address.city()
            console.log('Cidade:' + cidade)
            arrayCad.push(`'${cidade}'`)

        }else if (opcao == 'Pais'){
            var pais = faker.address.country()
            console.log('Cidade:' + pais)
            arrayCad.push(`'${pais}'`)

        }else if (opcao == 'Telefone'){
            var telefone = faker.phone.phoneNumber()
            console.log('Telefone: ' + telefone)
            arrayCad.push(`'${telefone}'`)

        }else if (opcao == 'Funcao'){
            var Funcao = faker.name.jobType()
            console.log('Funcao: ' + Funcao)
            arrayCad.push(`'${Funcao}'`)

        }else if (opcao == 'JobTitle'){
            var JobTitle = faker.name.jobTitle()
            console.log('JobTitle: ' + JobTitle)
            arrayCad.push(`'${JobTitle}'`)

        }else if (opcao == 'jobArea'){
            var jobArea = faker.name.jobArea()
            console.log('jobArea: ' + jobArea)
            arrayCad.push(`'${jobArea}'`)

        }else if (opcao == 'CEP'){
            var CEP = faker.address.zipCode()
            console.log('CEP: ' + CEP)
            arrayCad.push(`'${CEP}'`)

        }else if (opcao == 'salario'){
            var salario = faker.finance.amount()
            console.log('salario: ' + salario)
            arrayCad.push(`'${salario}'`)
        }
    }
    cadBanco()

}

function cadBanco(){

// RECEBE OS DADOS DO FORMULARIO    
    console.log('DADOS>>>'+arrayCad)
    
//TRATAMENTO DOS CAMPOS DA TABELA
    let totalCampos = document.getElementById('nCampos').value //TOTAL DE CAMPOS
    contCampos = 0
    let dados = ' '

    for(let x = 0; x < totalCampos; x++){
        contCampos++
        let valorCampo = document.getElementById('i'+contCampos).value
        //console.log(valorCampo)
        
        dados = (dados + (`${valorCampo}`+','))
        //console.log(dados)
    }
    let campoTabela = dados.slice(0,-1)//REMOVE O ULTIMO PONTO E VIRGULA DA STRING
    console.log(campoTabela)
    

//CONEXAO COM BANCO E INSERÇÃO DOS DADOS
    connection.query( `INSERT INTO dados(${campoTabela}) VALUES(${arrayCad})`)
    alert('Dados Cadstrados com sucesso')
    
}
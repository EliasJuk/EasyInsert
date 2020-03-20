//IMPORT O ARQUIVO DE CONEXÃO COM O BANCO DE DADOS
const connection = require('./src/connection')
let divCampos = document.getElementById("campos")
let divbancos = document.getElementById('bancos')
let divtabelas = document.getElementById('tabelas')
let selectTables = document.getElementById('selectTables')

function showbancos(){
    //CONSULTA O NOME DOS BANCOS DE DADOS
    connection.query( `SHOW DATABASES`, function(err, bancos, fields){
        if(!err){
            let dados = bancos
            let maxData = dados.length            
            var newSelectMultiple = document.createElement('select')
            newSelectMultiple.multiple = true
            newSelectMultiple.id ="newSelectMultiple"
            divbancos.appendChild(newSelectMultiple)
            for(let i = 0;i<maxData;i++){
                newSelectMultiple.innerHTML  += `<option id='opt${i}'>${dados[i].Database}</option>`
            }

            //CHAMA UM EVENTO AO CLICAR EM UM OPTION DENTRO DO SELECT
            newSelectMultiple.addEventListener("click", function(){
                divtabelas.style.display = 'block'
                var x = document.getElementById("newSelectMultiple").value;  
            

                //PROCURA NO BANCO DE DADOS O NOME DAS TABELAS DENTRO CONTIDA EM UM DATABASE
                connection.query( `SHOW TABLES FROM ${x}`, function(err, tablerows, fields){
                    if(!err){
                        maxTables = tablerows.length 
                        console.log(x)
                        //console.log(tablerows[0].Tables_in_askme)
                        for(let iTable=0;iTable<maxTables;iTable++){
                            //let vtables = tablerows[iTable].Tables_in_askme
                            //selectTables.innerHTML += `<option>${vtables}</option>`
                        }
                    }else{
                        console.log('Erro ao Realizar Consulta');  
                    }
                })
            })
        }else{
            console.log('Error');  
        }
    })
}


//EVENTOS QUE SÃO TRIGADOS AO SELECIONAR UMA OPÇÃO DO SELECT
function myFunction() {
        var x = document.getElementById("mySelect").value;
        document.getElementById("demo").innerHTML = "You selected: " + x;
    }


function showbases(){
    let table = document.getElementById('inputbuscar').value
    console.log(table)
    
    connection.query( `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = "${table}"`, function(err, rows, fields){
        if(!err){
            //console.log('Resultado: ', rows);
            let result = rows
            listar(result)
        }else{
            console.log('Erro ao Realizar Consulta');  
        }
    })
}

function listar(result){
    let numCampos = result.length
    console.log(numCampos)
    for(let indice = 0; indice < numCampos; indice++){
        var newInput = document.createElement('input')
        newInput.disabled = "true"
        newInput.value = result[indice].COLUMN_NAME
        var newSelect = document.createElement('select')
            newSelect.innerHTML  = '<option>Chave Primaria</option>'
            newSelect.innerHTML += '<option disabled="disabled" class="title">NOMES</option>'
            newSelect.innerHTML += '<option>Nome</option>'
            newSelect.innerHTML += '<option>Nome do Meio</option>'
            newSelect.innerHTML += '<option>Ultimo Nome</option>'
            newSelect.innerHTML += '<option>Sobrenome</option>'
            newSelect.innerHTML += '<option>Nome Mulher</option>'
            newSelect.innerHTML += '<option>Nome Homen</option>'
            newSelect.innerHTML += "<option disabled='disabled' class='title'>DADOS</option>"
            newSelect.innerHTML += '<option>Nascimento</option>'
            newSelect.innerHTML += '<option>RG</option>'
            newSelect.innerHTML += '<option>CPF</option>'
            newSelect.innerHTML += '<option>E-mail</option>'
            newSelect.innerHTML += '<option>Endereco</option>'
            newSelect.innerHTML += '<option>Cidade</option>'
            newSelect.innerHTML += '<option>Pais</option>'
            newSelect.innerHTML += '<option>CEP</option>'
            newSelect.innerHTML += '<option>Telefone</option>'
            newSelect.innerHTML += "<option disabled='disabled' class='title'>IDs</option>"
            newSelect.innerHTML += '<option class="randomID">ID randomico</option>'
            newSelect.innerHTML += "<option disabled='disabled' class='title'>Trabalho</option>"
            newSelect.innerHTML += '<option>Funcao</option>'
            newSelect.innerHTML += '<option>JobTitle</option>'
            newSelect.innerHTML += '<option>jobArea</option>'
            newSelect.innerHTML += '<option>salario</option>'
            newSelect.id = 'op'+ indice
        divCampos.appendChild(newInput)
        divCampos.appendChild(newSelect)
    }
}





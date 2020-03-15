var mysql      = require('mysql');
const readline = require('readline');
const fs = require('fs');
let line

//CONEXAO COM O BANCO
//function conexao(connect){
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'word-list'
    });
 
    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id ' + connection.threadId);
    });
//}

//LER ARQUIVO
function ler(){
    let line_no = 0;

    // ACESSA O ARQUIVO DE TEXTO
    let rl = readline.createInterface({
        input: fs.createReadStream('a.txt')
    });

    // MOSTRAR PALAVRAS
    rl.on('line',function(line) {
        line_no++;
        console.log(`${line_no} ${line}`),callback(line);
    });
}

//CALLBACK
function callback(line){    
    connection.query( `INSERT INTO worda(palavra) VALUES("${line}")`);   
    console.log("CADASTRADO COM SUCESSO: ",line)
}


ler()
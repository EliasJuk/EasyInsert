var mysql = require('mysql');

//CONFIGURAÇÃO DE CONEXAO
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
        //console.log(err.code);
        //console.log(err.fatal);
        //alert('Não Foi Possivel estabelecer a conexao com o banco de dados')
    }else{
        //console.log('Ok')
    }
});


module.exports = connection
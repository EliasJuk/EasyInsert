var mysql = require('mysql');
let buttonStatus = document.getElementById('btnstatus')
let buttonConfig = document.getElementById('btnconfig')
var databaseName = 'rh'

//CONFIGURAÇÃO DE CONEXAO
// Add the credentials to access your database
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : null, // or the original password : 'apaswword'
    database : `${databaseName}`
});
    
// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
        //console.log(err.code);
        //console.log(err.fatal);
        buttonStatus.style.backgroundColor += 'red'
        buttonConfig.style.backgroundColor += 'red'

    }else{
        buttonStatus.style.backgroundColor += 'green'
        buttonConfig.style.backgroundColor += 'green'
        //inputbuscar.disabled = 'false'
        //btnbuscar.disabled = 'false'
    }
});



module.exports = connection
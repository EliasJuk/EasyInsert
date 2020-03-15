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
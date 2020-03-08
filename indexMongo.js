const mongoose = require("mongoose")
const readline = require('readline');
const fs = require('fs');

//CONFIGS
const arquivo = 'a' //nome do arquivo .txt a ser adicionado ao banco
const banco = 'bancoTest' //nome do banco de dados
const collection = 'worda' //nome da collection a ser inserido os dados


// Configurando o mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect(`mongodb://localhost:27017/${banco}`, {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(function(){
        console.log("\x1b[42mMongoDB Conectado...\x1b[0m")
    }).catch((err)=>{
        console.log("\x1b[41mHouve um erro ao se conectar\x1b[0m"+err)
    })


// Model
const WordSchema = mongoose.Schema({

    word:{
        type: String,
        require: true //Obrigatorio
    },
    classe: {
        type: String,
        require: false //Não Obrigatorio
    },
    silabas: {
        type: String,
        require: false //Não Obrigatorio
    },
    wordTec: {
        type: String,
        require: false //Não Obrigatorio
    }
}) 

// Collection
mongoose.model(`${collection}`, WordSchema )
const Banco = mongoose.model(`${collection}`)

function cadastrar(line){
    new Banco({
        word: `${line}`,
        classe: "",
        silabas: "",
        wordTec: "",
    }).save().then(()=>{
        console.log("Cadastrado com Sucesso...")
    }).catch((err)=>{
        console.log("Falha ao cadastrar"+err)  
    })
}

// INICIAR
function ler(){
    let line_no = 0; 
    // ACESSA O ARQUIVO DE TEXTO
    let rl = readline.createInterface({
        input: fs.createReadStream(`${arquivo}.txt`) //LOCAL DO ARQUIVO
    });

    // MOSTRAR PALAVRAS LINHA A LINHA
    rl.on('line',function(line) {
        line_no++;
        console.log(`${line_no} ${line}`),cadastrar(line)
    });
}

ler()



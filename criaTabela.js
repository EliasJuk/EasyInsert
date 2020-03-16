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
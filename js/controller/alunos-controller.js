var dataSet = [
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ]
];
 
$(document).ready(function() {



    $.get( "http://184.107.24.224:12301/api/alunos", function(alunos) {
        console.log(alunos);

        let dados = new Array;

        for(i in alunos){
            let aluno = alunos[i]

            let linha = [aluno.id, aluno.nome, aluno.rg];
    
            dados.push(linha);
        }
        console.log(dados);

        $('#example').DataTable( {
            data: dados,
            columns: [
                { title: "Id" },
                { title: "Nome" },
                { title: "Rg" }
            ]
        } );


    });

    
} );


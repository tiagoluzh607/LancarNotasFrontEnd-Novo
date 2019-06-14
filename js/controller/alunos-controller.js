

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


function goToFormAluno(){
    window.location.replace('formaluno.html');
}


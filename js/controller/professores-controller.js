

$(document).ready(function() {


    $.get( "http://184.107.24.224:12301/api/professores", function(professores) {
        console.log(professores);

        let dados = new Array;

        for(i in professores){
            let professor = professores[i]

            let linha = [professor.id, professor.nome, professor.rg, professor.escolaridade];
    
            dados.push(linha);
        }
        console.log(dados);

        $('#example').DataTable( {
            data: dados,
            columns: [
                { title: "Id" },
                { title: "Nome" },
                { title: "Rg" },
                { title: "Escolaridade" }
            ]
        } );


    });

    
} );


function goToFormProfessor(){
    window.location.replace('formprofessor.html');
}


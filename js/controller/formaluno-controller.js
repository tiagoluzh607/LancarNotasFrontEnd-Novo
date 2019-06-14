function goToAlunos(){
    window.location.replace('alunos.html');
    //o replace ao voltar nao deixa a pagina atual no historico
}

function buscaAlunoDoForm(){
    return {
        nome: $('#inputAlunoNome').val(),
        email: $('#inputAlunoEmail').val(),
        rg: $('#inputAlunoRg').val(),
        telefone: $('#inputAlunoTelefone').val(),
        cpf: $('#inputAlunoCpf').val()
    }
}

function adicionaAlunoApi(){

    $.ajaxSetup({
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });


    let aluno = buscaAlunoDoForm();
    let alunoJsonString = JSON.stringify(aluno);

    $.post("http://184.107.24.224:12301/api/alunos", alunoJsonString, function(aluno){
        
        alert('Aluno com id: '+aluno.id+' salvo com sucesso');
        window.location.replace('alunos.html');
    
    }).fail(function(error){
        console.error(error);
        alert('Não foi possivel salvar aluno na API');
    })

}
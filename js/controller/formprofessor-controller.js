function goToProfessores(){
    window.location.replace('professores.html');
    //o replace ao voltar nao deixa a pagina atual no historico
}

function buscaProfessorDoForm(){
    return {
        nome: $('#inputProfessorNome').val(),
        email: $('#inputProfessorEmail').val(),
        rg: $('#inputProfessorRg').val(),
        telefone: $('#inputProfessorTelefone').val(),
        cpf: $('#inputProfessorCpf').val(),
        sexo: $('#inputProfessorSexo').val(),
        escolaridade: $('#inputProfessorEscolaridade').val()
    }
}

function adicionaProfessorApi(){

    $.ajaxSetup({
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });


    let professor = buscaProfessorDoForm();
    let professorJsonString = JSON.stringify(professor);

    $.post("http://184.107.24.224:12301/api/professores", professorJsonString, function(professor){
        
        alert('Professor com id: '+professor.id+' salvo com sucesso');
        window.location.replace('professores.html');
    
    }).fail(function(error){
        console.error(error);
        alert('Não foi possivel salvar professor na API');
    })

}
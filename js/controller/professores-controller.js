

$(document).ready(function() {


    $.get( "http://184.107.24.224:12301/api/professores", function(professores) {
        console.log(professores);

        let dados = new Array;

        for(i in professores){
            let professor = professores[i]

            let linha = [professor.id, professor.nome, professor.rg, professor.escolaridade , `{ "id": `+professor.id+`}`];
    
            dados.push(linha);
        }
        console.log(dados);

        $('#example').DataTable( {
            data: dados,
            columns: [
                { title: "Id" },
                { title: "Nome" },
                { title: "Rg" },
                { title: "Escolaridade" },
                { title: "Ações",
                        className: "td-actions text-right",
                        render: function ( data, type, row, meta ) {
                            
                        let dataJson;
                        try{
                            //console.log(JSON.parse(data));
                            dataJson = JSON.parse(data)
                        }catch(err){
                            console.error(err);
                        } 
                            
                            return `
                            
                            <button onclick="deletaProfessor(`+dataJson.id+`)" rel="tooltip" class="login100-form-btn btn-danger"  title="Excluir">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>

                            `;
                            
                        }
                }
            ]
        } );


    });

    
} );


function goToFormProfessor(){
    window.location.replace('formprofessor.html');
}

jQuery.each( [ "put", "delete" ], function( i, method ) {
    jQuery[ method ] = function( url, data, callback, type ) {
      if ( jQuery.isFunction( data ) ) {
        type = type || callback;
        callback = data;
        data = undefined;
      }
  
      return jQuery.ajax({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      });
    };
});

function deletaProfessor(id){
    
    $.delete("http://184.107.24.224:12301/api/professores/"+id, null,function(professor){
        
        alert('Professor com id: '+professor.id+' Foi Excluído');
        window.location.replace('professores.html');
    
    }).fail(function(error){
        console.error(error);
        alert('Não foi deletar o professor na API');
    })
}


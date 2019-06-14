function logar(){


    let valorUsuario = $('#inputUsuario').val();
    let valorSenha = $('#inputSenha').val();

    if(valorUsuario == "admin@gmail.com" && valorSenha == "password"  ){
        window.location.href = 'menu.html';
    }else{
        alert('usuario ou senha invalidos');
    }

}



$('.form-validate').on('submit', function(event){
    event.preventDefault();
    logar();
});

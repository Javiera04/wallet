$(document).ready(function() {
  $('#loginForm').submit(function(event) {
    event.preventDefault();
    var username = $('#user').val();
    var password = $('#contrasenia').val();
  
    // Verificar las credenciales
    if (username === 'admin' && password === '12345') {
      // Credenciales válidas, redirigir a la pantalla menu
      sessionStorage.setItem('auth', true);
      $('#buenito').fadeIn();  
      setTimeout(function(){   
        location.href = './../html/menu.html';
      }, 3000);
    }else {
      // Credenciales inválidas, mostrar mensaje de error
      $('#malito').fadeIn();
      setTimeout(function(){
        $('#malito').fadeOut();
      }, 2000);
    }
  });
});
  
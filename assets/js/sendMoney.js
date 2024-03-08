//sendMoney.html
$(document).ready(function() {
    //se asegura que hay un contacto seleccionado
    $('.contactRadio').change(function() {
      $('#contactList li').removeClass('selected');
      
      // resaltar contacto
      $(this).closest('li').addClass('selected');
      
      // Mhabilitar/deshabilita boton de tansferir
      if ($(this).prop('checked')) {
        $('#btnTransfer').prop('disabled', false);
      } else {
        $('#btnTransfer').prop('disabled', true);
      }
    });

    //boton transferir
    $('#btnTransfer').click(function(e){
        e.preventDefault();
        $('#transferForm').fadeIn();   
    })

    //main - boton realizar transferencia
    $('#transferBtn').click(function(e) {
        e.preventDefault();
      
        var amount = parseFloat($('#amount').val());
        //se asegura que sea un valor numerico, mayor que 0 y menor o igual al monto de la cuenta
        if (!isNaN(amount) && amount > 0 && amount <= balance) {
          //resta el valor al saldo
          balance -= amount;
          guardarSaldo();
          $('#amount').val('');
          actualizarSaldo();
          //alerta de exito
          $('#exito').fadeIn();   
          setTimeout(function(){     
            $('#transferForm').fadeOut(); 
            $('#exito').fadeOut();
          }, 2000);

        } else {
          //alerta de fracaso
          $('#fracaso').fadeIn();
          setTimeout(function(){
            $('#fracaso').fadeOut();
          }, 2000);
        }
      });

      obtenerSaldo();
});
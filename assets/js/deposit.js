//FUNCIONES GENERALES PARA DEPOSIT Y SENDMONEY
var balance = 0;
 
//funcion que permite guardar el saldo total de la cuenta
function guardarSaldo(){
  localStorage.setItem("ultimoSaldo",balance);
}

//funcion que muestra el saldo total de la cuenta
function obtenerSaldo(){
  const ultimoSaldo= localStorage.getItem("ultimoSaldo");
  if (ultimoSaldo !== null){
    balance = parseFloat(ultimoSaldo);
    $('#balance').text(balance);
  }
}

//funcion que permite mostrar el saldo en tiempo real sin enviar un submit
function actualizarSaldo() {
  $('#balance').text(balance);
}

//funcion para guardar ultimo deposito de la cuenta
function ultimoDeposito(){
  const p = document.getElementById('ultimoMonto');
  const input = document.getElementById('amount');
  const valor_input = input.value;
  p.innerHTML = valor_input;
  localStorage.setItem("ultimoDeposito", valor_input);
}  

//funcion que permite obtener el ultimo deposito realizado en la cuenta
function obtenerDeposito(){
  const ulti = localStorage.getItem("ultimoDeposito");
  if(ulti !== null){
    valor_input = parseFloat(ulti);
    $('#ultimoMonto').text(valor_input);
  }
}

//deposit.html
$(document).ready(function() {
    //main
    $('#depositBtn').click(function(e) {
      e.preventDefault();

      ultimoDeposito();
      var amount = parseFloat($('#amount').val());
      //revisa que sea un valor numerico mayor a 0
      if (!isNaN(amount) && amount > 0) {
        //suma el valor al saldo
        balance += amount;
        guardarSaldo();
        $('#amount').val('');
        actualizarSaldo();
        //alerta de exito
        $('#exito').fadeIn();  
        setTimeout(function(){     
          location.href = '../html/menu.html';
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
    obtenerDeposito();
  
});

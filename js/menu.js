// // con javascrip 

// // Guardar saldo inicial si no existe
// if (!localStorage.getItem('saldo')) {
//   localStorage.setItem('saldo', '60000');
// }

// // Mostrar saldo actualizado
// window.onload = function() {
//   let saldo = localStorage.getItem('saldo');
//   document.querySelector('.card-title').textContent = '$' + saldo;
  
//   // Botón Depositar
//   document.querySelector('a[href="deposit.html"]').onclick = function(e) {
//     e.preventDefault();
//     alert('Redirigiendo a Depositar...');
//     window.location.href = 'deposit.html';
//   };
  
//   // Botón Enviar Dinero
//   document.querySelector('a[href="sendmoney.html"]').onclick = function(e) {
//     e.preventDefault();
//     alert('Redirigiendo a Enviar Dinero...');
//     window.location.href = 'sendmoney.html';
//   };
  
//   // Botón Últimos Movimientos
//   document.querySelector('a[href="transactions.html"]').onclick = function(e) {
//     e.preventDefault();
//     alert('Redirigiendo a Últimos Movimientos...');
//     window.location.href = 'transactions.html';
//   };
// };


// con jquery

$(document).ready(function() {
  
  if (!localStorage.getItem('saldo')) {
    localStorage.setItem('saldo', '60000');
  }
  
  let saldo = localStorage.getItem('saldo');
  $('.card-title').text('$' + saldo);
  
  $('a[href="deposit.html"]').click(function(e) {
    e.preventDefault();
    alert('Redirigiendo a Depositar...');
    window.location.href = 'deposit.html';
  });
  
  $('a[href="sendmoney.html"]').click(function(e) {
    e.preventDefault();
    alert('Redirigiendo a Enviar Dinero...');
    window.location.href = 'sendmoney.html';
  });
  
  $('a[href="transactions.html"]').click(function(e) {
    e.preventDefault();
    alert('Redirigiendo a Últimos Movimientos...');
    window.location.href = 'transactions.html';
  });
});
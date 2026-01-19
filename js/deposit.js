// // Esperar a que la página cargue completamente
// window.onload = function() {
//   // Buscar el formulario y agregar el evento submit
//   document.querySelector('form').onsubmit = function(e) {
//     e.preventDefault();

//     let monto = document.getElementById('depositAmount').value;
//     if (monto == '' || monto <= 0) {
//       alert('Por favor ingrese un monto válido mayor a cero');
//       return;
//     }
    
//     let saldoActual = localStorage.getItem('saldo');
//     saldoActual = parseFloat(saldoActual);
//     // Sumar el monto depositado al saldo actual
//     let montoDepositado = parseFloat(monto);
//     let nuevoSaldo = saldoActual + montoDepositado;
    
//     // Guardar el nuevo saldo en localStorage
//     localStorage.setItem('saldo', nuevoSaldo);
    
//     // Guardar la transacción para mostrarla después
//     let transacciones = localStorage.getItem('transacciones');
//     if (!transacciones) {
//       // Si no hay transacciones, creo un array vacío
//       transacciones = [];
//     } else {
//       // Si hay transacciones, convertir el texto a array
//       transacciones = JSON.parse(transacciones);
//     }
//     // Agregar la nueva transacción al inicio del array
//     transacciones.unshift('Depósito - $' + montoDepositado);
//     // Guardar las transacciones actualizadas
//     localStorage.setItem('transacciones', JSON.stringify(transacciones));
    
//     // Mostrar mensaje de éxito
//     alert('¡Depósito exitoso! Nuevo saldo: $' + nuevoSaldo);
//     // Redirigir al menú principal
//     window.location.href = 'menu.html';
//   };
// };
// };

// con jquery

$(document).ready(function() {
  
  let saldoActual = localStorage.getItem('saldo') || '60000';
  $('h2').after('<p>Saldo actual: $' + saldoActual + '</p>');
  
  $('form').submit(function(e) {
    e.preventDefault();
    
    let monto = $('#depositAmount').val();
    
    if (monto === '' || monto <= 0) {
      alert('Ingrese un monto válido');
      return;
    }
    
    saldoActual = parseFloat(localStorage.getItem('saldo'));
    let nuevoSaldo = saldoActual + parseFloat(monto);
    
    localStorage.setItem('saldo', nuevoSaldo);
    
    let transacciones = JSON.parse(localStorage.getItem('transacciones') || '[]');
    transacciones.unshift({
      tipo: 'deposito',
      descripcion: 'Depósito',
      monto: parseFloat(monto)
    });
    localStorage.setItem('transacciones', JSON.stringify(transacciones));
    
    alert('¡Depósito exitoso! Nuevo saldo: $' + nuevoSaldo);
    window.location.href = 'menu.html';
  });
});
// // sendmoney.js

// let contactoSeleccionado = null;

// window.onload = function() {
  
//   // Botón agregar contacto
//   document.querySelector('button[type="submit"]').onclick = function(e) {
//     e.preventDefault();
    
//     let nombre = prompt('Nombre:');
//     let cbu = prompt('CBU:');
//     let alias = prompt('Alias:');
//     let banco = prompt('Banco:');
    
//     alert('Contacto: ' + nombre + ' agregado');
//   };
  
// // esta funcion se actriva al darle click a un contacto
//    document.querySelectorAll('#contactList li').forEach(function(li) {
//     li.onclick = function() {
//       // Quitar el azul de todos los contactos
//       document.querySelectorAll('#contactList li').forEach(function(item) {
//         item.style.backgroundColor = '';
//       });
//       // Poner azul al contacto seleccionado
//       contactoSeleccionado = this.textContent;
//       this.style.backgroundColor = 'lightblue';
//     };
//   });
  
//   // Botón enviar dinero
//   document.querySelector('.btn-success').onclick = function(e) {
//     e.preventDefault();
    
//     // si no existe un contacto seleccionado, muestra esta alerta
//     if (!contactoSeleccionado) {
//       alert('Seleccione un contacto');
//       return;
//     }
    
//     let monto = prompt('Monto:');
//     let saldo = parseFloat(localStorage.getItem('saldo')); // aca traigo mi saldo actual del localstorage
    
//     if (parseFloat(monto) > saldo) {
//       alert('Saldo insuficiente');
//       return;
//     }
    
//     if (confirm('¿Enviar $' + monto + '?')) {
//       saldo = saldo - parseFloat(monto);
//       localStorage.setItem('saldo', saldo);
//       alert('Enviado. Saldo: $' + saldo);
//       window.location.href = 'menu.html';
//     }
//   };
// };


// sendmoney.js
// sendmoney.js

// sendmoney.js

let contactoSeleccionado = null;

$(document).ready(function() {
  cargarContactos();
  
  // Buscar contactos
  $('#searchContact').on('input', function() {
    let texto = $(this).val().toLowerCase();
    $('#contactList li').each(function() {
      $(this).toggle($(this).text().toLowerCase().includes(texto));
    });
  });
  
  // Agregar contacto
  $('.btn-primary').click(function(e) {
    e.preventDefault();
    let nombre = prompt('Nombre:');
    let cbu = prompt('CBU:');
    let alias = prompt('Alias:');
    let banco = prompt('Banco:');
    
    if (!nombre || !cbu || !alias || !banco) {
      alert('Complete todos los campos');
      return;
    }
    
    let contactos = JSON.parse(localStorage.getItem('contactos') || '[]');
    contactos.push({nombre, cbu, alias, banco});
    localStorage.setItem('contactos', JSON.stringify(contactos));
    alert('Contacto agregado');
    cargarContactos();
  });
  
  // Enviar dinero
  $('.btn-success').click(function(e) {
    e.preventDefault();
    
    if (!contactoSeleccionado) {
      alert('Seleccione un contacto');
      return;
    }
    
    let monto = prompt('Monto a enviar:');
    
    if (!monto || parseFloat(monto) <= 0) {
      alert('Monto inválido');
      return;
    }
    
    let saldo = parseFloat(localStorage.getItem('saldo'));
    
    if (parseFloat(monto) > saldo) {
      alert('Saldo insuficiente');
      return;
    }
    
    if (confirm('¿Enviar $' + monto + ' a ' + contactoSeleccionado.nombre + '?')) {
      saldo -= parseFloat(monto);
      localStorage.setItem('saldo', saldo);
      
      let trans = JSON.parse(localStorage.getItem('transacciones') || '[]');
      trans.unshift({tipo: 'transferencia', descripcion: 'Transferencia a ' + contactoSeleccionado.nombre, monto: -parseFloat(monto)});
      localStorage.setItem('transacciones', JSON.stringify(trans));
      
      alert('Transferencia exitosa');
      window.location.href = 'menu.html';
    }
  });
});

function cargarContactos() {
  let contactos = JSON.parse(localStorage.getItem('contactos') || '[{"nombre":"John Doe","cbu":"1234567890123456789012","alias":"john.doe","banco":"ABC Bank"},{"nombre":"Jane Smith","cbu":"9876543210987654321098","alias":"jane.smith","banco":"XYZ Bank"}]');
  
  if (!localStorage.getItem('contactos')) {
    localStorage.setItem('contactos', JSON.stringify(contactos));
  }
  
  $('#contactList').empty();
  
  contactos.forEach(function(c) {
    let li = $('<li class="list-group-item" style="cursor:pointer"></li>');
    li.html('<strong>' + c.nombre + '</strong><br><small>CBU: ' + c.cbu + '</small>');
    
    li.click(function() {
      $('#contactList li').css('background-color', '');
      $(this).css('background-color', 'lightblue');
      contactoSeleccionado = c;
    });
    
    $('#contactList').append(li);
  });
}
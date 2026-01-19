// window.onload = function() {
  
//   let transacciones = localStorage.getItem('transacciones');
//   let lista = document.querySelector('.list-group');
  
//   if (!transacciones) {
//     lista.innerHTML = '<li class="list-group-item">No hay movimientos registrados</li>';
//   } else {
//     transacciones = JSON.parse(transacciones);
//     lista.innerHTML = '';
    
//     transacciones.forEach(function(transaccion) {
//       let li = document.createElement('li');
//       li.className = 'list-group-item';
//       li.textContent = transaccion;
//       lista.appendChild(li);
//     });
//   }
// };

// transactions con jquery

$(document).ready(function() {
  
  $('h2').after(`
    <select id="filtro" class="form-control mb-3">
      <option value="todos">Todos</option>
      <option value="deposito">Depósitos</option>
      <option value="transferencia">Transferencias</option>
    </select>
  `);
  
  mostrar('todos');
  
  $('#filtro').change(function() {
    mostrar($(this).val());
  });
});

function mostrar(filtro) {
  let trans = JSON.parse(localStorage.getItem('transacciones') || '[]');
  
  if (filtro !== 'todos') {
    trans = trans.filter(t => t.tipo === filtro);
  }
  
  $('.list-group').empty();
  
  if (trans.length === 0) {
    $('.list-group').append('<li class="list-group-item">No hay movimientos</li>');
    return;
  }
  
  trans.forEach(function(t) {
    let color = t.monto > 0 ? 'text-success' : 'text-danger';
    let li = '<li class="list-group-item">' + t.descripcion + ' - <span class="' + color + '">$' + Math.abs(t.monto) + '</span></li>';
    $('.list-group').append(li);
  });
}
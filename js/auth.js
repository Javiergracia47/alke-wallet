// js/auth.js
//document.getElementById("loginForm").addEventListener("submit", function (e) {
  //e.preventDefault(); // Evita que recargue la página

  //const email = document.getElementById("email").value;
  //const password = document.getElementById("password").value;
  // tomo los valores del formulario con .value

  // Usuario de prueba
  //if (email === "test@wallet.com" && password === "1234") {
    // Redirigir al menú principal
    //window.location.href = "menu.html";
  //} else {
    //document.getElementById("loginError").style.display = "block";
  //}
//});


// auth.js

$(document).ready(function() {
  
  $('form').submit(function(e) {
    e.preventDefault();
    
    let email = $('#email').val();
    let password = $('#password').val();
    
    if (email === '' || password === '') {
      alert('Complete todos los campos');
      return;
    }
    
    if (email === 'user@wallet.com' && password === '1234') {
      alert('Login exitoso');
      window.location.href = 'menu.html';
    } else {
      alert('Email o contraseña incorrectos');
    }
  });
});

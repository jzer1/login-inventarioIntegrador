// Verificamos qué formulario existe en la página actual
if (document.querySelector('#login-form')) {
    import('./app/login.js').then(module => {
      // El código de login.js se ejecutará automáticamente
    }).catch(error => {
      console.error('Error al cargar login.js:', error);
    });
  }
  
  if (document.querySelector('#register-form')) {
    import('./app/register.js').then(module => {
      // El código de register.js se ejecutará automáticamente
    }).catch(error => {
      console.error('Error al cargar register.js:', error);
    });
  }


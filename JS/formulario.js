function valida(formulario) {
    if ((formulario.nombre.value.length == 0) || (formulario.telefono.value.length == 0)) {
        alert('falta informacion');
        return false
    }
    //validacion de nombre sean solo letras.
     if(/^([0-9])*$/.test(formulario.nombre.value)){
        alert("nombre no valido");
        return false
     }
   //validar el numero de telefono 
   if( !(/^\d{8}$/.test(formulario.telefono.value) )   ) {
    alert("Ingrese un numero valido");
    telefono.style.borderColor = "red";
    lbltelefono.style.color = "red";
    return false;
}
    //validacion de gmail no debe de quedar vacio
    if (formulario.gmail.value.length == 0) {
        alert('falta informacion');
        return false  
    } 
      //validacion de un correo gmail cumpla 
     if (!(/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/.test(formulario.gmail.value))) { 
    alert('Contenido del gmail no esta corecto');
    return false; 
}
    
   else {
        alert('¡Todo está bien, continue!');
        formulario.submit;
    }

    return true
}
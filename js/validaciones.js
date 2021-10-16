(function(){
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');
    
    var validarNombre = function(e){
        if (formulario.nombre.value == 0) {
            alert("Completa campo nombre");
            e.preventDefault();
        }
    };
    
    var validarApellido = function(e){
        if (formulario.apellido.value == 0) {
            alert("Completar campo apellido");
            e.preventDefault();
        }
    };

    var validarCiudad = function(e){
        if (formulario.ciudad.value == 0) {
            alert("Completar campo ciudad");
            e.preventDefault();
        }
    };

    var validarCelular = function(e){
        if (formulario.celular.value == 0) {
            alert("Completar campo celular");
            e.preventDefault();
        }
    };

    var validarEdad = function(e){
        if (formulario.edad.value == 0) {
            alert("Completar campo edad");
            e.preventDefault();
        }
    };

    var validarEmail = function(e){
        if (formulario.email.value == 0) {
            alert("Completar campo email");
            e.preventDefault();
        }
    };

    var validarContrasena = function(e){
        if (formulario.contrasena.value == 0) {
            alert("Completar campo contraseña");
            e.preventDefault();
        }
    };
    
    var validarSexo = function(e){
        if (formulario.optradio[0].checked == true || formulario.optradio[1].checked == true){
        } else alert("Completa el campo sexo");
            e.preventDefault();
    };


    var validar = function(e){
        validarNombre(e);
        validarApellido(e);
        validarCiudad(e);
        validarCelular(e);
        validarEdad(e);
        validarEmail(e);
        validarContrasena(e);   
        validarSexo(e);
    };

    formulario.addEventListener("submit", validar);

    
}())
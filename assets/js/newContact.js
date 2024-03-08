$(document).ready(function(){
    //muesta el formulario para agregar nuevo contacto
    $('#addForm').click(function(e){
        e.preventDefault();
        $('#contactForm').fadeIn();
    });
    //oculta el formulario de nuevo contacto
    $('#btnCancelar').click(function(e){
        e.preventDefault();
        $('#contactForm').fadeOut();
    });

    // habilita/deshabilita el botón "Agregar" si el formulario esta lleno
    $('#contactForm input').on("input", function() {
        $('#btnAgregar').prop('disabled', !formularioValido());
    });

    //agrega contactos a la lista
    $('#btnAgregar').click(function(e){
        e.preventDefault();
        addContactToList();
        clearForm();
    })

    //comprueba que todos los elementos de la lista esten completos para poder agregarlos
    function formularioValido(){
        return $('#fullName').val() !== "" && $('#cbu').val() !== "" && $('#alias').val() !== "" && $('#nmBanco').val() !== "";
    }

    //agregar contacto a la lista
    function addContactToList() {
        // Obtener valores del formulario
        const fullName = $('#fullName').val();
        const cbu = $('#cbu').val();
        const alias = $('#alias').val();
        const nmBanco = $('#nmBanco').val();
    
        // Crear el nuevo elemento de la lista
        const listItem = $("<li class='list-group-item'></li>");
        const contactInfo = $("<div class='contact-info'></div>");
        const radioInput = $("<input class='form-check-input me-1 contactRadio' type='radio' name='listGroupRadio' value=''>");
        const contactName = $("<span class='contact-name'>" + fullName + "</span>");
        const contactDetails = $("<br><span class='contact-details'>Nro de cuenta: " + cbu + ", Alias: " + alias + ", Banco: " + nmBanco + "</span>");
    
        //agregarlo
        listItem.append(contactInfo.append(radioInput, contactName, contactDetails));
        $('#contactList').append(listItem);
    }
      
     //limpiar formulario 
    function clearForm() {
        $('#contactForm input').val(""); //limpia el formulario
        $('#btnAgregar').prop('disabled', true); //Deshabilita el boton agregar   
        $('#contactForm').fadeOut(); //oculta el formulario
    }
      
});

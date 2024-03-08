$(document).ready(function() {
    // funcion para buscar un contacto
    $('#searchBtn').on('click', function(e) {
        e.preventDefault(); 

        const searchTerm = $('#search').val().toLowerCase(); //convierte la busqueda a letras minisculas

        // Filtra los elementos de la lista de contactos
        $('#contactList li').each(function() {
            const contactName = $(this).find('.contact-name').text().toLowerCase();
            const contactDetails = $(this).find('.contact-details').text().toLowerCase();

            // mustra y oculta elementos de la lista
            if (contactName.includes(searchTerm) || contactDetails.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
  });


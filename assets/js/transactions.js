$(document).ready(function () {
    // Funcion filtar los movimientos de la tabla
    function mostrarUltimosMovimientos(filtro) {
        $('tbody tr').each(function () {
            var tipo = $(this).data('tipo');
            if (filtro === 'todos' || tipo === filtro) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    // cambia el valor del filto
    $('#tipoFiltro').on('change', function () {
        var filtro = $(this).val();
        mostrarUltimosMovimientos(filtro);
    });

    mostrarUltimosMovimientos('todos'); // 'todos' indica que no hay filtro al inicio
});
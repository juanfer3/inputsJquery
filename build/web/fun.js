$(document).ready(function () {
    var contador = $('.data').length;
    contador = contador + 1;
    console.log(contador);
    
    
    $('#myBoton').click(function () {
        var data = [];

        var entrada = '<div class="row data" id="data' + contador + '"><div class="input-field col s6"><input  id="first_name" type="text" class="validate"><label for="first_name">First Name</label></div><div class="input-field col s6"><input id="last_name" type="text" class="validate"><label for="last_name">Last Name</label></div></div></div>';
        $('#formulario').append(entrada);

        $(".data").each(function () {
            var input1 = $(this).find('.input-field:eq(0)').find("input").val();
            var input2 = $(this).find('.input-field:eq(1)').find("input").val();
            console.log(input1);
            console.log(input2);

            data.push({name: input1, lastname: input2});

        });


        console.log(data);
    });
    
    
    $('#eliminar').click(function () {
       $('.data').last().remove();
    });

});





$(document).ready(function(){
    $("#frmCadastro").validate({
        rules:{
            nome: {
                required: true,
                minlength: 4
            },
            email:{
                required: true,
                email:true
            }
        },

        messages:{
            nome:{
                required: "  favor digitar o nome",
                minlength: "  deve ter no minimo 4 caracteres"
            },
            email: {
                required: "Obrigatorio",
                email:"Email invalido"
            }

        }
    })
})
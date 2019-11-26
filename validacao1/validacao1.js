/**
 * AULA 8 ARRAYs
 * @author Rafael Lemos
 */

function validacao() {
    let formulario = document.forms.frmCadastro
    let nome = formulario.txtNome.value
    let cpf = formulario.txtCpf.value
    let sexo = formulario.sexo.value
    let perfil = formulario.txtPerfil.value
    let erro = false

    if (nome.indexOf(' ') === -1) {
        alert("Preencha o nome completo")
        erro = true
    }

    if (cpf.length != 11) {
        alert("cpf invalido")
        erro = true
    }

    if (perfil.length < 20) {
        alert("digite pelo menos 20 caracteres")
        erro = true
    }

    if (erro === true) {
        return false
    }
    else {
        return true
    }
}
    
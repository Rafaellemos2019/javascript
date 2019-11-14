/**
 * AULA 6 - ELEITOR
 * @author Rafael Lemos
 * 
 */

let idade

function verificar() {
    idade = Number(frmEleitor.txtIdade.value)


    if (idade < 16) {
        alert("Voce não tem idade pra votar !")
    }
    else if (idade >= 18 && idade <= 70) {
        alert("Obrigatório votar !")
    }
    else {
        alert("Facultativo")
    }
}

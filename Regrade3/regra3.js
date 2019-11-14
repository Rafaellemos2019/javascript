/**
 * AULA 6 - REGRA DE 3
 * @author Rafael Lemos
 */

let x, y, resultado


function calcular() {

    let x = Number(frmRegra3.txtX.value.replace(",", "."))
    let y = Number(frmRegra3.txtY.value.replace(",", "."))

    Resultado = y * x / 100
    frmRegra3.txtResultado.value = Resultado.toFixed(2)

}
/**
 * Calculo do Combustivel
 * @author Rafael Lemos
 */

//Variaveis Globais
let Gasolina, Etanol, Resultado

function calcular() {
    Gasolina = Number(frmCombustivel.txtGasolina.value.replace(",", "."))
    Etanol = Number(frmCombustivel.txtEtanol.value.replace(",", "."))
    Resultado = Etanol / Gasolina
    frmCombustivel.txtResultado.value = Resultado.toFixed(1)

    if (Resultado < 0.7) {
        document.getElementById("status").src = "etanol.png"
    }
    else
        document.getElementById("status").src = "gasolina.png"
}

function resetar() {
    document.getElementById("status").src = "neutro.png"
}


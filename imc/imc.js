/**
 * TAREFA DE CASA CALCULO IMC
 * @author Rafael Lemos
 */

//Variaveis
let Peso, Altura, Resultado


function calcular() {
    Peso = Number(frmImc.txtPeso.value.replace(",", "."))
    Altura = Number(frmImc.txtAltura.value.replace(",", "."))
    Resultado = Peso / (Altura * Altura)
    frmImc.txtImc.value = Resultado.toFixed(2)

    if (Resultado < 17) {
        document.getElementById("idImc").src = "imcl.png"
    }
    else if (Resultado > 16 && Resultado < 18.50) {
        document.getElementById("idImc").src = "imc2.png"
    }
    else if (Resultado > 17.49 && Resultado < 25) {
        document.getElementById("idImc").src = "imc3.png"
    }
    else if (Resultado > 24.99 && Resultado < 30) {
        document.getElementById("idImc").src = "imc4.png"
    }
    else if (Resultado > 29, 99 && Resultado < 35) {
        document.getElementById("idImc").src = "imc5.png"
    }
    else if (Resultado > 34.99 && Resultado < 40) {
        document.getElementById("idImc").src = "imc6.png"
    }
    else if (Resultado > 39.99) {
        document.getElementById("idImc").src = "imc7.png"
    }
    else alert("8")

}
function resetar() {
    document.getElementById("idImc").src = "imc.png"
}









































































































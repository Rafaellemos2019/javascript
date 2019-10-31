/**
 * Calculo do IMC
 * @author Rafael Lemos
 */

//Variaveis Globais

let Peso, Altura, Resultado


function calcular() {
    Peso = Number(frmImc.txtPeso.value.replace(",", "."))
    Altura = Number(frmImc.txtAltura.value.replace(",", "."))
    Resultado = Peso / (Altura * Altura)
    frmImc.txtImc.value = Resultado.toFixed(2)
    
    if(Resultado > 20) {
        alert("GORDO Q NEM O DIABO!")
    }
}
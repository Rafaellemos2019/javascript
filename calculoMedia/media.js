/**
 * Calculo da Media
 * @author Rafael Lemos
 */

 // Variaveis Globais
 let nota1, nota2, media

 function calcular(){
     nota1=Number(frmMedia.txtNota1.value.replace(",","."))
     nota2=Number(frmMedia.txtNota2.value.replace(",","."))
     media= (nota1 + nota2)/2
     frmMedia.txtMedia.value=media.toFixed(1)

    if(media>5) {
        alert("Fome da porra!")
    }

    }

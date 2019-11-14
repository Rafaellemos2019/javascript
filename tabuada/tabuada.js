/**
 * aula 6 - TABUADA
 * @author Rafael Lemos
 */


for (let valor = 1 ; valor <= 10 ; valor ++ ){

    document.write( "Tabuada do " + valor + '<br>')


  for (let i = 1 ; i <= 10 ; i ++ ){
     document.write(valor + "x" + i + "=" + (valor* i) + "<br>")
    
 }
 document.write('<br>')
}


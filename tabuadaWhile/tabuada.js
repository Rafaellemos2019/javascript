/**
 * aula 7 - TABUADA com WHILE
 * @author Rafael Lemos
 */

let valor1 = 0, valor2 = 0

while (valor2 <= 10) {

    document.write("<p>" + "tabuada do " + valor2 + "<br>" + "</p>")


    while (valor1 <= 10) {

        document.write(valor1 + 'X' + valor2 + "=" + valor1 * valor2 + '<br>')
        valor1++
    }
    valor2++
    valor1 = 0

}





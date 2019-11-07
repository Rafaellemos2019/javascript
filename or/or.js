/**
 * Estudo do Operador logico OR
 * @author Rafael Lemos
 */


let sw1 = false
let sw2 = false

function sw(receive) {
    if (receive == 1 && sw1 == false) {
        document.getElementById("sw1").src = "swon.png"
        sw1 = true
    }
    else if (receive == 1 && sw1 == true) {
        document.getElementById("sw1").src = "swoff.png"
        sw1 = false
    }
    else if (receive == 2 && sw2 == false) {
        document.getElementById("sw2").src = "swon.png"
        sw2 = true

    } else {

        document.getElementById("sw2").src = "swoff.png"
        sw2 = false
    }

    if (sw1 || sw2){
        document.getElementById("lamp").src = "on.jpg"
    }
    else {
        document.getElementById("lamp").src = "off.jpg"}
    }

    function quebrar(){
        document.getElementById("lamp").src = "broken.jpg"
        document.getElementById("lamp").id = "broken"}

    
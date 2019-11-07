/**
 * Aula 4 NOT
 * @author Rafael Lemos
 */

let sw1 = false

function sw() {

    if (sw1 == false) {
        document.getElementById("sw1").src = "swoff.png"
        sw1 = true
    }
    else { document.getElementById("sw1").src = "swoff.png" }
    sw1 = false

}

//NOT
if (!sw1) {
    document.getElementById("lamp").src = "on.jpg"
}
else { document.getElementById("lamp").src = "off.jpg" }

}
/**
 * Aula 5 JokenPo
 * @author Rafael Lemos
 */

let player

function jogar() {
    if (document.getElementById('pedra').checked === true) {
        player = 1
    }
    else if (document.getElementById('papel').checked === true) {
        player = 2

    }
    else if (document.getElementById('tesoura').checked === true) {
        player = 3

    }
    let computador = Math.floor(Math.random() * 3) + 1

    switch (computador) {
        case 1:
            document.getElementById('pc').src = 'pcpedra.png'
            break
        case 2:
            document.getElementById('pc').src = 'pcpapel.png'
            break
        case 3:
            document.getElementById('pc').src = 'pctesoura.png'
            break
    }

    if (player == computador) {
        document.getElementById('resultado').innerText = "EMPATOU"
    }
    else if (player == 1 && computador == 2) {
        document.getElementById('resultado').innerText = "PC GANHOU"
    }
    else if (player == 1 && computador == 3) {
        document.getElementById('resultado').innerText = "AEE VC GANHOU"
    }
    else if (player == 2 && computador == 1) {
        document.getElementById('resultado').innerText = "AEE VC GANHOU"
    }
    else if (player == 2 && computador == 3) {
        document.getElementById('resultado').innerText = "PC GANHOU"
    }
    else if (player == 3 && computador == 1) {
        document.getElementById('resultado').innerText = "PC GANHOU"
    }
    else if (player == 3 && computador == 2) {
        document.getElementById('resultado').innerText = "AEE VC GANHOU"
    }
    else document.getElementById('resultado').innerText = "escolha algo !"
  
}
function resetar(){
    document.getElementById("pc").src = "pc.png"
    document.getElementById('resultado').innerText = "  "
    
}



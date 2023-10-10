let ataqueJugador 
let ataqueEnemigoGlobal
let resultado
let vidaJugador = 3
let vidaEnemigo = 3

function iniciarJuego(){
    let seccionAtaque = document.getElementById("seleccionar-ataque")
    seccionAtaque.style.display = "none"
    let seccionReiniciar = document.getElementById("reiniciar")
    seccionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")  
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click",ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click",ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click",ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click",reiniciarJuego)
//ocultamos  elige tu ataque y solo dejamos visible el nombree y la eleccion de mascota
}
function ataqueEnemigo(){
    ataqueEnemigoGlobal = aleatorio2(1,3)
       if ( ataqueEnemigoGlobal == 1){
        ataqueEnemigoGlobal = "FUEGO"
        }else if ( ataqueEnemigoGlobal == 2){
        ataqueEnemigoGlobal = "AGUA"
        }else {
        ataqueEnemigoGlobal = "TIERRA"
        } 
    resultadoCombate()
}
function ataqueFuego(){
   
    ataqueJugador = "FUEGO"
    ataqueEnemigo()
    
}
function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueEnemigo()
    
}
function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueEnemigo()
    
}


function resultadoCombate(){
    
    let spanVidajugador = document.getElementById("vidas-jugador")
    let spanVidaEnemigo = document.getElementById("vidas-enemigo")

    
        if (ataqueJugador == ataqueEnemigoGlobal){
            resultado = "EMPATE 😒"
        } else if (ataqueJugador == "AGUA" && ataqueEnemigoGlobal=="FUEGO" || ataqueJugador == "FUEGO" && ataqueEnemigoGlobal=="TIERRA" || ataqueJugador == "TIERRA" && ataqueEnemigoGlobal=="AGUA"){
            resultado = "GANASTE 🎉"
            vidaEnemigo--
            spanVidaEnemigo.innerHTML = vidaEnemigo
         }  else {
            resultado = "PERDISTE 😢"
            vidaJugador--
            spanVidajugador.innerHTML = vidaJugador
         }
    addElement()
   revisarVidas()
}



function addElement(){
    let sectionMensajes = document.getElementById("mensajes") 
    let nuevoParrafo = document.createElement("p")
    nuevoParrafo.innerHTML = " el ataque del jugador fue " + ataqueJugador + " y el ataque del enemigo fue " + ataqueEnemigoGlobal + " el resultado del combate fue..." + resultado
    sectionMensajes.appendChild(nuevoParrafo)
   
    
}
function revisarVidas(){
    if ( vidaEnemigo == 0){
        mensajeFinal(" FELICITACIONES GANASTE")
    }else if (vidaJugador ==0){
        mensajeFinal(" HAS PERDIDO, MAS SUERTEE EN LA PROXIMA")
    }
}

function mensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("mensajes") 
    let nuevoParrafo = document.createElement("p")
    nuevoParrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(nuevoParrafo)
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true
    let seccionReiniciar = document.getElementById("reiniciar")
    seccionReiniciar.style.display = "block"
}
function seleccionarMascotaJugador(){
    let seccionMascota = document.getElementById("seleccionar-mascota")
    seccionMascota.style.display = "none"
    let seccionAtaque = document.getElementById("seleccionar-ataque")
    seccionAtaque.style.display = "block"
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")


    if (inputHipodoge.checked ){
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked  ){
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if(inputRatigueya.checked ){
        spanMascotaJugador.innerHTML = "Ratigueya"
    }else{
        alert(" selecciona una mascota por favor")
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaEnemiga = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    if ( mascotaEnemiga == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge" 
    }else if ( mascotaEnemiga == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo" 
    }else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
    
    // mostrar resultado combatee
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random()  *  (max-min + 1 )+ min)
}
function aleatorio2(min,max){
    return Math.floor(Math.random()  *  (max-min + 1 )+ min)
}


window.addEventListener("load",iniciarJuego)
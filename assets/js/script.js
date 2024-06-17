let obtenerStickerGithub = document.getElementById("stickerGithub")
let obtenerStickerSlack = document.getElementById("stickerSlack")
let obtenerStickerGit = document.getElementById("stickerGit")

let resultadoVerificar = document.getElementById("totalStickers")
let resultadoVerificarPassword = document.getElementById("estadoContrasenia")
let botonVerificar = document.getElementById("buttonVerify")
let botonVerificarPassword = document.getElementById("passwordVerify")


/* funciones para establecer margenes a las imagenes*/
obtenerStickerGithub.addEventListener("click", function(){
    if (!obtenerStickerGithub.style.border || obtenerStickerGithub.style.border === "none") {
        obtenerStickerGithub.style.border = "solid 2px #ff0000";
    } else {
        obtenerStickerGithub.style.border = "none";
    }
})

obtenerStickerSlack.addEventListener("click", function(){
    if (!obtenerStickerSlack.style.border || obtenerStickerSlack.style.border === "none") {
        obtenerStickerSlack.style.border = "solid 2px #ff0000";
    } else {
        obtenerStickerSlack.style.border = "none";
    }
})

obtenerStickerGit.addEventListener("click", function(){
    if (!obtenerStickerGit.style.border || obtenerStickerGit.style.border === "none") {
        obtenerStickerGit.style.border = "solid 2px #ff0000";
    } else {
        obtenerStickerGit.style.border = "none";
    }
})

/* funcion para el boton verificar*/
botonVerificar.addEventListener("click", function(){
    let valorInputGithub = Number(document.getElementById("inputGithub").value);
    let valorInputSlack = Number(document.getElementById("inputSlack").value);
    let valorInputGit = Number(document.getElementById("inputGit").value);

    if (valorInputGithub < 0 || valorInputSlack < 0 || valorInputGit < 0) {
        resultadoVerificar.innerHTML = "¡Los valores no pueden ser menor que 0!";
        return;
    }

    let totalStickers = valorInputGithub + valorInputSlack + valorInputGit;
    if (totalStickers <= 10){
        resultadoVerificar.innerHTML = totalStickers;
    } else {
        resultadoVerificar.innerHTML = "¡No puedes llevar mas de 10 stickers!";
    }
});


/* funcion para la seccion password */
botonVerificarPassword.addEventListener("click", function(){
    let valorDigitoUno = Number(document.getElementById("primer-digito").value)
    let valorDigitoDos = Number(document.getElementById("segundo-digito").value)
    let valorDigitoTres = Number(document.getElementById("tercer-digito").value)

    if (valorDigitoUno === 9 && valorDigitoDos === 1 && valorDigitoTres === 1){
        resultadoVerificarPassword.innerHTML = "¡Password 1 Correcto!"
    } else if (valorDigitoUno === 7 && valorDigitoDos === 1 && valorDigitoTres === 4) {
        resultadoVerificarPassword.innerHTML = "¡Password 2 Correcto!"
    } else {
        resultadoVerificarPassword.innerHTML = "Incorrecto"
    }
})







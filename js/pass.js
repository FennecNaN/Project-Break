let generateBtn = document.getElementById("generateBtn")
let showPass = document.getElementById("showPass")

generateBtn.addEventListener("click", function (){
    let passLength = document.getElementById("passLength").value
    let finalPass = generatePass(passLength)
    showPass.innerHTML = finalPass
})


function generatePass(length){
    let charactersPass = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!@#$%&/*-+"
    let password = "";

    for (let i=0; i<= length; i++){12
        password += charactersPass.charAt(Math.floor(Math.random() * charactersPass.length ))
    }

    if (password.length < 12 || password.length > 51 ) {
        password = "La contraseña debe tener una longitud mínima de 12 y máxima de 50 caracteres"
    }
    return password;

}


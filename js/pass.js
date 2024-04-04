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

    for (let i=0; i<= length; i++){
        password += charactersPass.charAt(Math.floor(Math.random() * charactersPass.length ))
    }

    return password;

}


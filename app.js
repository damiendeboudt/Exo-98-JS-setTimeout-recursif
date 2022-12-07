let compteur = 0
let buttonSetInterval = document.getElementById("buttonSetInterval")
let intervalDiv = document.getElementById("compteur")


let timeOutrecurs = function (){
    let inTer = setTimeout(()=> {
        if (compteur <= 600) {
            intervalDiv.innerHTML = compteur.toString()
            compteur++
            timeOutrecurs()
            }
        else{
            clearInterval(inTer)
        }
    }, 1000)
}

buttonSetInterval.addEventListener("click", timeOutrecurs)
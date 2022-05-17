let elementoDosNumeros = document.querySelectorAll(".num")
let display = document.querySelector(".viewer")
let limpar = document.getElementById("clear")
let operador = document.querySelectorAll(".ops")
let resultado = document.querySelector(".equals")

elementoDosNumeros.forEach((numElem) => {
    numElem.onclick = () => {
        display.textContent += numElem.textContent
    }
})

limpar.onclick = () => {
    display.textContent = ""
}

operador.forEach((opp) =>{
    opp.onclick = () => {
        display.textContent += opp.textContent
        console.log(opp.textContent)
    }
} )

resultado.onclick = () => {
    if (display.textContent){
        display.textContent = eval(display.textContent)
    } 
}
// teste
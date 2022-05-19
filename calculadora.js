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
    console.log('onclick limpar');
    let resultado = document.querySelector(".viewer").innerHTML
    document.querySelector(".viewer").innerHTML = resultado.substring(0, resultado.length - 1)
}
operador.forEach((opp) => {
    opp.onclick = () => {
        console.log(display.textContent)
        console.log(typeof(display.textContent))
        if(display.textContent === Number)
        display.textContent += opp.textContent}
    }
)


resultado.onclick = (e) => {
    if (display.textContent) {
        display.textContent = eval(display.textContent)
        console.log(eval) //colocar outras estruturas de repetições para que não retorne erros
    }
}

let classe = document.getElementById("viewer")

if (classe.textContent === Infinity) {
    classe.classList.remove("viewer")
    classe.classList.add("error")
}

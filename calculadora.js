console.log('init js');

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
    console.log('forEach operador', opp);
    opp.onclick = () => {
        console.log('onclick operador');
        display.textContent += opp.textContent
        console.log(opp.textContent)
    }
})

resultado.onclick = (e) => {
    console.log('onclick resultado');
    if (display.textContent) {
        display.textContent = eval(display.textContent)
    }
}

let classe = document.getElementById("viewer")

if (classe.textContent === Infinity) {
    classe.classList.remove("viewer")
    classe.classList.add("error")
}

console.log('end js');

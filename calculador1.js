(function () {

    let el = function (element) {
        if (element.charAt(0) === "#") { //Seletor de elementos usando charAt cujo o indeci 0 do elemento selecionado que começar 
            //com "#" será selecionando apaenas o elemento em si
            return document.querySelector(element)
        }
        return document.querySelectorAll(element)
    }

    let numeros = el(".num"),
        operadores = el('.ops'),
        igual = el("#equals"),
        display = el("#viewer"),
        resultado,
        op1 = "",
        op2 = "",
        operador;

    let selectNum = function () {
        if (resultado) {
            op1 = this.getAttribute("data-num")
            resultado = ""
        } else {
            op1 += this.getAttribute("data-num")
        }
        display.innerHTML = op1
    }
    let moveNum = function () {
        op2 = op1
        op1 = ""
        operador = this.getAttribute("data-ops");

        igual.getAttribute("data-result", "");
    }
    let vizualizacao = function () {
        op1 = parseFloat(op1)
        op2 = parseFloat(op2)

        switch (operador) {
            case "plus":
                resultado = op2 + op1
                break;
            case "minus":
                resultado = op2 - op1
                break;
            case "divided by":
                resultado = op2 / op1
                break;
            case "times":
                resultado = op2 * op1
                break;
            default:
                resultado = op1;
        }

        if (!isFinite(resultado)) {
            if (isNaN(resultado)) { 
              resultado = "ERROR"
              el('#viewer').classList.add("error")
            }else {
                resultado = "ERROR"
                el('#viewer').classList.add("error")
            }
        }


        display.innerHTML = resultado
        igual.setAttribute("data-result", resultado)

        op2 = 0
        op1 = resultado
    }
    let limpar = function () {
        op1 = ""
        op2 = ""
        display.innerHTML = "0"
        igual.setAttribute("data-result", resultado)
        el('#viewer').classList.remove("error")
    }

    for (let i = 0, l = numeros.length; i < l; i++) {
        numeros[i].onclick = selectNum;
    }
    for (let i = 0, l = operadores.length; i < l; i++) {
        operadores[i].onclick = moveNum;
    }

    igual.onclick = vizualizacao;

    el("#clear").onclick = limpar;

}())
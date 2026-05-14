function calculator() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;

    let resultado;
    switch (operator) {

        case '+':
            resultado = number1 + number2;
            break;

        case '-':
            resultado = number1 - number2;
            break;

        case '*':
            resultado = number1 * number2;
            break;

        case '/':
            resultado = number1 / number2;
            break;

        default:
            return "invalid operator";
    }

    document.getElementById("resultado").innerHTML = resultado;

    return resultado;
}

function ejecutar() {

    let resultadoFinal = calculator();

    comparation(resultadoFinal);

}

function comparation(resultado) {

    if (resultado > 10) {
        console.log("Es mayor que 10");
    } 
    else if (resultado < 10) {
        console.log("Es menor a 10");
    } 
    else if (resultado == 10) {
        console.log("Es igual a 10");
    }
}


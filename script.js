const inputNumero = document.getElementById("numero");
const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () =>
    {
        let numero = Number(inputNumero.value);
        let factorial = 1;

        if (Number.isNaN(numero)) {
            resultado.textContent = `El número ingresado no es un número`;

        } else if (numero < 0) {
            resultado.textContent = `El número ingresado no debe ser negativo`;

        } else if (!Number.isInteger(numero)) {
            resultado.textContent = `El número ingresado debe ser entero`;

        } else {
            while (numero > 1) {
                factorial *= numero;
                numero--;
            }
            resultado.textContent = `El resultado es: ${factorial}`;
        }
    });
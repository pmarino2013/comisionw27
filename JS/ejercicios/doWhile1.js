/* Escribir un programa que solicite la carga de un número entre 0 y 999, y nos muestre un mensaje de cuántos dígitos tiene el mismo. Finalizar el programa cuando se cargue el valor 0. */

let num;

do {
    num = parseInt(prompt('Ingrese un valor entre 0 y 999: '));
    if(num >= 0 && num < 1000){
        if(num < 10){
            document.write(`Tiene 1 dígito<br>`);
        } else if (num < 100){
            document.write(`Tiene 2 dígitos<br>`);
        } else {
            document.write(`Tiene 3 dígitos<br>`);
        }
    } else {
        document.write(`Ingresó un valor inválido!<br>`)
    }
} while (num != 0);
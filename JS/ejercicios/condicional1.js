/* let num;

num = parseInt(prompt("Ingrese un número entero: "));

if (num % 2 === 0) {
    document.write(`El módulo del número ${num} en base 2 es: ${num % 2}<br>`);
    console.log(`El módulo del número ${num} en base 2 es: ${num % 2}<br>`)
    document.write(`El número ${num} es PAR`);
    console.log(`El número ${num} es PAR`);
} else {
    document.write(`El módulo del número ${num} en base 2 es: ${num % 2}<br>`);
    console.log(`El módulo del número ${num} en base 2 es: ${num % 2}<br>`)
    document.write(`El número ${num} es IMPAR`);
    console.log(`El número ${num} es IMPAR`);
}; */

let edad;

edad = parseInt(prompt("Ingrese la edad de la persona: "));

if (edad >= 18) {
    document.write("La persona es MAYOR DE EDAD");
} else {
    document.write("La persona es MENOR DE EDAD");
};
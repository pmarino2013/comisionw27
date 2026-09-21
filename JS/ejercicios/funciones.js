/* function saludar(nombre) {
    return `Hola ${nombre}! Que tengas un muy buen día!<br>`
}

document.write(saludar('Julio'));
document.write(saludar('Eric'));

let nombrePersona = prompt("Ingrese su nombre: ");
document.write(saludar(nombrePersona)) */


/* document.write(saludar());
document.write(saludar());
document.write(saludar());
document.write(saludar());

function saludar() {
    let nombre = prompt("Ingrese su nombre");
    return `Hola ${nombre}! Que tengas un muy buen día!<br>`
} */

/* let num;

num = parseInt(prompt("Ingrese un numero: "));

if(num % 2 === 0){
    document.write("es par")
} else {
    document.write("Es impar")
} */

/* 18. Diseña una función `obtenerMayor(a, b, c)` que reciba tres números y devuelva el mayor de ellos mediante condicionales `if/else`. */

/* let num1 = parseInt(prompt('Ingrese el primer número:'));
let num2 = parseInt(prompt('Ingrese el segundo número:'));
let num3 = parseInt(prompt('Ingrese el tercer número:')); */

/* function obtenerMayor(nummero1, numero2, numero3) {
    if (num1 >= num2 && num1 >= num3) {
        return console.log(`El mayor es ${num1} `);
    } else if (num2 >= num1 && num2 >= num3) {
        return console.log(`El mayor es ${num2} `);
    } else {
        return console.log(`El mayor es ${num3} `);
    }
} */

/*     function obtenerMayor(nummero1, numero2, numero3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1
    } else if (num2 >= num1 && num2 >= num3) {
        return num2
    } else {
        return num3
    }
}

console.log('El mayor es: ', obtenerMayor(num1, num2,num3)); */

/* 19. Escribe una función `calcularAreaTriangulo(base, altura)` que retorne el área de un triángulo (Área = (base * altura) / 2). Si algún valor es <= 0, retorna 'Medidas inválidas'. */

/* let base, altura, area;

base = parseFloat(prompt("Ingrese la base del triángulo: "));
altura = parseFloat(prompt("Ingrese la altura del triángulo: "));

function calcularAreaTriangulo(base, altura){
    if (base <= 0 || altura <= 0) {
        return console.log("Medidas Inválidas!");
    }
    let area = base * altura;

    return area;
}

console.log(`El área del triángulo de base ${base} y altura ${altura} es: ${calcularAreaTriangulo(base, altura)}`); */

/* 20. Crea una función `calcularFactorial(n)` que retorne el factorial de un número entero positivo n (n! = n * (n-1) * ... * 1). */

let numero;

numero = parseInt(prompt('Ingrese un número: '));

function factorial(number) {
    if (numero < 0){
        return console.log("No definido!");
    }

    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;        
    }

    return resultado;
}

console.log(`El factorial del número ${numero} es: ${factorial(numero)}`);
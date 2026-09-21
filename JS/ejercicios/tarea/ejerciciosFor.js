/* 12. Tienes un array con temperaturas en Celsius: `const temperaturasC = [0, 15, 22, 30, 38];`. Crea un nuevo array con las equivalencias en Fahrenheit utilizando la fórmula: F = (C * (9/5)) + 32. */

/* const temperaturasC = [];
const temperaturasF = [];
let tempC;

while (tempC !== 'f') {
    tempC = prompt('Ingrese la temperatura en °C (para terminar presione "f"');
    if( tempC !== 'f') {
        temperaturasC.push(tempC);
    }
}

for (let i = 0; i < temperaturasC.length; i++) {
    const tempF = ((temperaturasC[i] * 9/5) + 32);
    temperaturasF.push(tempF);
};
console.log(`Temperaturas en Celsius: ${temperaturasC}`);
console.log(`Temperaturas en Farenheit: ${temperaturasF}`); */

/* 13. Dado el array `const productos = ['Laptop', 'Teclado', 'Mouse', 'Monitor'];` y `const buscado = 'Mouse';`: Recorre el array. Si encuentras el producto, imprime 'Producto encontrado en la posición X' y rompe el bucle con `break`. */

let producto, buscado;
const productos = [];

while (producto !== 'f') {
    producto = prompt('Ingrese el nombre del producto a cargar: ').toLowerCase();
    if (producto !== 'f'){
        productos.push(producto)
    };
}
console.log(productos);

buscado = prompt("Ingrese el producto a buscar: ").toLowerCase();

for (let i = 0; i < productos.length; i++) {
    if(buscado === productos[i]) {
        console.log(`Producto encontrado en la posición ${i}`);
        break;
    } else {
        console.log(`El producto ${buscado} no fue encontrado!`);
    }
};

/* 14. Tienes las categorías: `['HTML', 'CSS', 'JavaScript', 'React']`. Construye mediante un bucle for un bloque de código HTML que represente una lista desordenada (...) y muéstralo por consola. */

/* const categorias= ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
let html = '<ul>\n';

for (let i = 0; i < categorias.length; i++) {
    html +=`  <li>${categorias[i]}</li>\n`;
}

html += '</ul>';
console.log(html); */

/* 15. Dada la matriz `const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];`, utiliza dos bucles for anidados para sumar TODOS los números presentes en la matriz. */

/* const matriz = [[1, 2, 3, 20], [4, 5, 6, 21], [7, 8, 9, 22], [10, 11, 12, 23]];
let sumaTotal = 0;

for (let i = 0; i < matriz.length; i++) {
   for (let j = 0; j < matriz[i].length; j++) {
        sumaTotal += matriz[i][j]
   };    
};

console.log(`Suma total de la matriz: ${sumaTotal}`); */
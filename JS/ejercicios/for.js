/* Cuenta números */
/* for (let i=1; i <= 50; i++){
    document.write(`${i} <br>`);
} */

/* Cuenta regresiva */
/* for (let i = 10; i >= 1; i--) {
    document.write(`${i} <br>`);    
} */

/* Números pares entre 0 y 100 */
/* for (let i = 0; i <= 100; i += 2) {
    document.write(`${i} <br>`);
} */

/* Tabla de Multiplicar */
/* let resultado
let numero = parseInt(prompt("Ingrese un número:"));

for(let i = 1; i<=10; i++){
    resultado = numero * i;
    document.write(`${numero} x ${i} = ${resultado}<br>`);
} */

/* let numero = Number(prompt("Ingresá un número"));

for(let i = 1; i <= 10; i++ ){
    console.log(`${numero} x ${i} = ${numero * i}`);
} */

/* Recorrido de Arrays */
/* Dado el array `const frutas = ['Manzana', 'Banana', 'Naranja', 'Frutilla', 'Kiwi'];`, recorre el arreglo con un bucle for e imprime cada fruta precedida de su índice. */

/* const frutas = ['Manzana', 'Banana', 'Naranja', 'Frutilla', 'Kiwi', 'Mango', 'Mandarina', 'Pera'];

for (let i = 0; i < frutas.length; i++) {
    document.write(`${i}: ${frutas[i]}<br>`);
};
document.write(`Tengo ${frutas.length} de frutas`); */

/* Dado el array `const numeros = [14, 52, 89, 3, 27, 91, 44];`, utiliza un bucle for para encontrar el número más grande e imprímelo en pantalla. (Restricción: No usar Math.max). */

/* const numeros = [125, 14, 52, 89, 3, 27, 91, 44, 234];
let max = numeros[0];

for (let i = 1; i < numeros.length; i++ ){
    if(numeros[i] > max){
        max = numeros[i];
    }
}

document.write(`El número más grande del arreglo es: ${max}`) */

/* Dado el array `const usuarios = ['Ana', 'Bernardo', 'Camilo', 'Lia', 'Alexander', 'Zoe'];`, muestra únicamente aquellos nombres que tengan más de 4 letras. */
/* 
const usuarios = ['Ana', 'Bernardo', 'Camilo', 'Lia', 'Alexander', 'Zoe', 'Eric', 'Julio', 'Zenaida'];

for (let i = 0; i < usuarios.length; i++){
    if(usuarios[i].length > 4){
        document.write(`${usuarios[i]}: ${usuarios[i].length}<br>`);
    }
}

let textoPrueba = 'La asistencia para esta clase está actualmente abierta. Los estudiantes pueden registrarse. Recuerda cerrarla al finalizar. Y tenga una buena semana!'

document.write(`El texto tiene ${textoPrueba.length} caracteres`); */

/* Dada la cadena `const frase = 'javascript es genial';`, cuenta cuántas vocales (a, e, i, o, u) contiene utilizando un bucle for. */

/* const frase = 'javascript es genial, pero no es lo mejor';
let contadorVocales = 0;
const vocales = 'aeiouAEIOU';

for(let i = 0; i < frase.length; i++){
    if(vocales.includes(frase[i])){
        contadorVocales++;
    }
}

document.write(`Cantidad de vocales en el texto: ${contadorVocales}`) */

/* let arr = [2, 4, 6]
arr.push(8)
console.log(arr.length + arr[2]); */

/* let a=[32, 43, 78, 96, 55, 29];

a[a.length - 1]++;
console.log(a); */

/* Dado un array de números `[10, 20, 30, 40, 50, 60]`, suma únicamente los elementos que se encuentren en índices pares (0, 2, 4...) */

/* const numeros =[10, 20, 30, 40, 50, 60, 70, 80, 90];
let suma=0;
for ( let i=0; i< numeros.length; i+=2){
    suma+= numeros[i];
}
document.write(suma); */

const numeros = [10, 20, 30, 40, 50, 60];
let suma = 0;

for (let i = 0; i < numeros.length; i += 2) {
    suma += numeros[i];
}

document.write(suma);
console.log(numeros)
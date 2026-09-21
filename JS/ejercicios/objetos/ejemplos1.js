/* const auto = {
    color: "verde",
    marca: "fiat",
    modelo: "bravo",
    anio: 2008,
    potencia: "130bhp"
}

const auto2 = {
    color: "negro",
    marca: "fiat",
    modelo: "strada",
    anio: 2025,
    potencia: "110bhp"
}

console.log(auto);
console.log(auto2);
console.log(auto.color)
console.log(auto2.modelo)

auto.precio = 70000;
console.log(auto);
console.log(auto2);

auto.precio = 65000;
console.log(auto)

delete auto.precio;
console.log(auto); */

/* const productos = [
    {
        id: 1, 
        name: "Leche",
        price: 120,
        categories: ["familiar", "comida"] 
    },
    {
        id: 2, 
        name: "Arroz",
        price: 80,
        categories: ["familiar", "comida"] 
    },
    {
        id: 3, 
        name: "Lavadora",
        price: 7800,
        categories: ["electrodomésticos"] 
    },
    {
        id: 4,
        name: "Cafetera",
        price: 1500,
        categories: ["electrodomésticos", "cocina", "familiar"]
    },
    {
        id:5,
        name: "Cacerola",
        price: 500,
        categories: ["familiar", "cocina"]
    }
]

for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    console.log(producto.name);
    console.log(`ID: ${producto.id}`);
    console.log(`Precio: ${producto.price}`);
    console.log(`Categorías: ${producto.categories.join(", ")}`);
} */

/* CONSTRUCCIÓN DE OBJETOS */
/* 1. FUNCIÓN CONSTRUCTORA */
/* 
function Auto(color, marca, modelo, anio){
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
};

let auto = new Auto("rojo", "fiat", "bravo", 2008);
console.log(auto);
let nascar = new Auto("negro", "chevrolet", "camaro", 2026);
console.log(nascar); */

/* 2. CONSTRUCTOR Object() */
/* let auto = new Object();
auto.color = "rojo";
auto.marca = "fiat";
auto.modelo = "bravo";
auto.anio = 2008;

console.log(auto);
 */
/* 3. Object.create() */
/* let auto2 = Object.create(auto);
auto2.color = "azul",
auto2.marca = "renault",
auto2.modelor = "clio williams",
auto.anio = 1996

console.log(auto2.marca);

auto2.precio = 45000;
console.log(auto2) */

/* CLASES (POO) */

/* class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    comer() {
        alert('Comiendo...');
    }

    dormir() {
        alert('Duermiendo');
    }

    correr() {
        alert('Corriendo...');
    }
} */
/* 
let persona1 = new Persona("Juan", "Mendoza", 20);
let persona2 = new Persona("Carlos", "Gardel", 24);

console.log(`${persona1.nombre} ${persona1.apellido}`);
console.log(`${persona2.nombre} ${persona2.apellido}`); */

/* let nombre, apellido, edad, continuar;
let clientes = []; */
/* nombre = prompt('Ingrese el nombre de la persona: ');
apellido = prompt('Ingrese el apellido de la persona: ');
edad = parseInt(prompt('Ingrese la edad de la persona: '));

let cliente = new Persona(nombre, apellido, edad);
console.log(cliente); */

/* do {
    nombre = prompt('Ingrese el nombre de la persona: ');
    apellido = prompt('Ingrese el apellido de la persona: ');
    edad = parseInt(prompt('Ingrese la edad de la persona: '));
    continuar = prompt('Desea cargar otro cliente: ')
    let cliente = new Persona(nombre, apellido, edad);
    clientes.push(cliente)
} while (continuar != 'f');

console.log(clientes);

for (let i = 0; i < clientes.length; i++) {
    console.log(clientes[i].edad);
} */

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    depositar(dinero) {
        this.saldo = this.saldo + dinero;
    }

    extraer(dinero) {
        this.saldo = this.saldo - dinero;
    }
}

const cliente1 = new Cliente("Diego", 1200);
document.write(`Nombre del cliente: ${cliente1.nombre}<br>`);
document.write(`Saldo actual: ${cliente1.saldo}<br>`);
cliente1.depositar(120);
document.write(`Nombre del cliente: ${cliente1.nombre}<br>`);
document.write(`Saldo actual: ${cliente1.saldo}<br>`);
cliente1.extraer(1000);
document.write(`Nombre del cliente: ${cliente1.nombre}<br>`);
document.write(`Saldo actual: ${cliente1.saldo}<br>`);

const cliente2 = new Cliente("Ana", 100);
document.write(`Nombre del cliente: ${cliente2.nombre}<br>`);
document.write(`Saldo actual: ${cliente2.saldo}<br>`);
cliente2.depositar(200);
document.write(`Nombre del cliente: ${cliente2.nombre}<br>`);
document.write(`Saldo actual: ${cliente2.saldo}<br>`);
document.write(`Saldo actual: ${cliente2.saldo}<br>`);
cliente2.depositar(500);
document.write(`Nombre del cliente: ${cliente2.nombre}<br>`);
document.write(`Saldo actual: ${cliente2.saldo}<br>`);

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar = new Car("Ford", 2014);
document.write("My car is " + myCar.age() + " years old." + "<br>");

const camaro = new Car("Chevrolet", 1969);
document.write(`Mi Camaro tiene ${camaro.age()} años`)

/* document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old."; */


/* let num;

num = parseInt(prompt("Ingrese un número entre 1 y 5: "));

switch (num) {
    case 1:
        document.write('uno');
        break;
    case 2:
        document.write('dos');
        break;
    case 3:
        document.write('tres');
        break;
    case 4:
        document.write('cuatro');
        break;
    case 5:
        document.write('cinco');
        break;
    default:
        document.write("Ingreso un valor inválido!");
} */

let color;

color = prompt('Ingrese alguno de estos tres colores (rojo, verde, azul): ');

switch (color) {
    case 'rojo':
        document.write('se ingresó rojo')
        break;
    case 'verde':
        document.write('se ingresó verde')
        break;
    case 'azul':
        document.write('se ingresó azul')
        break;
    default:
        document.write('Le solicitamos que ingrese uno de los tres colores (rojo, verde, azul)');
        break;
}
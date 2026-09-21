let nota;
nota = Math.trunc(parseFloat(prompt("Ingrese la nota del alumno: ")));

if (nota >= 90 && nota <= 100) {
    document.write("La nota del alumno es A");
} else if (nota >= 80 && nota < 90) {
    document.write("La nota del alumno es B");
} else if (nota >= 70 && nota < 80) {
    document.write("La nota del alumno es C");
} else if (nota >= 60 && nota < 70) {
    document.write("La nota del alumno es D");
} else if (nota >= 0 && nota < 60) {
    document.write("La nota del alumno es F");
} else {
    document.write("Ingresó un valor inválido!");
};
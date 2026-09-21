class Menu {
    constructor() {
        this.enlaces = [];
        this.descripcion = [];
    }

    insertar(enlace, descripcion) {
        this.enlaces.push(enlace);
        this.descripcion.push(descripcion);
    }

    mostrar(elemento) {
        let cadena = '<nav>';
        for (let x = 0; x < this.enlaces.length; x++)
            cadena += `<a href="${this.enlaces[x]}">${this.descripcion[x]}</a>`;
        cadena += '</nav>';
        document.getElementById(elemento).innerHTML = cadena;
    }
}

const menu = new Menu();
menu.insertar("http://www.google.com", "Inicio");
menu.insertar("http://www.infobae.com", "Clientes");
menu.insertar("http://www.bing.com", "Sobre Nosotros");
menu.insertar("http://www.yahoo.com", "Contacto");
menu.insertar("http://www.clarin.com", "Admin");

menu.mostrar('menu');
//PROMESA

const miPromesa = () => {
  return new Promise((resolve, reject) => {
    let exito = true;
    setTimeout(() => {
      if (exito) {
        resolve("Tarea terminada ✅");
      } else {
        reject("Falló la tarea ❌");
      }
    }, 3000);
  });
};

miPromesa()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
//   .finally(() => console.log("Ejecución terminada"));

let peliculas = [];

// fetch("https://devsapihub.com/api-movies")
//   .then((respuesta) => respuesta.json())
//   .then((datos) => console.log(datos));

//async / await

const traerPeliculas = async () => {
  try {
    //cuando todo sale bien
    const response = await fetch("https://devsapihub.com/api-movie");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`No se realizó la petición. Error: ${error}`);
    return error;
  }
};

const listaDePeliculas = document.getElementById("peliculas-list");

const crearTarjetas = (peli) => {
  const columna = document.createElement("div");
  columna.classList = "col";
  const tarjeta = `<article class="movie-card">
                <div
                  class="movie-poster poster-ultima"
                  role="img"
                  aria-label="Arte ilustrado de la película La última señal"
                >
                  <span class="poster-kicker">Una película original</span>
                  <span class="poster-art-title">${peli.title}</span>
                  <span class="poster-art-detail" aria-hidden="true"></span>
                  <span class="poster-category">${peli.genre[0]}</span>
                </div>
                <div class="movie-card-body">
                  <div class="movie-card-meta">
                    <span>${peli.year}</span>
                    <span class="movie-rating">★ ${peli.stars}</span>
                  </div>
                  <h3 class="movie-title">${peli.title}</h3>
                  <p class="movie-description">
                    ${peli.description}
                  </p>
                  <span class="movie-genre">${peli.genre[0]}</span>
                </div>
              </article>`;

  columna.innerHTML = tarjeta;
  listaDePeliculas.append(columna);
};

traerPeliculas()
  .then((info) => {
    peliculas = info.slice(0);
    peliculas.map((pelicula) => crearTarjetas(pelicula));
  })
  .catch((err) => console.log(err));

//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, renderItems, data);

const root = document.getElementById("root2");


//for (let i = 1; i <= 21; i++){
// fetch(URL)
// .then((Response) => Response.json())
// .then(data => mostrarPelicula(data))

//}
console.log(data.films);


    console.log("funciona");
    data.films.forEach(film => {
        const prueba =  `<div class="info_section">
        <div class="movie_header">
          <img class="images" src="${film.poster}"/>
          <h2 class="name-movie">${film.title}</h2>
          <h4 class="director">Director: ${film.director}</h4>
          <h4 class="producer">Productor: ${film.producer} </h4>
          <br>
          <h4 class="year">${film.release_date}</h4>
          <div class="movie_buttons">
            <ul>
              <li class="material-buttons">Personajes</li>
              <li class="material-buttons">Vehículo</li>
              <li class="material-buttons">Locación</li>
            </ul>
          </div>
        <div class="movie_desc">
          <p class="description"> ${film.description}</p>
        </div>
      </div>
      <div class="images_people root_img"></div>
    </div>`;
        const div = document.createElement('div');
        div.innerHTML = prueba;
        root.appendChild(div);
    });
//}


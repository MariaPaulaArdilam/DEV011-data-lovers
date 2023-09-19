// estas funciones son de ejemplo

export const renderItems = (data) => {
  //crear un variable que voy a devolver 
  const div = document.createElement('div');
  data.forEach(film => {
    //vamos a crear un elemento div 
    const tarjeta = document.createElement('div');
  tarjeta.innerHTML= `<div class="info_section">
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
      <img class="images_people" src="${film.img1}"/>
    </div>
    
  </div>
  
</div>`;
   div.appendChild(tarjeta);
}); 
return div;
}




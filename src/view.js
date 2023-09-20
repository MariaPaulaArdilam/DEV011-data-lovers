// estas funciones son de ejemplo

export const renderItems = (data) => {
  //crear un variable que voy a devolver 
  const div = document.createElement('div');
  data.forEach(film => {
    //vamos a crear un elemento div 
    const tarjeta = document.createElement('div');
    tarjeta.innerHTML = `<ul class="movie_card" id="root" itemscope itemtype="films">
<div class="info_section">
  <li><img class="imagen"
      src="${film.poster}" />
  </li>
  <li >
  <img class="imagen_people" src="${film.img1}"/>
</li>
  <li class="name-movie" itemprop="name">
    <h2>${film.title}</h2>
  </li>
  <li itemprop="director">
    <h4>${film.director}</h4>
  </li>
  <li itemprop="producer">
    <h4>${film.producer}</h4>
  </li>
  <li class="year" itemprop="release_date">${film.release_date}</li>
  <ul class="movie_social">
    <li class="material-button">Personajes</li>
    <li class="material-button">Vehículo</li>
    <li class="material-button">Locación</li>
  </ul>
  <ul class="movie_desc">
    <li class="description" itemprop="description">
    ${film.description}
    </li>
  </ul>
 
</div>
</ul>
`;
    div.appendChild(tarjeta);
  });
  return div;
}
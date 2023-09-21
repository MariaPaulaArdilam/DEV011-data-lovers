// estas funciones son de ejemplo

export const renderItems = (data) => {
  //crear un variable que voy a devolver
  const ul = document.createElement("ul");
  data.forEach((film) => {
    //vamos a crear un elemento div
    const tarjeta = document.createElement("li");
    tarjeta.classList = 'movie_card'
    tarjeta.innerHTML = `
      <div class="info_section" itemtype="film">
        <img class="imagen"
            src="${film.poster}" />
        
       
        <img class="imagen_people" src="${film.img1}"/>
      
        <h2 class="name-movie" itemprop="name">
          ${film.title}</h2>
        
        <h4 itemprop="director">
          ${film.director}</h4>
        
        <h4 itemprop="producer">
          ${film.producer}</h4>
       
        <h4 class="year" itemprop="release_date">${film.release_date}</h4>
        <ul class="movie_social">
          <li class="material-button">Personajes</li>
          <li class="material-button">Vehículo</li>
          <li class="material-button">Locación</li>
        </ul>
        <p class="movie_desc description" itemprop="description">
          ${film.description}
        </p>
      
      </div>
`;
    ul.appendChild(tarjeta);
  });
  return ul;
};

// export const renderItemsCopia = (data) => {
//   //crear un variable que voy a devolver
//   const div = document.createElement('div');
//   data.forEach(film => {
//     //vamos a crear un elemento div
//     const tarjeta = document.createElement('div');
//     tarjeta.innerHTML = `<ul class="movie_card" id="root" itemscope itemtype="films">
// <div class="info_section">
//   <li><img class="imagen"
//       src="${film.poster}" />
//   </li>
//   <li >
//   <img class="imagen_people" src="${film.img1}"/>
// </li>
//   <li class="name-movie" itemprop="name">
//     <h2>${film.title}</h2>
//   </li>
//   <li itemprop="director">
//     <h4>${film.director}</h4>
//   </li>
//   <li itemprop="producer">
//     <h4>${film.producer}</h4>
//   </li>
//   <li class="year" itemprop="release_date">${film.release_date}</li>
//   <ul class="movie_social">
//     <li class="material-button">Personajes</li>
//     <li class="material-button">Vehículo</li>
//     <li class="material-button">Locación</li>
//   </ul>
//   <ul class="movie_desc">
//     <li class="description" itemprop="description">
//     ${film.description}
//     </li>
//   </ul>

// </div>
// </ul>
// `;
//     div.appendChild(tarjeta);
//   });
//   return div;
// }

export const filterData = (data, filterBy, value) => {
  console.log("data", data);
  console.log("filterBy", filterBy);
  console.log("value", value);
  return 1;
};

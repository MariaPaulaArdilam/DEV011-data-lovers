// estas funciones son de ejemplo

export const renderItems = (data) => {
  //crear un variable que voy a devolver
  const ul = document.createElement("ul");
  data.forEach((film) => {
    //vamos a crear un elemento div
    const tarjeta = document.createElement("li");
    tarjeta.classList = "movie_card";
    tarjeta.setAttribute("itemscope", "");
    tarjeta.setAttribute("itemtype", "film");
    tarjeta.innerHTML = `
    
      <div class="info_section" >
     
        <img class="imagen_people" src="${film.img1}"/>
       
        <img class="imagen"
            src="${film.poster}" />
        
       
        <h2 class="name-movie" itemprop="name">
          ${film.title}</h2>
        
        <h4 itemprop="director">
          ${film.director}</h4>
        
        <h4 itemprop="producer">
          ${film.producer}</h4>
          <h4 itemprop="rt_score">Score:
          ${film.rt_score}</h4>
        <h4 class="year" itemprop="release_date">${film.release_date}</h4>
        <a href= "material-button""> Personajes</a>
        <p class="description" itemprop="description">
          ${film.description}
        <p>
       
      
      </div>
`;
    ul.appendChild(tarjeta);
  });
  return ul;
};

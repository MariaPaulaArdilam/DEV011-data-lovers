
// Funcion filtar
export const filterData = (data, filterBy, value) => { //filterData toma un conjunto de datos, un criterio de filtrado y un valor de comparación.
  // console.log("data", data);
  // console.log("filterBy", filterBy);
  // console.log("value", value);
  const filter = data.filter((element) => {
    return element[filterBy] === value;
  });
  return filter;
};

//funcion Ordenar
export const sortData = (data, sortBy, sortOrden) => {
  // console.log("data", data);
  // console.log("sortBy", sortBy);
  // console.log("sortOrden", sortOrden );

  const ordendata = [...data].sort((a, b) => {
    if (sortOrden === "asc") {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }

      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
    } else if (sortOrden === "desc") {
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }

      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
    }
  });

  return ordendata;
};

//Funcion Estadistica
export const computeStats = (data) => {
  const estadistica = data.films.reduce((total, movie) =>{
    return total + parseFloat(movie.rt_score); //se calcula la estadística promedio de las puntuaciones 
  }, 0) / data.films.length; //
  const peliculaMaxScore = data.films.reduce((max, movie) => { // Se utiliza el método reduce para iterar sobre la lista de películas y acumular la suma de las puntuaciones 
    return parseFloat(movie.rt_score) > parseFloat(max.rt_score) ? movie : max;
  });
  const cantidadPeliculasScoreMayor95 = data.films.reduce((contador, movie) => {
    return parseFloat(movie.rt_score) > 95 ? contador + 1 : contador;
  }, 0);
  return {
    estadistica,
    peliculaMaxScore,
    cantidadPeliculasScoreMayor95,
  };
};
//.map


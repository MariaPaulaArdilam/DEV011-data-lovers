// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return [];
// };

export const filterData = (data, filterBy, value) => {
  // console.log("data", data);
  // console.log("filterBy", filterBy);
  // console.log("value", value);

  
  const filter = data.filter((element) => {
    return element[filterBy] === value;
  });
  return filter;
};

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

//calculo
export const computeStats = (data) => {
  const estadistica = data.films.reduce((total, movie) =>{
    return total + parseFloat(movie.rt_score);
  }, 0) / data.films.length;
  const peliculaMaxScore = data.films.reduce((max, movie) => {
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


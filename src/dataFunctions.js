// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return [];
// };

export const filterData = (data, filterBy, value) => {
  console.log("data", data);
  console.log("filterBy", filterBy);
  console.log("value", value);

  
  const filter = data.filter((element) => {
    return element[filterBy] == value;
  });
  return filter;
};

export let sortData = (data, sortBy, sortOrden)=>{
  console.log("data", data);
  console.log("sortBy", sortBy);
  console.log("sortOrden", sortOrden );

  const ordendata = data.sort ((a,b) => {

    if (sortOrden == 'asc') {
      if (a[sortBy] < b[sortBy]){
        return -1;
      }
       
      if (a[sortBy] > b[sortBy]){
        return 1;
      } 
  
      
    } else if (sortOrden == 'desc') {
      if (a[sortBy] > b[sortBy]){
        return -1;
      }
       
      if (a[sortBy] < b[sortBy]){
        return 1;
      } 
  
    }
    
  })
  
  return ordendata;
  
};

//.map
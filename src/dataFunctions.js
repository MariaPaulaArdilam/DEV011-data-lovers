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

export const sortData = (data, sortBy, value)=>{
  console.log("data", data);
  console.log("sortBy", sortBy);
  console.log("value", value);


};

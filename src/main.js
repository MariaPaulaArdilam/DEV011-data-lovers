// import { example } from './dataFunctions.js';
import { renderItems } from "./view.js";
import { filterData } from "./dataFunctions.js";
import { sortData } from "./dataFunctions.js";

// import data from './data/lol/lol.js';
import data from "/data/ghibli/ghibli.js";
// import data from './data/rickandmorty/rickandmorty.js';

console.log(filterData, renderItems, data);

const root = document.getElementById("root");
root.appendChild(renderItems(data.films));

const datafilm = data.films;
const selectFilter = document.getElementsByName("Filter")[0];

selectFilter.addEventListener("change", () => {
  const resulFilter = filterData(datafilm, "director", selectFilter.value);
  console.log(resulFilter);
  root.innerHTML = "";
  root.appendChild(renderItems(resulFilter));
});

const dataorden = data.films;
const selectSort = document.getElementsByName("alphabet")[0];

selectSort.addEventListener("change", () => {
  let resultsort = sortData(dataorden, "title", selectSort.value);
  root.innerHTML=""
  root.appendChild(renderItems(resultsort))
  console.log(resultsort);
});

//Función Boton limpiar.

const ResetBotton = document.querySelector("button[data-testid='select-filter']");
ResetBotton.addEventListener('click',() =>{
  window.location.reload(true);
selectFilter.selectedIndex = 0;
selectSort.selectedIndex = 0;
 });



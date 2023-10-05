// import { example } from './dataFunctions.js';
import { renderItems } from "./view.js";
import { filterData } from "./dataFunctions.js";
import { sortData } from "./dataFunctions.js";
import { computeStats } from "./dataFunctions.js";
import data from "./data/ghibli/ghibli.js";

console.log(computeStats, renderItems, data);

const root = document.getElementById("root");
root.appendChild(renderItems(data.films));

const datafilm = data.films;
const selectFilter = document.getElementsByName("Filter")[0];
let resulFilter;
selectFilter.addEventListener("change", () => {
  resulFilter = filterData(datafilm, "director", selectFilter.value);
  console.log(resulFilter);
  root.innerHTML = "";
  root.appendChild(renderItems(resulFilter));

});

const selectSort = document.getElementsByName("alphabet")[0];

selectSort.addEventListener("change", () => {
  let dataorden = null;
  if (resulFilter) {
    dataorden = resulFilter;
  } else {
    dataorden = data.films;
  }
  const resultsort = sortData(dataorden, "title", selectSort.value);
  root.innerHTML = "";
  root.appendChild(renderItems(resultsort));
  // console.log(resultsort);
});

///calculo
const estadistica = document.querySelector(".top-5");
estadistica.addEventListener("dblclick", () => {
  const peliculasScoreMayor95 = computeStats(data);
  root.innerHTML = "";
  root.appendChild(renderItems(data.films));
  console.log(peliculasScoreMayor95);
});
estadistica.addEventListener("click", () => {
  const peliculasScoreMayor95 = computeStats(data);

  // Manda texto con los resultados
  const resultadoTexto = `
    La película con el score más alto es: ${peliculasScoreMayor95.peliculaMaxScore.title}<br><br>
    ${peliculasScoreMayor95.cantidadPeliculasScoreMayor95} peliculas de Studio Ghibli tienen el Score por encima de 95<br><br>
    El promedio de scores en Studio Ghibli es de: ${peliculasScoreMayor95.estadistica}
    `;
  estadistica.innerHTML = resultadoTexto;

//Función Boton limpiar.
const ResetBotton = document.querySelector("button[data-testid='button-clear']");
ResetBotton.addEventListener("click", () => {
  root.innerHTML = "";
  estadistica.innerHTML="Datos";
  root.appendChild(renderItems(data.films));

});


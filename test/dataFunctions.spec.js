import { filterData } from "../src/dataFunctions.js";
import { sortData } from "../src/dataFunctions.js";
import { computeStats } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

//Filtro por director
describe("filter Funtions", () => {
  it("returns title Castle in the Sky, My Neighbor Totoro", () => {
    const filterDirector = filterData(fakeData, "director", "Hayao Miyazaki");
    filterDirector.forEach((element) => {
      expect(element.director).toBe("Hayao Miyazaki");
    });
    expect(filterDirector.length).toBe(2);
  });
});
// Ordenado por titulo asc-desc
describe("ordenado", () => {
  it("ordena de asc - desc", () => {
    const resultasc = sortData(fakeData, "title", "asc");
    expect(resultasc).toEqual(fakeData.reverse());
  });
});
// Ordenado por titulo desc-asc
describe("ordenado2", () => {
  it("ordena de desc-asc ", () => {
    const resultdesc = sortData(fakeData, "title", "desc");
    expect(resultdesc).toEqual(fakeData.reverse());
  });
});

// Función para estadistica según el score
describe("estadistica", () => {
  it("calcular las estadísticas correctamente usando el rt_score", () => {
    const fakeData = {
      films: [{ rt_score: "93" }, { rt_score: "95" }],
    };
    const resultado = computeStats(fakeData);
    expect(resultado.estadistica).toBe(94);
    expect(resultado.peliculaMaxScore.rt_score).toBe("95");
    expect(resultado.cantidadPeliculasScoreMayor95).toBe(0);
  });
});

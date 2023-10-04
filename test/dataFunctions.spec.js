import { filterData, sortData, computeStats } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";
import { data as datafake} from "./data.js"

console.log(fakeData);

describe("filter Funtions", () => {
  it("returns title Castle in the Sky, My Neighbor Totoro", () => {
    const filterDirector = filterData(fakeData, "director", "Hayao Miyazaki");
    filterDirector.forEach((element) => {
      expect(element.director).toBe("Hayao Miyazaki");
    });
    expect(filterDirector.length).toBe(2);
  });
});

describe("ordenado", () => {
  it("ordena de asc - desc", () => {
    const resultasc = sortData(fakeData, "title", "asc");
    expect(resultasc).toEqual(fakeData.reverse());
  });
});

describe("ordenado2", () => {
  it("ordena de desc-asc ", () => {
    const resultdesc = sortData(fakeData, "title", "desc");
    expect(resultdesc).toEqual(fakeData.reverse());
  });
});

describe("estadistica", () => {
  it("deberia retornar Only Yesterday", () => {
    const resultestadistica = computeStats(datafake);
    expect(resultestadistica.peliculaMaxScore).toBeCloseTo("Only Yesterday");
  });
});

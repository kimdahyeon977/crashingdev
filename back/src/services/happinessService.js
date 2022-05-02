import { happyModel } from "../db/index.js";

export const happinessService = {
  getHappyLists: async () => {
    const totalHappylist = await happyModel.findAll({});
    return totalHappylist;
  },
  getSearchCountry: async ({ countryName }) => {
    const country = await happyModel.findByCountry({ countryName });
    return country;
  },
  getHappiness: async ({ country }) => {
    const analysis = await happyModel.findByCountry({
      countryName: country,
    });
    const CountryName = analysis.country.replace(" ", "%20");
    const countryFlag = `https://countryflagsapi.com/png/${CountryName}`;

    // let newLogs = [];
    // logs.map((log) => {
    //   const logInfo = await happyModel.findByCountry({
    //     countryName: log.reCountry,
    //   });
    //   // newLogs.push(
    //   console.log(logInfo);
    // );
    // });

    return { analysis, countryFlag };
  },
};

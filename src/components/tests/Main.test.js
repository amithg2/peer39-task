import * as axios from "axios";
jest.mock("axios");

//example for a good response :
const arr = [
  {
    episode_id: 1,
    title: "Pilot",
    season: "1",
    air_date: "01-20-2008",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Krazy-8",
      "Bogdan Wolynetz",
    ],
    episode: "1",
    series: "Breaking Bad",
  },
];

//making sure the data fetching from the api is working right
const fetchData = async () => {
  try {
    return await axios.get("https://www.breakingbadapi.com/api/episodes/1");
  } catch (e) {
    return [];
  }
};
describe("fetchData", () => {
  describe("when API call is successful", () => {
    it("should return episode", async () => {
        //trying to get the data of the first episode as the example
      axios.get.mockResolvedValueOnce(arr);
      const result = await fetchData();
      expect(axios.get).toHaveBeenCalledWith(
        "https://www.breakingbadapi.com/api/episodes/1"
      );
      //expecting the result from the fetching to match the example
      expect(result).toEqual(arr);
    });
  });

  describe("when API call fails", () => {
    it("should return empty array", async () => {
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      const result = await fetchData();
      expect(axios.get).toHaveBeenCalledWith(
        "https://www.breakingbadapi.com/api/episodes/1"
      );
      //if the fetching will fail the response will be an empty array
      expect(result).toEqual([]);
    });
  });
});

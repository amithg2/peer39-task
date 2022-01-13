import { render, waitFor } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createMemoryHistory } from "history";
import * as axios from "axios";
import EpisodePage from "../EpisodePage";

//Dont know what im doing wrong here
jest.mock("axios");

describe("Episode page should", () => {
  it("need to send the right request", async () => {
    const history = createMemoryHistory();

    const { debug } = render(
        <BrowserRouter history={history}>
        <Routes>
          <Route path="/:id" element={<EpisodePage />} />
          <Route path="/" element={<h1>home</h1>} />
        </Routes>
      </BrowserRouter>
    );
    debug();
    history.push("/1");
    // expect(axios.get).toHaveBeenCalledWith(
    //   "https://www.breakingbadapi.com/api/episodes/1"
    // );
  });
});

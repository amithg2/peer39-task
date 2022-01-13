import { render, screen } from "@testing-library/react";
import EpisodeCard from "../EpisodeCard";
import { BrowserRouter } from "react-router-dom";

const episode = {
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
};

//making wrapper for the browserRouter
const Wrapper = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

describe("Episode Card shuold", () => {
  test("if render properly", () => {
    //rendering the episode card inside a browser router wrapper
    render(<EpisodeCard episode={episode} />, { wrapper: Wrapper });
    //finding if the element is in the document
    const titleElement = screen.getByText("Pilot");
    expect(titleElement).toBeInTheDocument();
  });
});

import React from "react";
import EpisodeCard from "./EpisodeCard";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/SeasonStyles";

function Season({ season, seasonNum, classes }) {
    //taking the season and making each episode as a component card
  const makeEpisodes = () => {
    const newArr = season.map((episode, y) => {
      return <EpisodeCard episode={episode} key={y} />;
    });
    return newArr;
  };

  return (
    <>
      <h2 className={classes.seasonNum}>Season {seasonNum}:</h2>

      <div className={classes.season}>{makeEpisodes()}</div>
    </>
  );
}

export default withStyles(styles)(Season);

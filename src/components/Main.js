import { useState, useEffect } from "react";
import Loading from "./Loading";
import Error from "./Error";
import Season from "./Season";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/MainStyles";
import axios from "axios";

//Home page
function Main({ classes }) {
  const [episodesData, setEpisodesData] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // trying to get the data when the component is rendered.
    const getEpisodeData = async () => {
      try {
        setEpisodesData(arr);
        const response = await axios.get(
          "https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad"
        );
        //setting the data as state to cause a re-render
        setEpisodesData(response.data);
      } catch (e) {
        //catching errors - if there is an error - show the error component
        setIsError(true);
      }
    };

    //calling the function
    getEpisodeData();
  }, []);

  const makeEpisodesList = () => {
    const seasons = [];
    //taking all the data and making it as an array based on the season value of each object in the array.
    for (let season = 1; season; season++) {
      const newArr = episodesData.filter((e) => {
        if (e.season === season.toString()) {
          return e;
        }
      });
      if (!newArr.length) break;
      seasons.push(newArr);
    }
    //making components of season with all the episodes of that season
    const seasonsArr = [];
    let i = 1;
    for (let season of seasons) {
      seasonsArr.push(<Season season={season} key={i} seasonNum={i} />);
      i++;
    }
    //finally returning the array with the episodes inside thier seasons.
    return seasonsArr;
  };
  //if there is data - show all the data
  if (episodesData) {
    return (
      <>
        <h1 className={classes.title}>All Episodes:</h1>
        <li>abc</li>
        <div className={classes.Main}>{makeEpisodesList()}</div>;
      </>
    );
  } else if (isError) { //if there is an error show the error page
    return <Error />;
  } else { // loading gif while wating for data to be fetched.
    return <Loading />;
  }
}
//exporting with mui styles
export default withStyles(styles)(Main);

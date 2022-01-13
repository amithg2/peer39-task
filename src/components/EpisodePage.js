import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Error from "./Error";
import Loading from "./Loading";
import styles from "../styles/EpisodePageStyles";

function EpisodePage({ classes }) {
    //taking the id from the url
  const { id } = useParams();

  const [episodeData, setEpisodeData] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {

    //fetching data based on the url id
    const getEpisodeData = async () => {
      try {
        const response = await axios.get(
          `https://www.breakingbadapi.com/api/episodes/${id}`
        );
        return setEpisodeData(response.data[0]);
      } catch (e) {
          //setting is error when there is an error
        return setIsError(true);
      }
    };
    //calling the function
    getEpisodeData();
  }, []);

  const getAllcharacters = () => {
    const newArr = episodeData.characters.map((e, i) => {
        //replacing all the spaces with + , to match the API url
        //and linking the title to the link
      const urlName = e.replaceAll(" ", "+");
      return (
        <div className={classes.name} key={i}>
          <Link to={`/character/${urlName}`}>
            <p className={classes.p}>{e}</p>
          </Link>
        </div>
      );
    });
    //returning all the characters array
    return newArr;
  };

  //if there is data of the episode
  if (episodeData) {
    return (
      <div className={classes.Page}>
        <div className={classes.Card}>
          <h1>{episodeData.title}</h1>
          <p>Air date : {episodeData.air_date}</p>
          <p>
            <b>Characters:</b>
          </p>
          {getAllcharacters()}
        </div>
      </div>
    );
  } else if (isError) { // if there is an error
    return <Error />;
  } else { // loading while waiting the data to be fetched
    return <Loading />;
  }
}
export default withStyles(styles)(EpisodePage);

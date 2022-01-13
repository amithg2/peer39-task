import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { withStyles } from "@material-ui/styles";
import Loading from "./Loading";
import Error from "./Error";
import styles from "../styles/CharacterPageStyles";

function CharacterPage({ classes }) {
  //taking the name from the url
  const { name } = useParams();
  const [characterData, setCharacterData] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    //fetching data when the component is renderd
    let checkedName;
    //cases that the api url is with the character nickname and not the full name.
    switch (name) {
      case "Hank+Schrader":
        checkedName = "Henry+Schrader";
        break;
      case "Ted+Beneke":
        checkedName = "Theodore+Beneke";
        break;
      case "Eliott+Schwartz":
        checkedName = "Gretchen+Schwartz";
        break;
      case "The+cousins":
        checkedName = "Marco+&+Leonel+Salamanca";
        break;
      case "Steve+Gomez":
        checkedName = "Steven+Gomez";
        break;
      default:
        //if none of the above - make the name as the name in the url
        checkedName = name;
    }

    const getCharacterData = async () => {
      //try get the data from the api based on the checked name
      try {
        const { data } = await axios.get(
          `https://www.breakingbadapi.com/api/characters?name=${checkedName}`
        );
        if (data.length) {
          //if there is a character
          setCharacterData(data[0]);
          return;
        } else {
          //if it didnt found any character try getting all the characters
          //and guess if his nickname matches the name on the url
          const { data } = await axios.get(
            `https://www.breakingbadapi.com/api/characters`
          );
          const newSearchName = checkedName.replace("+", " ");
          const foundByNickname = data.find((e) => {
            if (e.nickname === newSearchName) {
              return e;
            }
          });
          if (foundByNickname !== undefined) {
            //if the character is found :
            setCharacterData(foundByNickname);
          } else {
            //if no character found
            setIsError(true);
          }
        }
      } catch (e) {
        //if there is an error
        setIsError(true);
      }
    };
    getCharacterData();
  }, []);

  if (characterData) {
    // if there is character
    const { img, name, nickname, birthday, status, occupation } = characterData;
    return (
      <div className={classes.Char}>
        <Card sx={{ maxHeight: "90vh" }}>
          <div className={classes.image}>
            <img src={img} alt={nickname} />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b> {name}</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nickname : <b>{nickname}</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Birthday : <b>{birthday}</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Status :
              <b style={{ color: status === "Alive" ? "green" : "red" }}>
                {" "}
                {status}
              </b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Occupation :
              {occupation.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/">
              <Button size="small">Return Home</Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  } else if (isError) {
    // error screen if there is an error
    return <Error />;
  } else {
    return <Loading />; // loading page while fetching the data
  }
}

export default withStyles(styles)(CharacterPage);

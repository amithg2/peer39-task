import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/EpisodeCardStyles";

function EpisodeCard({ episode, classes }) {
  return (
    <div className={classes.EpisodeCard}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            <Link to={`/${episode.episode_id}`}>
              <p>{episode.title}</p>
            </Link>
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Air Date : {episode.air_date}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(EpisodeCard);

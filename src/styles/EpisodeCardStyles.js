import sizes from "./sizes";

const styles = {
  EpisodeCard: {
    width: "25%",
    margin: "1em",
    [sizes.down("md")]: {
      width: "40%",
    },
    [sizes.down("sm")]: {
      width: "80%",
    },
    "& a": { textDecoration: "none" },
    "& p": {
      fontFamily: "Luxurious Roman, cursive",
    },
    transition: "0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
};

export default styles;

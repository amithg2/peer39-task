import sizes from "./sizes";

const styles = {
  Char: {
    width: "30vw",
    margin: " 2em auto",
    maxHeight: "90vh",
    [sizes.down("lg")]: {
      width: "50%",
    },
    [sizes.down("md")]: {
      width: "60%",
    },
    [sizes.down("sm")]: {
        width: "95%",
      },
  },
  image: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    "& img": {
      margin: "0.3em",
      maxHeight: "50vh",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
  },
};

export default styles;

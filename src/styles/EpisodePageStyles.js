import sizes from "./sizes";

const styles = {
  Page: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Luxurious Roman, cursive",
  },
  Card: {
    minWidth: "30%",
    padding: "2em",
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    [sizes.down("sm")]: {
      minWidth: "70%",
    },
    [sizes.down("xs")]: {
      width: "60%",
    },
  },
  name: {
    "& a": {
      textDecoration: "none",
    },
    "& p": {
      transition: ".3s ease",
      fontSize: "1em",
      "&:hover": {
        fontSize: "1.04em",
      },
    },
  },
};

export default styles;

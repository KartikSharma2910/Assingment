import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  wrapper: {
    "& .MuiButton-text": {
      border: "2px solid",
      borderColor: "#8EC28A",
      backgroundColor: "white",
      color: "black",
      "&:hover": {
        backgroundColor: "white",
      },
    },

    "& .MuiButton-contained": {
      backgroundColor: "#148009",
      "&:hover": {
        backgroundColor: "#148009",
      },
    },
  },

  button: {
    fontSize: "14px",
    padding: "8px 25px",
    borderRadius: "24px",
  },
};

export default styles;

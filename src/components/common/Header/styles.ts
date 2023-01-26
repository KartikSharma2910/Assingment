import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  image: {
    width: "150px",
  },

  buttonWrapper: {
    display: "flex",
    gap: "15px",
  },

  arrowIcon: {
    fontSize: "70px",
  },
};

export default styles;

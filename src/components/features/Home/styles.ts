import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  wrapper: {
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
    overflowX: "hidden",
    overflowY: "auto",
    backgroundColor: "#E2E9FE",
  },

  container: {
    padding: "2% 3.5%",
  },

  buttonWrapper: {
    display: "flex",
    gap: "15px",
  },

  mainContainer: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    marginTop: "2%",
  },

  smallImageWrapper: {
    flexBasis: "15%",
  },

  centerWrapper: {
    flexBasis: "60%",
    boxShadow: "5px 10px 18px #888888",
    height: "430px",
    objectFit: "cover",
    borderRadius: "5px",
    overflow: "hidden",
    position: "relative",
    "& .react-input-emoji--button svg": {
      fill: "black !important",
      mixBlendMode: "difference",
    },
  },

  inputWrapper: {
    position: "absolute",
    bottom: 10,
    left: 40,
    width: "40%",
    zIndex: 99,
  },

  newPage: {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "5%",
  },

  smallImage: {
    cursor: "pointer",
    width: "80%",
  },

  centerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  phoneWrapper: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "20%",
    gap: "15px",
    backgroundColor: "white",
    padding: "1% 1.5%",
    borderRadius: "15px",
    overflowY: "scroll",
  },

  textBackground: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },

  textBackgroundDropdown: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#10294A",
    color: "white",
    padding: "3% 5.5%",
    borderRadius: "10px",
    cursor: "pointer",
  },

  phoneDataWrapper: {
    display: "flex",
    justifyContent: "space-around",
    gap: "8px",
    flexWrap: "wrap",
  },

  phoneImageWrapper: {
    flexBasis: "40%",
    cursor: "pointer",
    objectFit: "cover",
  },

  phoneImage: {
    width: "100%",
    objectFit: "cover",
  },

  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1%",
  },
};

export default styles;

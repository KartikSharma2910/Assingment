import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Face6Icon from "@mui/icons-material/Face6";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { Box } from "@mui/material";
import Button from "../Button";
import styles from "./styles";

const Header = () => {
  return (
    <Box sx={styles.header}>
      <Box component="img" src="/assets/bribooks.svg" sx={styles.image} />
      <Box sx={styles.buttonWrapper}>
        <Button label="Change Theme" startIcon={<ImageOutlinedIcon />} />
        <Button
          label="Noah Bhel"
          variant="text"
          startIcon={<Face6Icon />}
          endIcon={<ArrowDropDownIcon sx={styles.arrowIcon} />}
        />
      </Box>
    </Box>
  );
};

export default Header;

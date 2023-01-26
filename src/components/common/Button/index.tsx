import { Box, Button as MatButton, ButtonProps, SxProps } from "@mui/material";
import styles from "./styles";

type CustomButtonProps = ButtonProps & {
  label: string;
  customStyles?: SxProps;
};

const Button = ({
  label,
  variant = "contained",
  customStyles,
  ...rest
}: CustomButtonProps) => {
  return (
    <Box sx={styles.wrapper}>
      <MatButton
        variant={variant}
        sx={{ ...styles.button, ...customStyles } as SxProps}
        {...rest}
      >
        {label}
      </MatButton>
    </Box>
  );
};

export default Button;

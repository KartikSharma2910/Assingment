import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import { Box } from "@mui/material";
import { useState } from "react";
import InputEmoji from "react-input-emoji";
import { PhoneData } from "../../../constant";
import { Button, Header } from "../../common";
import styles from "./styles";

const Home = () => {
  const [mainImage, setMainImage] = useState("/assets/imageThree.jpeg");
  const [value, setValue] = useState("");
  const [idx, setIdx] = useState(0);
  const [page, setPage] = useState([{ smallImage: "" }]);

  const handleOnEnter = (text: string) => {
    console.log("enter", text);
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        {/* Main Header */}

        <Header />
        <Box sx={styles.mainContainer}>
          {/* Left Side Container Box */}

          <Box sx={styles.smallImageWrapper}>
            <Box>
              {page.map(({ smallImage }, index) => {
                return (
                  <Box
                    onClick={() => {
                      setMainImage(smallImage);
                      setIdx(index);
                    }}
                    sx={{ opacity: index === idx ? 1 : 0.5 }}
                  >
                    <Box
                      component="img"
                      src={smallImage}
                      sx={styles.smallImage}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Center Image Wrapper */}

          <Box sx={styles.centerWrapper}>
            <Box sx={styles.inputWrapper}>
              <InputEmoji
                fontSize={14}
                value={value}
                onChange={setValue}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Start typing here..."
              />
            </Box>
            <Box>
              {mainImage !== "" ? (
                <Box component="img" src={mainImage} sx={styles.centerImage} />
              ) : (
                <Box sx={styles.newPage}>New Page</Box>
              )}
            </Box>
          </Box>

          {/* Phone Image Selector */}

          <Box sx={styles.phoneWrapper}>
            <Box sx={styles.textBackground}>
              Change Background <SearchIcon />
            </Box>
            <Box sx={styles.textBackgroundDropdown}>
              Imagination <ArrowDropDownIcon />
            </Box>
            <Box sx={styles.phoneDataWrapper}>
              {PhoneData.map((source, index) => {
                return (
                  <Box
                    sx={styles.phoneImageWrapper}
                    onClick={() => setMainImage(source)}
                    key={index}
                  >
                    <Box component="img" src={source} sx={styles.phoneImage} />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>

        {/* Footer Buttons  */}

        <Box sx={styles.footer}>
          <Box sx={styles.buttonWrapper}>
            <Button label="Help Me" startIcon={<SmartToyOutlinedIcon />} />
            <Button
              label="Book Review"
              variant="text"
              startIcon={<RemoveRedEyeOutlinedIcon />}
            />
            <Button
              label="Add New Page"
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => {
                const newPage = [...page];
                const pageData = {
                  smallImage: mainImage,
                };
                newPage.push(pageData);
                mainImage !== "" && setPage(newPage);
                mainImage !== "" && setIdx(idx + 1);
                setMainImage("");
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

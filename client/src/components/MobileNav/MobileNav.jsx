import { Box, IconButton, useTheme } from "@mui/material";
import { Close } from "@mui/icons-material";
import { MenuItems } from "components/MenuItems/MenuItems";
import { FlexBetween } from "components/FlexBetween/FlexBetween.styled";

export const MobileNav = ({ onClick }) => {
  const theme = useTheme();
  const background = theme.palette.background.default;

  return (
    <Box
      position="fixed"
      right="0"
      bottom="0"
      height="100%"
      zIndex="10"
      maxWidth="500px"
      minWidth="300px"
      backgroundColor={background}
    >
      {/* CLOSE ICON */}
      <Box display="flex" justifyContent="flex-end" p="1rem">
        <IconButton onClick={onClick}>
          <Close />
        </IconButton>
      </Box>
      <FlexBetween
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="3rem"
      >
        <MenuItems />
      </FlexBetween>
    </Box>
  );
};

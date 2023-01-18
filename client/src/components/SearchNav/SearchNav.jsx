import { IconButton, InputBase, useTheme } from "@mui/material";
import { Search } from "@mui/icons-material";
import FlexBetween from "components/FlexBetween/FlexBetween.styled";

export const SearchNav = () => {
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;

  return (
    <FlexBetween
      backgroundColor={neutralLight}
      borderRadius="9px"
      gap="3rem"
      padding="0.1rem 1.5rem"
    >
      <InputBase placeholder="Search..." />
      <IconButton>
        <Search />
      </IconButton>
    </FlexBetween>
  );
};

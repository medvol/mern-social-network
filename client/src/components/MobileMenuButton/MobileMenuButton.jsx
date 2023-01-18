import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

export const MobileMenuButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <Menu />
    </IconButton>
  );
};

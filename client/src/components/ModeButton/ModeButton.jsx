import { useCookies } from "react-cookie";
import { IconButton, useTheme } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

export const ModeButton = () => {
  const theme = useTheme();

  const [cookies, setCookie] = useCookies(["mode"]);

  const dark = theme.palette.neutral.dark;

  const handleMode = () => {
    if (cookies.mode === "light") {
      setCookie("mode", "dark", { path: "/" });
    }
    if (cookies.mode === "dark") {
      setCookie("mode", "light", { path: "/" });
    }
  };

  return (
    <IconButton onClick={handleMode}>
      {theme.palette.mode === "dark" ? (
        <DarkMode sx={{ fontSize: "25px" }} />
      ) : (
        <LightMode sx={{ color: dark, fontSize: "25px" }} />
      )}
    </IconButton>
  );
};

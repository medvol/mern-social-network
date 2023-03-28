import { IconButton, useTheme } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode } from "state/auth/authSlice";

export const ModeButton = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const mode = localStorage.getItem("mode");

  const dark = theme.palette.neutral.dark;

  const handleMode = () => {
    if (mode === "light") {
      localStorage.setItem("mode", "dark");
      dispatch(setMode());
    }
    if (mode === "dark") {
      localStorage.setItem("mode", "light");
      dispatch(setMode());
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

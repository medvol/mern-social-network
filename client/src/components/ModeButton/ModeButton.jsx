import { useCookies } from "react-cookie";
import { IconButton, useTheme } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode } from "state/auth/authSlice";

export const ModeButton = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  // const mode = localStorage.getItem("mode");

   const [cookies, setCookie] = useCookies(["mode"]);

  const dark = theme.palette.neutral.dark;


  const handleMode = () => {
    if (cookies.mode === "light") {
      setCookie("mode", "dark", { path: "/" });
      dispatch(setMode());
    }
    if (cookies.mode === "dark") {
      setCookie("mode", "light", { path: "/" });
      dispatch(setMode());
    }
  };

  // const handleMode = () => {
  //   if (mode === "light") {
  //     localStorage.setItem("mode", "dark");
  //     dispatch(setMode());
  //   }
  //   if (mode === "dark") {
  //     localStorage.setItem("mode", "light");
  //     dispatch(setMode());
  //   }
  // };

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

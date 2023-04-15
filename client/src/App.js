import { useEffect, useMemo, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { PagePoutes } from "components/PageRoutes/PagePoutes";
import { refreshUser } from "state/auth/operations";
import Loader from "components/Loader/Loader";

function App() {
  const [cookies, setCookie] = useCookies(["mode"]);
  const dispatch = useDispatch();

  // const mode = cookies.mode || "light";

  const mode = useMemo(() => cookies.mode || "light", [cookies.mode]);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  useEffect(() => {
    if (!cookies.mode) {
      setCookie("mode", mode, { path: "/" });
    }
  }, [cookies.mode, mode, setCookie]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <PagePoutes />
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

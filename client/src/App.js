import { useEffect, useMemo, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { PagePoutes } from "components/PageRoutes/PagePoutes";
import { useAuth } from "hooks/useAuth";
import { refreshUser } from "state/auth/operations";
import Loader from "components/Loader/Loader";

function App() {
  const { isRefreshing} = useAuth();
  const [cookies, setCookie] = useCookies(["mode"]);
  const dispatch = useDispatch();

  const mode = cookies.mode || "light";

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  useEffect(() => {
    if (!cookies.mode) {
      setCookie("mode", mode, { path: "/" });
    }
  }, [cookies.mode, mode, setCookie]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch ]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <BrowserRouter>
        <Suspense fallback={null}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <PagePoutes />
          </ThemeProvider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

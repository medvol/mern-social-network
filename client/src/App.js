import { useEffect, useMemo, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { PagePoutes } from "components/PageRoutes/PagePoutes";
import { useAuth } from "hooks/useAuth";
import { refreshUser } from "state/auth/operations";
import Loader from "components/Loader/Loader";

function App() {
  const { mode, isRefreshing } = useAuth();
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader/>
  ) : (
    <div className="app">
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

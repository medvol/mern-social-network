import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { PagePoutes } from "components/PageRoutes/PagePoutes";
import { selectMode } from "state/auth/selectors";

function App() {
  const mode = useSelector(selectMode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
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

import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { PagePoutes } from "components/PageRoutes/PagePoutes";
import { useAuth } from "hooks/useAuth";

function App() {
  const { mode } = useAuth();
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

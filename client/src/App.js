import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { PagePoutes } from "components/PageRoutes/PagePoutes";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <PagePoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { PagePoutes } from "components/PageRoutes/PagePoutes";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Suspense fallback={null}>
          <PagePoutes />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

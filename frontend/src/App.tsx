import { QueryProvider } from "./libs/react-query/QueryProvider";

import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { ContextProvider } from "./services/Context";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <QueryProvider>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </ContextProvider>
    </QueryProvider>
  );
}

export default App;

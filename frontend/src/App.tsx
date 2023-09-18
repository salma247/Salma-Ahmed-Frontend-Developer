import { Routes, Route } from "react-router-dom";
import { QueryProvider } from "./libs/react-query/QueryProvider";

import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar";

function App() {

  return (
    <QueryProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </QueryProvider>
  );
}

export default App;

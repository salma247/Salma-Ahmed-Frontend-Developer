import { Routes, Route } from "react-router-dom";
import { QueryProvider } from "./libs/react-query/QueryProvider";

import { Home } from "./pages/Home";
import { Rockets } from "./pages/Rockets";
import { Capsules } from "./pages/Capsules";
import { Navbar } from "./components/Navbar";

function App() {

  return (
    <QueryProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/capsules" element={<Capsules />} />
      </Routes>
    </QueryProvider>
  );
}

export default App;

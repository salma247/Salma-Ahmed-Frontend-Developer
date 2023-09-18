import { QueryProvider } from "./libs/react-query/QueryProvider";

import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <QueryProvider>
      <Navbar />
      <Home />
    </QueryProvider>
  );
}

export default App;

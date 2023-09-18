import { QueryProvider } from "./libs/react-query/QueryProvider";

import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { ContextProvider } from "./services/Context";

function App() {
  return (
    <QueryProvider>
      <ContextProvider>
        <Navbar />
        <Home />
      </ContextProvider>
    </QueryProvider>
  );
}

export default App;

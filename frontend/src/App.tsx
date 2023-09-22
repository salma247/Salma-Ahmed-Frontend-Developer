import { QueryProvider } from "./libs/react-query/QueryProvider";

import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { ContextProvider } from "./services/Context";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";

function App() {
  return (
    <QueryProvider>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/*"
            element={
              <RequireAuth redirectTo="/login">
                <Home />
              </RequireAuth>
            }
          />

          <Route path="/login" element={<Login />} />
        </Routes>
      </ContextProvider>
    </QueryProvider>
  );
}

function RequireAuth({
  children,
  redirectTo,
}: {
  children: React.ReactNode;
  redirectTo: string;
}) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={redirectTo} />;
  }
  return children;
}

export default App;

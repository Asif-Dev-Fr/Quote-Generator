import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ImageGenerator from "./pages/imageGenerator/ImageGenerator";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import NavComponent from "./components/NavComponent";


function App() {
  const [isLogged, setIslogged] = useState(false);

  // Methods
  const handleLogin = () => {
    console.log("first");
    setIslogged(true);
  };

  const checkLoginStatus = () => {
    const saved = localStorage.getItem("login");
    const initialValue = JSON.parse(saved);
    initialValue ? setIslogged(true) : setIslogged(false);
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <div className="App">
      <Router>
        <NavComponent isLogged={isLogged} checkLoginStatus={checkLoginStatus} />
        <Routes>
          <Route
            path="/"
            element={
              isLogged ? (
                <Navigate to={"/imageGenerator"} />
              ) : (
                <Homepage handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/imageGenerator"
            element={
              <ProtectedRoute isLogged={isLogged}>
                <ImageGenerator />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

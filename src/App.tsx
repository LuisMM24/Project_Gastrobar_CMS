import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import { useAuth } from "./services/firebase/firebase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoadingScreen from "./components/organism/LoadingScreen/LoadingScreen";
import AuthTemplate from "./components/template/AuthTemplate";

const App: React.FC = () => {
  const currentUser = useAuth();

  return (
    <div className="App h-full">
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              currentUser === null ? (
                <LoadingScreen />
              ) : (
                <AuthTemplate auth={currentUser} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

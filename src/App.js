import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./screens/header/Header";
import Home from "./screens/home";
import Share from "./screens/share";
import useToken from "./utils/useToken";
import "./server";

function App() {
  const { token } = useToken();
  return (
    <Router basename={"/youtube-funny-videos"}>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/share"
            element={!token ? <Navigate to="/" /> : <Share />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

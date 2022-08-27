import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import CreateMovie from "./Components/Admin/CreateMovie/CreateMovie";
import AdminMenu from "./Components/Admin/AdminMenu/AdminMenu";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NavBar from "./Components/NavBar/NavBar";
import { AuthProvider } from "./Components/Context/authContext";

function App() {
  //   React.useEffect(() => {
  //   console.log('render home')
  // },[])

  return (
    <div className="App">
      <AuthProvider>
        <a href="www.google.com">Main App</a>
        <NavBar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movie/:id" element={<MovieDetails />} />
            <Route exact path="/adminmenu" element={<AdminMenu />} />
            <Route
              exact
              path="/adminmenu/createmovie"
              element={<CreateMovie />}
            />
            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

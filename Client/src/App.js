import Home from "./Components/Home/Home";
import React from "react";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateMovie from "./Components/Admin/CreateMovie/CreateMovie";
import AdminMenu from "./Components/Admin/AdminMenu/AdminMenu";

function App() {
  //   React.useEffect(() => {
  //   console.log('render home')
  // },[])

  return (
    <div className="App">
      <h1>Main App</h1>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;

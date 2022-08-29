import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postMovie } from "../../../../Redux/Actions";
import Footer from "../../../Footer/Footer";
import Header from "../../../Header/Header";
import NavBar from "../../../NavBar/NavBar";
import SocialMedia from "../../../SocialMedia/SocialMedia";
import "./CreateMovie.css";

// import { v5 as UUID } from "uuid";

var value = "";
const requirements = [
  { prop: "title" },
  { prop: "genre" },
  { prop: "duration" },
  { prop: "description" },
  { prop: "teaser" },
  { prop: "display" },
  { prop: "classification" },
  { prop: "cast" },
  { prop: "director" },
  { prop: "language" },
  { prop: "comingSoon" },
  { prop: "poster" },
];

function CreateMovie(_requirements) {
  const dispatch = useDispatch();

  // const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    title: "",
    genre: [],
    duration: "",
    description: "",
    teaser: "",
    display: [],
    classification: "",
    cast: [],
    director: "",
    language: "",
    poster: "",
    comingSoon: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    //Esto funciona, increiblemente :D
    input.genre = [input.genre];
    input.cast = [input.cast];
    input.display = [input.display];

    console.log(input);

    e.preventDefault();
    dispatch(postMovie(input));
    alert("Movie Created!");
    setInput({
      title: "",
      genre: "",
      duration: "",
      description: "",
      teaser: "",
      display: "",
      classification: "",
      cast: "",
      director: "",
      writter: "",
      language: "",
      poster: "",
    });
    e.target.reset();
  }

  return (
    <div>
      <Header />
      <NavBar />
      <div className="create--movie--container">
        <div className="create--movie">
          <h1 className="create--movie--text">CreateMovie</h1>
          <br />
          <form
            className="create--movie--form"
            onSubmit={(e) => handleSubmit(e)}
          >
            {requirements.map((req) => {
              value = req.prop;
              return (
                <div>
                  <h2 className="create--movie--form--titles">
                    {req.prop[0].toUpperCase() + req.prop.substring(1) + " : "}
                  </h2>
                  <input
                    key={value}
                    className="create--movie--form--input"
                    type="text"
                    value={input.value}
                    name={req.prop}
                    // required
                    placeholder={`insert ${req.prop}`}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              );
            })}
            <br />
            <button className="create--movie--button" type="submit">
              Create Movie
            </button>

            <Link to="/adminmenu" className="create--movie--button">
              <div>Go Back</div>
            </Link>
          </form>
        </div>
      </div>
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default CreateMovie;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postMovie } from "../../../../Redux/Actions";
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
  { prop: "writter" },
  { prop: "language" },
  { prop: "release_year" },
  { prop: "poster" },
];

function CreateMovie(_requirements) {
  const dispatch = useDispatch();

  // const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
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

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    dispatch(postMovie(input));
    alert("Movie Created!");
  }

  return (
    <div className="create--movie--container">
      <div className="create--movie">
        <h1>CreateMovie</h1>
        <br />
        <form className="create--movie--form" onSubmit={(e) => handleSubmit(e)}>
          {requirements.map((req, index) => {
            value = req.prop;
            return (
              <div>
                <h2>{req.prop[0].toUpperCase() + req.prop.substring(1)}</h2>
                <input
                  key={value}
                  className="create--movie--form--input"
                  type="text"
                  value={input[value]}
                  name={req.prop}
                  required
                  placeholder={`insert ${req.prop}`}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            );
          })}
          <br />
          <button className="create--movie--submit--button" type="submit">
            Create Movie
          </button>

          <Link to="/adminmenu" className="go--back--button">
            <div>Go Back</div>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CreateMovie;

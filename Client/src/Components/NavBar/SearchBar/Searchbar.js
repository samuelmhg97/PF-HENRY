import {React, useState} from "react"
import {useDispatch} from "react-redux"
import { getMovieName } from "../../../Redux/Actions"

import "../SearchBar/SearchBar.css"

export function SearchBar() {
  const dispatch = useDispatch()

  const [name, setName] = useState("")
  
  function handleInputChange (e) {
    e.preventDefault()
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getMovieName(name))
  }
    return (
        <div className="SearchBar-container">
        <input className="SearchBar-input" type="text" placeholder="Search..." onChange={(e) => handleInputChange(e)}></input>
        <button type="submit" className="SearchBar-btn" onClick={(e) => handleSubmit(e)}>Buscar</button>
      </div>
    )
}

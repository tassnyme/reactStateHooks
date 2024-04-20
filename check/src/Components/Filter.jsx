import React, { useState } from 'react';
import { Dropdown, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';

function Filter({ tab, setTabMovie }) {
  const [clicked, setClicked] = useState("");
  const [valeur, setValeur] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const rateFilter = () => {
    setClicked("rate");
  };

  const titleFilter = () => {
    setClicked("title");
  };
  
  //if the filter is by rating we look for movies whose rating less than the input rating andd add it to the array filteredMovies 
  const applyFilter = (filterType) => {
    if (filterType === "rate") {
      const filtered = tab.filter((item) => item[7] >= parseInt(valeur));
      setTabMovie(filtered);
      console.log(filtered);
    } 
  //if the filter is by title we look for movies whose title is equal to the title given andd add it to the array filteredMovies 
  else if (filterType === "title") {
      const filtered = tab.filter((item) => item[1].toLowerCase() === valeur.toLowerCase());
      setTabMovie(filtered);
      console.log(filtered);
    }
  };
  
  

  return (
    <div>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true" >
          Filter With
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#" onClick={rateFilter}>rating</Dropdown.Item>
          <Dropdown.Item href="#" onClick={titleFilter}>title</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {clicked === "rate" && (
        <>
          <label>rate:</label>
          <input value={valeur} onChange={(e) => setValeur(e.target.value)} placeholder='Enter rate...'></input>
          <button onClick={() => applyFilter("rate")}>Apply</button>
        </>
      )}

      {clicked === "title" && (
        <>
          <label>title:</label>
          <input value={valeur} onChange={(e) => setValeur(e.target.value)} placeholder='Enter title...'></input>
          <button onClick={() => applyFilter("title")}>Apply</button>
        </>
      )}
      
      
    </div>
  );
}

export default Filter;

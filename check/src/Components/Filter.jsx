import React, { useState } from 'react';
import { Dropdown, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';

function Filter({ tab }) {
  const [clicked, setClicked] = useState("");
  const [valeur, setValeur] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const rateFilter = () => {
    setClicked("rate");
    applyFilter("rate");
  };

  const titleFilter = () => {
    setClicked("title");
    applyFilter("title");
  };

  const applyFilter = (filterType) => {
    if (filterType === "rate") {
      const filtered = tab.filter((item) => item[7] <= parseInt(valeur));
      setFilteredMovies(filtered);
      console.log(filtered);
    } else if (filterType === "title") {
      const filtered = tab.filter((item) => item[1].toLowerCase() === valeur.toLowerCase());
      setFilteredMovies(filtered);
      console.log(filtered);
    }
  };
  
  

  return (
    <div>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true" bg={}>
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
      
      <div>
        <MovieList  movies={filteredMovies} />
      </div>
    </div>
  );
}

export default Filter;

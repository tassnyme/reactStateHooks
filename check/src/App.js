import { useState } from 'react';
import MovieList from './Components/MovieList';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Filter from './Components/Filter';
 
function App() {
  const [inputValue, setInputValue] = useState('');
  const [object, setObject] = useState(["title:", "", "description:", "", "posturl:", "", "rating:", ""]);
  const [tabMovie, setTabMovie] = useState([]);
  const [index, setIndex] = useState(0);
  
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //add information(title,description,posturl,rating) to the array called object
  const add = (e) => {
    
    if (e.key === 'Enter' && index <= 6) {
      const newObject = [...object];
      newObject[index + 1] = inputValue; 
      setObject(newObject);
      setIndex(index + 2);
      setInputValue("");
    }
    console.log(object)
  }
  
  //add the object (movie ) to tabMovies and reset everything else
  const addToMovies = () => {
    const newTab = [...tabMovie, object];
    setTabMovie(newTab);
    setObject(["title", "", "description", "", "posturl", "", "rating", ""]);
    setIndex(0);
    console.log("arraayyyyy=",newTab);
  }

  return (
    <div className="App">
          <p>press <strong> enter</strong> to get the next  field.</p>
          <p style={{marginTop:'-20px'}}>press <strong> Add Movie </strong>to display the movie</p>
      <div className='mini-container'>
        <div className='title'>
      {index < 8 && object[index]}
      </div>
      <div>
      <input type="text" className='input'
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter something..."
        onKeyDown={add} />
        </div>
        <div>
      <Button onClick={addToMovies} variant="outline-success">Add Movie!</Button>
      </div>
      <div>
      <Filter tab={tabMovie} setTabMovie={setTabMovie} />
      </div>
      </div>
      <div>
      <MovieList array={tabMovie}  /> 
    </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Movie } from './App';


  export function Addmovie({ movieList, setMovieList }){
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };
    console.log(newMovie);

    setMovieList([...movieList, newMovie]);
    
  };

  return (
    <div>
      <div classNameName="add-movie-container">
        {/* <input type="text" placeholder = "Name" onChange={(event)=>setName(event.target.value)} value={name} /> */}
        <TextField id="outlined-basic" label="Movie Name" variant="outlined" onChange={(event) => setName(event.target.value)} value={name} />
        {/* <input type="text" placeholder = "Poster" onChange={(event)=>setPoster(event.target.value)} value={poster} /> */}
        <TextField id="outlined-basic" label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} value={poster} />
        {/* <input type="text" placeholder = "Rating" onChange={(event)=>setRating(event.target.value)} value={rating} /> */}
        <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} value={rating} />
        {/* <input type="text" placeholder = "Summary" onChange={(event)=>setSummary(event.target.value)} value={summary} /> */}
        <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} value={summary} />

        {/* <button onClick={addMovie}>Add Movie</button> */}
        <Button onClick={addMovie} variant="contained">Add Movie</Button>
      </div>
      
    </div>
  );
}
